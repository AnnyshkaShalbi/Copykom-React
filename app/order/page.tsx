'use client'

import { useState } from 'react';

import Title from "@/app/ui/common/title";
import Steps from '../ui/order/steps'
import StepOne from '../ui/order/stepOne/stepOne'

export default function Page() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return(
    <div className="wrapper flex flex-col justify-between px-5">
      <Title 
        title="твёрдый переплёт дипломов"
        subtitle="Твёрдый перёплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. 
        Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены." />
      <Steps active={currentStep ?? 1} />
      <StepOne />
    </div>
  );
}