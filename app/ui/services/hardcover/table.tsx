export default function TableHardcover() {
  return(
    <div className="overflow-x-scroll">
      <table className="min-w-[650px] w-full border-t border-[#BEC7E2] border-collapse">
        <thead>
            <tr className="border-b border-border">
              <th className="border-r border-border p-4 font-semibold min-w-52 text-left">Твердый переплет дипломов</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">До 50 стр.</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">До 150 стр.</th>
              <th className="border-r border-border p-4 min-w-16 font-normal text-gray text-left">До 240 стр.</th>
              <th className="p-4 min-w-16 font-normal text-gray text-left">До 330 стр.</th>
            </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">С гербом</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">550 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">600 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">640 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">680 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">С надписью ВКР</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">550 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">600 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">640 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">680 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Без надписей</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">450 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">550 ₽</td>
            <td className="border-r border-border p-4 min-w-16 font-normal text-left">590 ₽</td>
            <td className="p-4 min-w-16 font-normal text-left">640 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Расшивка</td>
            <td className="p-4 font-normal text-center">200 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Вставка одного файла</td>
            <td className="p-4 font-normal text-center">10 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Кармашек для диска</td>
            <td className="p-4 font-normal text-center">60 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Диск</td>
            <td className="p-4 font-normal text-center">60 ₽</td>
          </tr>
          <tr className="border-b border-border">
            <td className="border-r border-border p-4 min-w-52 text-gray text-left">Запись на диск</td>
            <td className="p-4 font-normal text-center">50 ₽</td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}