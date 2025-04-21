'use client'

import { useState } from "react";

import ColorForCover from './colorForCover'
import CoverForDiploma from "./colorForDiploma"
import LogoForCover from "./logoForCover"
import FinalCover from "./finalCover"

export default function StepOne() {
  const [selectedColor, setSelectedColor] = useState<string>('bg-primary');
  const [selectedCover, setSelectedCover] = useState<number>(0);
  const [selectedLogo, setSelectedLogo] = useState<number>(0); 

  return(
    <div className="flex flex-col gap-10">
      <ColorForCover 
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor} />
      <CoverForDiploma 
        selectedColor={selectedColor}
        selectedCover={selectedCover}
        setSelectedCover={setSelectedCover} />
      <LogoForCover
        selectedLogo={selectedLogo}
        setSelectedLogo={setSelectedLogo} />
      <FinalCover 
        selectedColor={selectedColor}
        selectedCover={selectedCover}
        selectedLogo={selectedLogo} />
    </div>
  )
}

 



