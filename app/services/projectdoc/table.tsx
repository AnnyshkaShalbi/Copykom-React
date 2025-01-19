export default function TableProjectdoc() {
  return(
    <div className="overflow-x-scroll">
      <table className="min-w-[650px] w-full border-t border-[#BEC7E2] border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Черно-белая печать</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A4</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A3</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A2</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A1</th>
            <th className="p-4 min-w-16 font-normal text-gray text-left">A0</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">на обычной бумаге (80 г.)</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">8 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">22 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">45 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">60 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">100 ₽</td>
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
            <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Цветная печать</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A4</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A3</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A2</th>
            <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">A1</th>
            <th className="p-4 min-w-16 font-normal text-gray text-left">A0</th>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border text-left flex justify-between min-w-52">
              <div className="w-full flex border-r border-border items-center">
                <span className="text-gray">на обычной бумаге (80 г.)</span>
              </div>
              <div className="flex flex-col justify-between">
                <div className="border-b border-border p-4">
                  <span className="text-nowrap">{`( < 25 %)`}</span>
                </div>
                <div className="border-b border-border p-4">
                  <span className="text-nowrap">{`( < 50 %)`}</span>
                </div>
                <div className="p-4">
                  <span className="text-nowrap">{`( > 50 %)`}</span>
                </div>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap font-normal text-left">30 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap font-normal text-left">36 ₽</span>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap font-normal text-left">55 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap font-normal text-left">55 ₽</span>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">95 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">140 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">210 ₽</span>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">150 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">200 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">330 ₽</span>
              </div>
            </td>
            <td>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">190 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">280 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap text-left font-normal">500 ₽</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="p-4 min-w-16 h-12"> </td>
          </tr>
          <tr>
            <td className="border-r border-border p-4 min-w-52 text-left">Фальцовка (за 1 лист)</td>
            <td className="p-4 font-normal text-center">10 ₽</td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}