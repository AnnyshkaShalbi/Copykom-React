import CoverForDiplom from './coverForDiplom'
import ColorForCover from './colorForCover'

export default function Diplom(){
  return(
    <div className='flex flex-col gap-6 sm:gap-10'>
      <ColorForCover />
      <CoverForDiplom />
    </div>
  )
}