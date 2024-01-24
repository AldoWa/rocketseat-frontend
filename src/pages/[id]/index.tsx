import Image from "next/image";

import Cart from "@public/cart.svg";
import Cup from "@public/cup@2x.png";

export default function Product() {
  return (
    <main className="flex container mx-auto mt-8">
      <Image
        src={Cup}
        alt="Mug"
        width={640}
        height={580}
      ></Image>
      <section className="flex flex-col justify-between ml-8">
        <div>
          <p className="font-normal text-base text-[#41414D] mb-3">Caneca</p>
          <h2 className="font-light text-3xl text-[#41414D] mb-1">Caneca de cerâmica rústica</h2>
          <p className="font-semibold text-xl text-[#09090A] mb-6">R$ 40,00</p>
          <p className="font-normal text-xs text-[#41414D]">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <div className="mt-14">
            <h3 className="text-[#737380] text-base font-medium mb-2">Descrição</h3>
            <p className="text-[#41414D] text-sm font-normal">Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
          </div>
        </div>
        <button type="button" className="flex items-center justify-center bg-[#115D8C] text-white py-3">
          <span className="text-[##F5F5FA] font-medium text-base">ADICIONAR AO CARRINHO</span>
        </button>
      </section>
    </main>
  )
}