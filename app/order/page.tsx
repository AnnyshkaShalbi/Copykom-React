'use client'

import { useOrder } from '@/app/context/OrderContext';

import Title from "@/app/ui/common/title";
import Steps from '../ui/order/steps'
import StepOne from '../ui/order/stepOne/stepOne'
import StepTwo from '../ui/order/stepTwo/stepTwo'
import StepThree from '../ui/order/stepThree/stepThree';

export default function Page() {
  const { currentStep } = useOrder();
  const subtitle = "Твёрдый перёплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены."

  return(
    <div className="wrapper flex flex-col justify-between px-5">
      <Title 
        title="твёрдый переплёт дипломов"
        subtitle={currentStep === 1 && subtitle} />
      <Steps active={currentStep ?? 1} />
      { currentStep === 1 && <StepOne /> }
      { currentStep === 2 && <StepTwo /> }
      { currentStep === 3 && <StepThree /> }
    </div>
  );
}