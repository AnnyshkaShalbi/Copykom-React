export default function Table() {
  return(
    <div className="overflow-x-scroll">
      <table className="min-w-[650px] w-[650px] mt-4 border-t border-[#BEC7E2] border-collapse">
        <thead>
            <tr className="border-b border-border">
              <th className="border-r border-border p-4 font-semibold w-80 text-left">Черно-белая печать чертежей</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A4</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A3</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A2</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A1</th>
              <th className="p-4 min-w-16 font-normal text-[#464F6A] text-left">A0</th>
            </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-80 text-[#464F6A] text-left">на обычной бумаге (80 г.)</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">10 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">22 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">60 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">80 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">130 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-80 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="p-4 min-w-16 h-12"> </td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-80 font-semibold text-left">Цветная печать чертежей</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A4</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A3</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A2</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">A1</td>
            <td className="p-4 min-w-16 font-normal text-[#464F6A] text-left">A0</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border text-left flex justify-between w-80">
              <div className="w-full flex border-r border-border items-center">
                <span className="text-[#464F6A]">на обычной бумаге (80 г.)</span>
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
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap font-normal text-left">55 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap font-normal text-left">60 ₽</span>
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
            <td className="border-r border-border p-4 w-80 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="p-4 min-w-16 h-12"> </td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-80 font-semibold text-left">Черно-белая печать нестандартных чертежей</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А4*3</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А4*4</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А3*3</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А2*3</td>
            <td className="p-4 min-w-16 font-normal text-[#464F6A] text-left">А1*3</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-80 text-[#464F6A] text-left">
                на обычной бумаге (80 г.)
            </td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">45 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">55 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">80 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">170 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">280 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 w-80 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="border-r border-border p-4 min-w-16 h-12"> </td>
            <td className="p-4 min-w-16 h-12"> </td>
          </tr>
          <tr className="border-b border-border">
              <td className="border-r border-border p-4 w-80 font-semibold text-left">Цветная печать чертежей</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А4*3</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А4*4</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А3*3</td>
              <td className="border-r border-border p-4 min-w-16 font-normal text-[#464F6A] text-left">А2*3</td>
              <td className="p-4 min-w-16 font-normal text-[#464F6A] text-left">А1*3</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border text-left flex justify-between w-80">
              <div className="w-full flex border-r border-border items-center">
               <span className="text-[#464F6A]">на обычной бумаге (80 г.)</span>
              </div>
              <div className="flex flex-col justify-between">
                <div className="border-b border-border p-4">
                  <span className="text-nowrap">{`( < 25 %)`}</span>
                </div>
                <div className="border-b border-border p-4">
                  <span className="text-nowrap">{`( < 50 %)`}</span>
                </div>
                <div className="border-b border-border p-4">
                  <span className="text-nowrap">{`( > 50 %)`}</span>
                </div>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">75 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">105 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap">160 ₽</span>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">100 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">160 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap">260 ₽</span>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">130 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">190 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap">360 ₽</span>
              </div>
            </td>
            <td className="border-r border-border">
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">220 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">350 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap">560 ₽</span>
              </div>
            </td>
            <td>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">380 ₽</span>
              </div>
              <div className="border-b border-border p-4 min-w-16">
                <span className="text-nowrap">490 ₽</span>
              </div>
              <div className="p-4 min-w-16">
                <span className="text-nowrap">910 ₽</span>
              </div>
            </td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}