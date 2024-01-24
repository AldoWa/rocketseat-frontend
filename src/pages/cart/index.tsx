import { CartCard } from "@/components/CartCard";
import { Sidebar } from "@/components/Sidebar";
import { CartContext } from "@/context/cartContext";
import transformToMoney from "@/utils/transformToMoney";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

export default function Cart () {
  const { cart, removeItemFromCart } = useContext(CartContext)
  const [totalItems, setTotalItems] = useState('R$ 0,00')
  const [subTotalItems, setSubTotalItems] = useState('R$ 0,00')

  useEffect(() => {
    const result = cart.reduce((acc, item) => {
      return acc + (item.price * item.qtd)
    }, 0)

    setTotalItems(transformToMoney(result + 40))
    setSubTotalItems(transformToMoney(result))
  }, [cart])

  return (
    <>
    <Head>
      <title>Rocket Front | Carrinho</title>
      <meta name="description" content="Carrinho de compras" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex container mx-auto mt-8 gap-x-8">
      <div className="w-full">
        <h2 className="font-medium text-2xl	text-[#41414D]">SEU CARRINHO</h2>
        <p className="mt-1.5 mb-6">Total ({ cart.length } produtos) <b>{subTotalItems}</b></p>
        <ul className="flex flex-col w-full gap-y-4 max-h-[820px] overflow-y-auto">
          { cart.length ? 
            cart.map((item) => (
              <CartCard
                description={item.description}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                price={`${transformToMoney(item.price)}`}
                qtd={item.qtd}
                key={item.id}
                removeItemFromCart={removeItemFromCart}
              ></CartCard>
            ))
          : <li className="text-center list-none">Seu carrinho está vazio</li>}
        </ul>
      </div>
      <Sidebar 
        subTotalItems={subTotalItems}
        totalItems={totalItems}
      />
    </main>
    </>
  )
}