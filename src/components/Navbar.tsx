import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { DropDown } from "./Dropdown"

const activeLinkClass = "text-base font-semibold text-[#41414D] cursor-pointer border-b-4 border-b-[#FFA585]"
const inactiveLinkClass = "text-base font-normal text-[#737380] cursor-pointe"

export const Navbar = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathName = usePathname();

  const productActive = params.get("product")
  
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center	gap-x-10">
        <Link href={`${pathName}`}
          className={!productActive ? activeLinkClass : inactiveLinkClass}
        >Todos os produtos</Link>
        <Link href={`${pathName}?product=camisetas`} className={productActive === 'camisetas' ? activeLinkClass : inactiveLinkClass}>Camisetas</Link>
        <Link href={`${pathName}?product=canecas`} className={productActive === 'canecas' ? activeLinkClass: inactiveLinkClass}>Canecas</Link>
      </div>

      <DropDown />
    </nav>  
  )
}