import Title from "@/app/ui/common/title";
import Steps from '../ui/order/steps'
import ChooseCover from '../ui/order/chooseCover'

export default function Page() {
  return(
    <div className="wrapper flex flex-col justify-between px-5">
      <Title 
        title="твёрдый переплёт дипломов"
        subtitle="Твёрдый перёплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. 
        Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены." />
      <Steps />
      <ChooseCover />
    </div>
  );
}