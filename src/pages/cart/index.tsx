import { CartCard } from "@/components/CartCard";
import { Sidebar } from "@/components/Sidebar";
import Cup from "@public/cup.png"

export default function Cart () {
  return (
    <main className="flex container mx-auto mt-8 gap-x-8">
      <div className="w-full">
        <h2 className="font-medium text-2xl	text-[#41414D]">SEU CARRINHO</h2>
        <p className="mt-1.5 mb-6">Total (3 produtos) <b>R$161,00</b></p>
        <ul className="flex flex-col w-full gap-y-4 max-h-[820px] overflow-y-scroll">
          <CartCard 
            description="Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto."
            id={1}
            imageUrl={Cup}
            name="Caneca de cerâmica rústica"
            price="R$ 40,00"
            qtd={1}
            key={1}
          />
          <CartCard 
            description="Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto."
            id={1}
            imageUrl={Cup}
            name="Caneca de cerâmica rústica"
            price="R$ 40,00"
            qtd={1}
            key={1}
          />
              <CartCard 
            description="Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto."
            id={1}
            imageUrl={Cup}
            name="Caneca de cerâmica rústica"
            price="R$ 40,00"
            qtd={1}
            key={1}
          />
              <CartCard 
            description="Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto."
            id={1}
            imageUrl={Cup}
            name="Caneca de cerâmica rústica"
            price="R$ 40,00"
            qtd={1}
            key={1}
          />
        </ul>
      </div>
      <Sidebar />
    </main>
  )
}