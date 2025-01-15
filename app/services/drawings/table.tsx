export default function Table() {
  return(
    <div className="overflow-x-scroll">
      <table className="min-w-[650px] w-[650px] mt-4 border-t border-[#BEC7E2] border-collapse">
        <thead>
            <tr className="border-b border-border">
              <th className="border-r border-border p-4 font-semibold w-52 text-nowrap text-left">Черно-белая печать чертежей</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A4</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A3</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A2</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A1</th>
              <th className="p-4 min-w-16 font-normal text-[#464F6A] text-left">A0</th>
            </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-52 text-[#464F6A] text-left">на обычной бумаге (80 г.)</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">10 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">22 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">60 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">80 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">130 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-52 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="p-4 min-w-16 h-12"> </td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-52 font-semibold text-left">Цветная печать чертежей</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A4</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A3</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A2</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A1</td>
            <td className="p-4 min-w-16 font-normal text-[#464F6A] text-left">A0</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border text-left flex justify-between">
              <div className="w-full flex border-r border-border items-center">
                <span className="text-[#464F6A]">на обычной бумаге (80 г.)</span>
              </div>
              <div className="w-[45%] flex flex-col justify-between">
                <div className="border-b border-border p-2">
                  <span className="text-nowrap">{`( < 25 %)`}</span>
                </div>
                <div className="border-b border-border p-2">
                  <span className="text-nowrap">{`( < 50 %)`}</span>
                </div>
                <div className="p-2">
                  <span className="text-nowrap">{`( > 50 %)`}</span>
                </div>
              </div>
            </td>
            <td className="border-r border-border flex flex-col">
              <span className="text-nowrap border-r border-border p-4 min-w-16 font-normal text-left">30 ₽</span>
              <span className="text-nowrap border-r border-border p-4 min-w-16 font-normal text-left">30 ₽</span>
              <span className="text-nowrap p-4 min-w-16 font-normal text-left">36 ₽</span>
            </td>
            <td className="border-r border-border flex flex-col">
              <span className="text-nowrap border-r border-border p-4 min-w-16 font-normal text-left">55 ₽</span>
              <span className="text-nowrap border-r border-border p-4 min-w-16 font-normal text-left">55 ₽</span>
              <span className="text-nowrap p-4 min-w-16 font-normal text-left">60 ₽</span>
            </td>
            <td className="border-r border-border flex flex-col">
              <span className="text-nowrap">95 ₽</span>
              <span className="text-nowrap">140 ₽</span>
              <span className="text-nowrap">210 ₽</span>
            </td>
            <td className="border-r border-border flex flex-col">
              <span className="text-nowrap">150 ₽</span>
              <span className="text-nowrap">200 ₽</span>
              <span className="text-nowrap">330 ₽</span>
            </td>
            <td className="border-r border-border flex flex-col">
              <span className="text-nowrap">190 ₽</span>
              <span className="text-nowrap">280 ₽</span>
              <span className="text-nowrap">500 ₽</span>
            </td>
          </tr>
          <tr className="table-body-row__drawings">
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
          </tr>
          <tr className="table-body-row__drawings">
              <td className="table-body-cell font-weight-600">Черно-белая печать нестандартных чертежей</td>
              <td className="table-body-cell text-gray font-weight-400">А4*3</td>
              <td className="table-body-cell text-gray font-weight-400">А4*4</td>
              <td className="table-body-cell text-gray font-weight-400">А3*3</td>
              <td className="table-body-cell text-gray font-weight-400">А2*3</td>
              <td className="table-body-cell text-gray font-weight-400">А1*3</td>
          </tr>
          <tr className="table-body-row__drawings">
              <td className="table-body-cell text-gray font-weight-400 table-body-cell__wrap">
                  на обычной бумаге (80 г.)
              </td>
              <td className="table-body-cell text-nowrap">45 ₽</td>
              <td className="table-body-cell text-nowrap">55 ₽</td>
              <td className="table-body-cell text-nowrap">80 ₽</td>
              <td className="table-body-cell text-nowrap">170 ₽</td>
              <td className="table-body-cell text-nowrap">280 ₽</td>
          </tr>
          <tr className="table-body-row__drawings">
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
              <td className="table-body-cell"> </td>
          </tr>
          <tr className="table-body-row__drawings">
              <td className="table-body-cell font-weight-600">Цветная печать чертежей</td>
              <td className="table-body-cell text-gray font-weight-400">А4*3</td>
              <td className="table-body-cell text-gray font-weight-400">А4*4</td>
              <td className="table-body-cell text-gray font-weight-400">А3*3</td>
              <td className="table-body-cell text-gray font-weight-400">А2*3</td>
              <td className="table-body-cell text-gray font-weight-400">А1*3</td>
          </tr>
          <tr className="table-body-row__drawings">
              <td className="table-body-cell__unick text-gray font-weight-400 ">
                  <span className="table-body-cell__unick-center">на обычной бумаге (80 г.)</span>
                  <div className="table-body-cell__add3">
                      <span className="table-body-cell__add3-item">{`( < 25 %)`}</span>
                      <span className="table-body-cell__add3-item">{`( < 50 %)`}</span>
                      <span className="table-body-cell__add3-item">{`( > 50 %)`}</span>
                  </div>
              </td>
              <td className="table-body-cell__col-2">
                  <span className="text-nowrap">75 ₽</span>
                  <span className="text-nowrap">105 ₽</span>
                  <span className="text-nowrap">160 ₽</span>
              </td>
              <td className="table-body-cell__col-2">
                  <span className="text-nowrap">100 ₽</span>
                  <span className="text-nowrap">160 ₽</span>
                  <span className="text-nowrap">260 ₽</span>
              </td>
              <td className="table-body-cell__col-2">
                  <span className="text-nowrap">130 ₽</span>
                  <span className="text-nowrap">190 ₽</span>
                  <span className="text-nowrap">360 ₽</span>
              </td>
              <td className="table-body-cell__col-2">
                  <span className="text-nowrap">220 ₽</span>
                  <span className="text-nowrap">350 ₽</span>
                  <span className="text-nowrap">560 ₽</span>
              </td>
              <td className="table-body-cell__col-2 border-right-none">
                  <span className="text-nowrap">380 ₽</span>
                  <span className="text-nowrap">490 ₽</span>
                  <span className="text-nowrap">910 ₽</span>
              </td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}