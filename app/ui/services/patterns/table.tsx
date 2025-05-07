import { tenor_sans } from "@/app/ui/fonts"

export default function TablePatterns() {
  return(
    <div>
      <h3 className={`hidden lg:block uppercase pb-4 border-b border-primary text-lg ${tenor_sans.className}`}>прайс-лист</h3>
      <div className="overflow-x-scroll">
        <table className="min-w-[650px] w-full border-t border-[#BEC7E2] border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Лекала и выкройки</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">Ширина печати, м</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">Вид печати</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">Цена за м.п.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray text-left">на обычной бумаге (белая, 80 г.)</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">0,9</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">Без вырезания</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">140 ₽</td>
            </tr>
            <tr>
              <td className="border-r border-border p-4 min-w-52 h-12"> </td>
              <td className="border-r border-border p-4 min-w-16 h-12"> </td>
              <td className="border-r border-border p-4 min-w-16 h-12"> </td>
              <td className="p-4 min-w-16 h-12"> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  )
}