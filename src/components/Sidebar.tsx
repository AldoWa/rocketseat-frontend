interface SidebarProps {
  totalItems: string;
  subTotalItems: string;
}

export function Sidebar({ totalItems, subTotalItems }: SidebarProps) {
  return (
    <aside className="min-w-80 bg-white h-[32rem] py-4 px-6">
      <h2 className="font-semibold text-lg text-[#41414D] mb-7">Resumo do pedido</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="text-base font-normal text-[#41414D] pb-2">Subtotal Produtos</td>
            <td className="text-end font-normal text-base text-[#41414D] pb-2">{ subTotalItems }</td>
          </tr>
          <tr>
            <td className="text-base font-normal text-[#41414D] pb-6">Entrega</td>
            <td className="text-end text-base font-normal text-[#41414D] pb-6">R$ 40</td>
          </tr>
          <tr className="border border-[#DCE2E5]"></tr>
          <tr>
            <td className="text-base font-semibold text-[#41414D] pt-2">Total</td>
            <td className="text-end text-base font-semibold text-[#41414D] pt-2">{ totalItems }</td>
          </tr>
        </tbody>
      </table>
      <button type="button"
        className="bg-[#51B853] text-[#F5F5FA] text-base font-medium py-3 w-full rounded mt-10"
      >Finalizar a compra</button>
    </aside>
  )
}