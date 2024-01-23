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

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ page: z.number().optional().default(1), productType: z.string().optional().default('all') }))
    .query(async ({ ctx, input: { page, productType } }) => {
      const offSet = 15
      const where = getWhereType(productType)

      const allProducts = await ctx.db.products.findMany({
        skip: page === 1 ?  page - 1 : (offSet * page) - offSet,
        take: offSet,
        where
      })

      const count = await ctx.db.products.count({
        where
      })
     
      return {
        products: allProducts,
        pages: Math.ceil(count / offSet),
      };
    }),
});
