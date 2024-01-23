import Link from "next/link"
import { DropDown } from "./Dropdown"
import { generateLink } from "@/utils/generateLink"
import useQueryParams from "@/hooks/useQueryParams"

const activeLinkClass = "text-base font-semibold text-[#41414D] cursor-pointer border-b-4 border-b-[#FFA585]"
const inactiveLinkClass = "text-base font-normal text-[#737380] cursor-pointe"

export const Navbar = () => {
  const { pathName, productActive, typeActive } = useQueryParams()
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center	gap-x-10">
        <Link href={`${pathName}`}
          className={!productActive ? activeLinkClass : inactiveLinkClass}
        >Todos os produtos</Link>
        <Link href={generateLink(pathName, 't-shirts', typeActive)} className={productActive === 't-shirts' ? activeLinkClass : inactiveLinkClass}>Camisetas</Link>
        <Link href={generateLink(pathName, 'mugs', typeActive)} className={productActive === 'mugs' ? activeLinkClass: inactiveLinkClass}>Canecas</Link>
      </div>

      <DropDown />
    </nav>  
  )
}