'use client'

import { useOrder } from '@/app/context/OrderContext';
import Title from "@/app/ui/common/title";
import StepsOrder from './steps'
import StepOne from '@/app/ui/order/stepOne/stepOne'
import StepTwo from '@/app/ui/order/stepTwo/stepTwo'
import StepThree from '@/app/ui/order/stepThree/stepThree';


export default function Steps() {
  const { currentStep } = useOrder();
  const subtitle = "Твёрдый перёплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены."

  return(
    <div className="wrapper flex flex-col justify-between px-5">
      <Title 
        title="твёрдый переплёт дипломов"
        subtitle={currentStep === 1 && subtitle} />
      <StepsOrder active={currentStep ?? 1} />
      { currentStep === 1 && <StepOne /> }
      { currentStep === 2 && <StepTwo /> }
      { currentStep === 3 && <StepThree /> }
    </div>
  );
}