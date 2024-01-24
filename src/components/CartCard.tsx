import Image, { type StaticImageData } from "next/image";
import Delete from "@public/delete.svg"

interface CartCardProps {
  name: string;
  description: string;
  price: string;
  qtd: number;
  id: number;
  imageUrl: string | StaticImageData;
}

export function CartCard({ id, name, description, price, qtd, imageUrl }: CartCardProps) {
  return (
    <li className="list-none flex max-h-[211px] bg-white rounded-lg">
      <Image src={imageUrl} width={256} height={211} alt={name} className="rounded-l-lg"></Image>
      <div className="px-8 py-4  w-full">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-light text-[#41414D]">{ name }</h2>
          <button type="button">
            <Image
            src={Delete as string}
            width={24}
            height={24}
            alt="Delete item from cart"
            ></Image>
          </button>
        </div>
        <p className="text-xs	font-normal text-[#41414D] mb-6 max-w-md">{description}</p>
        <div className="flex items-center justify-between">
          <select name="Quantity" id="quantity" className="w-16 h-10 border border-[#A8A8B3] rounded-lg	font-normal text-base text-[#737380] px-3" disabled>
            <option value="1">1</option>
          </select>
          <p className="text-base font-semibold text-[#09090A]">{price}</p>
        </div>
      </div>
    </li>
  )
}