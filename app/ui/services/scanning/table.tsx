import { tenor_sans } from "@/app/ui/fonts"

export default function TableScanning() {
  return(
    <div>
      <h3 className={`hidden lg:block uppercase pb-4 border-b border-primary text-lg ${tenor_sans.className}`}>прайс-лист</h3>
      <div className="overflow-x-scroll">
        <table className="min-w-[650px] w-full border-t border-[#BEC7E2] border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Сканирование документов</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">А4</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">А3</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">А2</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">А1</th>
              <th className="p-4 min-w-16 font-normal text-gray text-left">А0</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray text-left"> </td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">10 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">22 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">60 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">80 ₽</td>
              <td className="p-4 min-w-16 font-normal text-left">130 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}