import Image from "next/image";
import { type GetStaticProps, type GetStaticPaths, type GetStaticPropsContext, type InferGetStaticPropsType } from "next";

import Cup from "@public/cup@2x.png";
import { db } from "@/server/db";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "@/server/api/root";
import superjson from "superjson";
import { api } from "@/utils/api";

export const getStaticProps = async (context: GetStaticPropsContext<{ id: string }>,) => {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {
      db,
    },
    transformer: superjson, 
  });

  const id = context.params?.id;

  await helpers.products.getById.prefetch({ id: +id! });

  return {
    props: {
      trpcState: helpers.dehydrate(),
      id: +id!,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await db.products.findMany({
    select: {
      id: true,
    },
  });
  return {
    paths: products.map((product) => ({
      params: {
        id: `${product.id}`,
      },
    })),
    
    fallback: false,
  };
};

export default function Product({ id }: Readonly<InferGetStaticPropsType<typeof getStaticProps>>) {
  const { data, isLoading } = api.products.getById.useQuery({ id })
  
  if(isLoading) {
    return (
      <main className="flex container mx-auto mt-8">
        <div>Loading...</div>
      </main>
    )
  }

  return (
    <main className="flex container mx-auto mt-8">
      <Image
        src={data?.imageUrl ?? Cup}
        alt={data?.name ?? "Caneca"}
        width={640}
        height={580}
      ></Image>
      <section className="flex flex-col justify-between ml-8">
        <div>
          <p className="font-normal text-base text-[#41414D] mb-3">{ data?.category === 't-shirt' ? 'Camisetas' : 'Canecas' }</p>
          <h2 className="font-light text-3xl text-[#41414D] mb-1">{ data?.name }</h2>
          <p className="font-semibold text-xl text-[#09090A] mb-6">R$ 40,00</p>
          <p className="font-normal text-xs text-[#41414D]">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <div className="mt-14">
            <h3 className="text-[#737380] text-base font-medium mb-2">Descrição</h3>
            <p className="text-[#41414D] text-sm font-normal">{ data?.description }</p>
          </div>
        </div>
        <button type="button" className="flex items-center justify-center bg-[#115D8C] text-white py-3">
          <span className="text-[##F5F5FA] font-medium text-base">ADICIONAR AO CARRINHO</span>
        </button>
      </section>
    </main>
  )
}