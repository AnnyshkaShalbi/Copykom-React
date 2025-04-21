import CheckboxCircle from "../../common/checkboxCircle"

export default function UpdateFileOption() {
  return(
    <div className="flex flex-col gap-3">
      <div className="border border-solid border-grey-light py-4 px-5 h-full flex flex-col">
        <h3>Печатать</h3>
        <div>
          {/* <CheckboxCircle active="bg-primary" /> */}
          <span>Чёрно-белая</span>
        </div>
        <div>
          {/* <CheckboxCircle active="bg-primary" /> */}
          <span>Цветная</span>
        </div>
      </div>

      <div className="border border-solid border-grey-light py-4 px-5 h-full flex flex-col">
        <h3>Дополнительно</h3>
      </div>
    </div>
  )
}