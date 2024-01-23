import Image from "next/image";
import Arrow from "../../public/arrow.svg";
import Link from "next/link";
import { useState } from "react";
import { generateLink } from "@/utils/generateLink";
import useQueryParams from "@/hooks/useQueryParams";

const fontDefault = (isActive: boolean) => `font-normal text-sm ${isActive ? 'text-[#41414D]' : 'text-[#737380]'} cursor-pointer`;

export const DropDown = () => {
  const [opened, setOpened] = useState(false);
  const { pathName, productActive, typeActive } = useQueryParams();
  console.log(typeActive)
  return (
    <div className="relative flex	flex-col items-end">
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
        className={`"shadow-[0_4px_12px_0_#0000001A]] max-w-44 rounded bg-white px-4 py-3 ${opened ? "" : "hidden"} absolute top-8 w-44	`}
      >
        <li className={fontDefault(typeActive === "news")}>
          <Link
            href={generateLink(
              pathName,
              productActive,
              typeActive === "news" ? null : "news",
            )}
          >
            Novidades
          </Link>
        </li>
        <li className={`mt-1 ${fontDefault(typeActive === "price_bigger_minor")}`}>
          <Link
            href={generateLink(
              pathName,
              productActive,
              typeActive === "price_bigger_minor" ? null : "price_bigger_minor",
            )}
          >
            Preço: Maior - menor
          </Link>
        </li>
        <li className={`mt-1 ${fontDefault(typeActive === "price_minor_bigger")}`}>
          <Link
            href={generateLink(
              pathName,
              productActive,
              typeActive === "price_minor_bigger" ? null : "price_minor_bigger",
            )}
          >
            Preço: Menor - maior
          </Link>
        </li>
        <li className={`mt-1 ${fontDefault(typeActive === "best_sellers")}`}>
          <Link
            href={generateLink(
              pathName,
              productActive,
              typeActive === "best_sellers" ? null : "best_sellers",
            )}
          >
            Mais vendidos
          </Link>
        </li>
      </ul>
    </div>
  );
};
