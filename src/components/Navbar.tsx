import Link from "next/link"
import { useSearchParams } from "next/navigation"

const activeLinkClass = "text-base font-semibold text-[#41414D] cursor-pointer border-b-4 border-b-[#FFA585]"
const inactiveLinkClass = "text-base font-normal text-[#737380] cursor-pointe"

export const Navbar = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const productActive = params.get("product")

  return (
    <nav className="flex items-center	gap-x-10">
      <Link href="/"
        className={!productActive ? activeLinkClass : inactiveLinkClass}
      >Todos os produtos</Link>
      <Link href="/?product=camisetas" className={productActive === 'camisetas' ? activeLinkClass : inactiveLinkClass}>Camisetas</Link>
      <Link href="/?product=canecas" className={productActive === 'canecas' ? activeLinkClass: inactiveLinkClass}>Canecas</Link>
    </nav>  
  )
}