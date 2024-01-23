import Image from "next/image";
import Arrow from "../../public/arrow.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const fontDefault = "font-normal text-sm text-[#737380]";

export const DropDown = () => {
  const pathName = usePathname();
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col	items-end relative">
      <button
        id="menubutton"
        type="button"
        aria-controls="menu"
        className="mb-2 flex items-center"
        onClick={() => setOpened(!opened)}
      >
        <span className="text-sm font-normal text-[#737380]">
          Organizar por
        </span>{" "}
        <Image
          alt="Open dropdown menu"
          src={Arrow as string}
          width={24}
          height={24}
          className={`${opened ? "rotate-0" : "-rotate-90"} transition ease-in-out`}
        />
      </button>
      <ul
        id="menu"
        aria-hidden={!opened}
        aria-labelledby="menubutton"
        className={`"shadow-[0_4px_12px_0_#0000001A]] max-w-44 rounded bg-white px-4 py-3 ${opened ? '' : 'hidden'} absolute w-44 top-8	`}
      >
        <li className={fontDefault}>
          <Link href={`${pathName}?type=news`}>Novidades</Link>
        </li>
        <li className={`mt-1 ${fontDefault}`}>
          <Link href={`${pathName}?type=price_bigger_minor`}>
            Preço: Maior - menor
          </Link>
        </li>
        <li className={`mt-1 ${fontDefault}`}>
          <Link href={`${pathName}?type=price_minor_bigger`}>
            Preço: Menor - maior
          </Link>
        </li>
        <li className={`mt-1 ${fontDefault}`}>
          <Link href={`${pathName}?type=best_sellers`}>Mais vendidos</Link>
        </li>
      </ul>
    </div>
  );
};
