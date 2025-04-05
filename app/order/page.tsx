import TitleForServices from "@/app/ui/common/titleForServices";
import Steps from './steps'
import ChooseCover from './chooseCover'

export default function Page() {
  return(
    <div className="wrapper flex flex-col justify-between px-5">
      <TitleForServices 
        title="твёрдый переплёт дипломов"
        subtitle="Твёрдый перёплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. 
        Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены." />
      <Steps />
      <ChooseCover />
    </div>
  );
}