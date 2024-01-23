import { Saira_Stencil_One } from "next/font/google";

import Image from "next/image";
import Link from "next/link";

import Cart from "../../public/cart.svg";
import Search from "../../public/search-loupe.svg";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <div className=" bg-white">
      <header className="container mx-auto flex items-center justify-between py-5">
        <h1 className={`${sairaStencilOne.className} text-4xl text-[#5D5D6D]`}>
          capputeeno
        </h1>
        <div className="flex items-center">
          <div className="relative mr-6">
            <input
              type="text"
              placeholder="Procurando por algo específico"
              className="w-80	rounded-lg bg-[#F3F5F6] px-4 py-2.5 "
            />
            <Image
              src={Search as string}
              alt="Search item"
              className="absolute right-3 top-1/2 -translate-y-1/2 transform"
            ></Image>
          </div>
          <Link href="/" title="Cart" className="relative">
            <Image
              src={Cart as string}
              alt="Cart to go to the cart page"
              aria-describedby="Cart Quantity"
            ></Image>
            <div className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-[#DE3838] px-1 py-1 -right-2 top-3">
              <span
                id="Cart Quantity"
                className="text-xs font-medium text-white"
              >
                3
              </span>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};
