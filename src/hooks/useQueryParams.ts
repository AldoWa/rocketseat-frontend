import { usePathname, useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const productActive = params.get("product")
  const typeActive = params.get('type')

  return {
    pathName,
    productActive,
    typeActive
  }
}

export default useQueryParams