import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Pagination } from "@/components/Pagination";
import { Card } from "@/components/Card";
import { api } from "@/utils/api";
import { useState } from "react";
import useQueryParams from "@/hooks/useQueryParams";


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { productActive, typeActive } = useQueryParams();

  const { data, isLoading } = api.products.getAll.useQuery({
    page: currentPage,
    productType: productActive ?? undefined,
    sortBy: typeActive ?? undefined,
  });

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  }
  return (
    <>
      <Head>
        <title>Rocket Front</title>
        <meta name="description" content="Site do teste da RocketSeat em Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { !isLoading ? <main className="container mx-auto mt-8">
        <Navbar/>
        <div className="mt-6 mb-8 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={data?.pages ?? 0}
            onPageChange={handleChangePage} 
          />
        </div>
        <section className="grid xl:grid-cols-5 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8">         
          { data?.products ? data.products.map((product) => (
            <Card id={product.id}
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price='R$ 40,00'/>
          )) : (<h1>No results</h1>)}
        </section>
        <div className="mt-6 pb-8 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={data?.pages ?? 0}
            onPageChange={handleChangePage} 
          />
        </div>
      </main> : <div className="container mx-auto mt-8">Loading...</div>}
    </>
  );
}

