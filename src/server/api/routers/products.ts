import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ page: z.number().optional().default(1) }))
    .query(async ({ ctx, input: { page } }) => {
      const offSet = 15
      
      const allProducts = await ctx.db.products.findMany({
        skip: page === 1 ?  page - 1 : (offSet * page) - offSet,
        take: offSet,
      })

      const count = await ctx.db.products.count()
     
      return {
        products: allProducts,
        pages: Math.ceil(count / offSet),
      };
    }),
});
