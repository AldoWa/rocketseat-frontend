import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type Prisma } from "@prisma/client";

const getWhereType = (productType: string): Prisma.ProductsWhereInput => {
  return productType === 'all' ? {} : {
    category: {
      equals: productType
    }
  }
}

const getOrderBy = (sortBy: string): Prisma.ProductsOrderByWithRelationInput => {
  if(sortBy === 'news') {
    return {
      createdAt: 'desc'
    }
  }
  return {}
}

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ page: z.number().optional().default(1), productType: z.string().optional().default('all'), sortBy: z.string().optional().default('') }))
    .query(async ({ ctx, input: { page, productType, sortBy } }) => {
      const offSet = 15
      const where = getWhereType(productType)
      const orderBy = getOrderBy(sortBy)

      const allProducts = await ctx.db.products.findMany({
        skip: page === 1 ?  page - 1 : (offSet * page) - offSet,
        take: offSet,
        where,
        orderBy
      })

      const count = await ctx.db.products.count({
        where,
        orderBy
      })
     
      return {
        products: allProducts,
        pages: Math.ceil(count / offSet),
      };
    }),
  
  getById: publicProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input: { id } }) => {
    const product = await ctx.db.products.findUnique({
      where: {
        id
      }
    })

    return product
  })
});
