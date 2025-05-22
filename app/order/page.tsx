
import type { Metadata } from "next";
import Order from '@/app/ui/order/order'

export const metadata: Metadata = {
  title: 'Твёрдый переплёт дипломов в Москве | Копиком',
  description: 'Профессиональный твёрдый переплёт дипломов и диссертаций с эмблемой вуза. Гарантия качества. Срочное изготовление за 1-2 дня.',
  openGraph: {
    title: 'Твёрдый переплёт дипломов в Москве | Копиком',
    description: 'Профессиональный твёрдый переплёт дипломов и диссертаций с эмблемой вуза. Гарантия качества. Срочное изготовление за 1-2 дня.',
  },
};

export default function Page() {
  return <Order /> 
}