export default function TablePresentations() {
  return(
    <div>
      <h3 className="uppercase">прайс-лист</h3>
      <div className="overflow-x-scroll">
        <table className="min-w-[650px] w-full border-t border-[#BEC7E2] border-collapse">
          <thead>
              <tr className="border-b border-border">
                <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Печать презентаций</th>
                <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A4</th>
                <th className="border-border p-4 min-w-16 font-normal text-gray text-left">A3</th>
              </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray text-left">1-100 страниц</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">10 ₽</td>
              <td className="border-border p-4 min-w-16 font-normal text-left">22 ₽</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 h-12">101-300 страниц</td>
              <td className="border-r border-border p-4 min-w-16 h-12">22 ₽</td>
              <td className="border-border p-4 min-w-16 h-12">18 ₽</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 h-12"> </td>
              <td className="border-r border-border p-4 min-w-16 h-12"> </td>
              <td className="border-border p-4 min-w-16 h-12"> </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 font-semibold text-left">Цветная печать презентаций</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A4</td>
              <td className="border-border p-4 min-w-16 font-normal text-gray text-left">A3</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray flex items-center justify-between">
                <p className="">1-100 страниц</p>
                <span className="text-nowrap">{`( < 50 %)`}</span>
              </td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">30 ₽</td>
              <td className="border-border p-4 min-w-16 font-normal text-left">55 ₽</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border-r border-border p-4 min-w-52 text-gray flex items-center justify-end">
                <span className="text-nowrap">{`( > 50 %)`}</span>
              </td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">36 ₽</td>
              <td className="border-border p-4 min-w-16 font-normal text-left">60 ₽</td>
            </tr>
            <tr>
              <td className="border-r border-b border-border p-4 min-w-52 text-gray flex items-center justify-between">
                <p className="">1-300 страниц</p>
                <span className="text-nowrap">{`( < 50 %)`}</span>
              </td>
              <td className="border-r border-b border-border p-4 min-w-16 font-normal text-left">30 ₽</td>
              <td className="border-b border-border p-4 min-w-16 font-normal text-left">55 ₽</td>
            </tr>
            <tr>
              <td className="border-r border-border p-4 min-w-52 text-gray flex items-center justify-end">
                <span className="text-nowrap">{`( > 50 %)`}</span>
              </td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-left">36 ₽</td>
              <td className="p-4 min-w-16 font-normal text-left">60 ₽</td>
            </tr>
          </tbody>
      </table>
      </div>
    </div>
    
  )
}