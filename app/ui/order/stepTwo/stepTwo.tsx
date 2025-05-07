import UpdateFileForm from "./updateFileForm"
import UpdateFileOption from "./updateFileOption"
import Readness from "./readness"

export default function StepTwo() {

  return(
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[60%_37.1%] lg:gap-7">
        <UpdateFileForm />
        <UpdateFileOption />
      </div>
      <Readness />
    </>
  )
}

 



