import { tenor_sans } from "@/app/ui/fonts"

export default function TableCopydoc() {
  return(
    <div>
      <h3 className={`hidden lg:block uppercase pb-4 border-b border-primary text-lg ${tenor_sans.className}`}>прайс-лист</h3>
      <div className="overflow-x-scroll">
        <table className="min-w-[650px] w-full border-t border-[#BEC7E2] border-collapse">
          <thead>
              <tr className="border-b border-border">
                <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Черно-белая сканирование</th>
                <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A4</th>
                <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A3</th>
                <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A2</th>
                <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A1</th>
                <th className="p-4 min-w-16 font-normal text-gray text-left">A0</th>
              </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray text-left">1-100 страниц</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">10 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">22 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">60 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">80 ₽</td>
              <td className="p-4 min-w-16 font-normal text-left">130 ₽</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 h-12">101-300 страниц</td>
              <td className="border-r border-border p-4 min-w-16 h-12">8 ₽</td>
              <td className="border-r border-border p-4 min-w-16 h-12">18 ₽</td>
              <td className="p-4 min-w-16 h-12"> </td>
              <td className="p-4 min-w-16 h-12"> </td>
              <td className="p-4 min-w-16 h-12"> </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 h-12"> </td>
              <td className="border-r border-border p-4 min-w-16 h-12"> </td>
              <td className="border-r border-border p-4 min-w-16 h-12"> </td>
              <td className="border-r border-border p-4 min-w-16 h-12"> </td>
              <td className="border-r border-border p-4 min-w-16 h-12"> </td>
              <td className="p-4 min-w-16 h-12"> </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 font-semibold text-left">Цветное копирование</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A4</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A3</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A2</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A1</td>
              <td className="p-4 min-w-16 font-normal text-gray text-left">A0</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray flex items-center justify-between">
                <p className="">1-100 страниц</p>
                <span className="text-nowrap">{`( < 50 %)`}</span>
              </td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">30 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">55 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">85 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">110 ₽</td>
              <td className="p-4 min-w-16 font-normal text-left">130 ₽</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray flex items-center justify-end">
                <span className="text-nowrap">{`( > 50 %)`}</span>
              </td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">36 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">60 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">150 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">190 ₽</td>
              <td className="p-4 min-w-16 font-normal text-left">280 ₽</td>
            </tr>
            <tr>
              <td className="border-r border-b border-border p-4 min-w-52 text-gray flex items-center justify-between">
                <p className="">1-300 страниц</p>
                <span className="text-nowrap">{`( < 50 %)`}</span>
              </td>
              <td className="border-r border-b border-border p-4 min-w-16 font-normal text-left">25 ₽</td>
              <td className="border-r border-b border-border p-4 min-w-16 font-normal text-left">50 ₽</td>
              <td className="border-b border-border p-4 min-w-16 font-normal text-left"> </td>
              <td className="border-b border-border p-4 min-w-16 font-normal text-left"> </td>
              <td className="border-b border-border p-4 min-w-16 font-normal text-left"> </td>
            </tr>
            <tr>
              <td className="border-r border-border p-4 min-w-52 text-gray flex items-center justify-end">
                <span className="text-nowrap">{`( > 50 %)`}</span>
              </td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">30 ₽</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">55 ₽</td>
              <td className="p-4 min-w-16 font-normal text-left"> </td>
              <td className="p-4 min-w-16 font-normal text-left"> </td>
              <td className="p-4 min-w-16 font-normal text-left"> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}