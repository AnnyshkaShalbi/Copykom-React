import UpdateFileForm from "./updateFileForm"
import UpdateFileOption from "./updateFileOption"
import Readness from "./readness"

export default function StepTwo() {

  return(
    <>
      <div className="grid grid-cols-[60%_37.1%] gap-[1.75rem]">
        <UpdateFileForm />
        <UpdateFileOption />
      </div>
      <Readness />
    </>
  )
}

 



