export default function TableBrochure() {
  return(
    <div className="overflow-x-scroll">
      <table className="min-w-[650px] w-full border-t border-[#BEC7E2] border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Брошюровка документов</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">До 50 стр.</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">До 100 стр.</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">До 150 стр.</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">До 220 стр.</th>
            <th className="p-4 min-w-16 font-normal text-gray text-left">До 320 стр.</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Цена одного переплёта</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">100 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">150 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">200 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">250 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">300 ₽</td>
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
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Разжатие пружины</td>
            <td className="p-4 font-normal text-center">20 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Вставка новых листов</td>
            <td className="p-4 font-normal text-center">30 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Вставка файла / чертежа</td>
            <td className="p-4 font-normal text-center">10 ₽</td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}