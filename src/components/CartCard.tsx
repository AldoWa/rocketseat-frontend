import Image, { type StaticImageData } from "next/image";
import Delete from "@public/delete.svg";

interface CartCardProps {
  name: string;
  description: string;
  price: string;
  qtd: number;
  imageUrl: string | StaticImageData;
  removeItemFromCart: (id: number) => void;
  id: number;
}

export function CartCard({
  name,
  description,
  price,
  qtd,
  imageUrl,
  removeItemFromCart,
  id, 
}: CartCardProps) {
  return (
    <li className="flex max-h-[211px] list-none rounded-lg bg-white">
      <Image
        src={imageUrl}
        width={256}
        height={211}
        alt={name}
        className="rounded-l-lg"
      ></Image>
      <div className="w-full px-8  py-4">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-light text-[#41414D]">{name}</h2>
          <button type="button" onClick={() => removeItemFromCart(id)}>
            <Image
              src={Delete as string}
              width={24}
              height={24}
              alt="Delete item from cart"
            ></Image>
          </button>
        </div>
        <p className="mb-6	max-w-md text-xs font-normal text-[#41414D]">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div
            className="flex h-10 w-16 items-center justify-center	rounded-lg border 
          border-[#A8A8B3] px-3 text-base
          font-normal text-[#737380]"
          >
            {qtd}
          </div>
          <p className="text-base font-semibold text-[#09090A]">{price}</p>
        </div>
      </div>
    </li>
  );
}
