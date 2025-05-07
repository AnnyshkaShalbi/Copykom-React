'use client'

import ColorForCover from './colorForCover'
import CoverForDiploma from "./colorForDiploma"
import LogoForCover from "./logoForCover"
import FinalCover from "./finalCover"

export default function StepOne() {
  

  return(
    <div className="flex flex-col gap-6 sm:gap-10">
      <ColorForCover />
      <CoverForDiploma />
      <LogoForCover />
      <FinalCover />
    </div>
  )
}

 



