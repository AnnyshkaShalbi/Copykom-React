import React from 'react';

const Home: React.FC = () => {
  return(
    <>
      <span>Хей, студент! Тебя уже всё достало и ты хочешь поскорее сдать диплом?</span>
      <h1>ЗАКАЖИ ПЕЧАТЬ <br/>ДИПЛОМА У НАС</h1>

      <div className='bg-[#003FFF1A] px-3 py-4'>
        <p className='text-primary'>P.S. Только у нас ты можешь сделать обложку с фирменной эмблемой своего ВУЗа!</p>
      </div>

      <HomePoint index={1} text='Загружаешь диплом' />
      <HomePoint index={2} text='Выбираешь цвет и обложку' />
      <HomePoint index={3} text='Забираешь свой диплом' />
    </>
  );
};

interface HomePointProps {
  index: number,
  text: string,
}

const HomePoint: React.FC<HomePointProps> = ({ index, text }) => {
  return(
    <div>
      <span>{index}</span>
      <p>{text}</p>
    </div>
  )
}

export default Home;