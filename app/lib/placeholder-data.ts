const metro = [
  {
    title: "Метро Авиамоторная",
    address: "ул. Красноказарменная, 15к1",
    openinghouse: "пн-пт 9.00-18.00, сб 9:00- 16:00"
  },
  {
    title: "Метро Аэропорт",
    address: "Ленинрадский проспект, 66",
    openinghouse: "пн-пт 9:30-18:00, сб 9:30- 16:00"
  },
  {
    title: "Метро Бауманская",
    address: "ул. Ладожская, 10",
    openinghouse: "пн-сб 8:00-19.00"
  },
  {
    title: "Метро Октябрьская",
    address: "Ленинский проспект, 4с1А",
    openinghouse: "пн-пт 8.30-18.00, сб 8:30- 16:00"
  }
]

const steps = [
  {
    index: true,
    text: "Загружаешь диплом",
  },
  {
    index: true,
    text: "Выбираешь цвет и обложку",
  },
  {
    index: false,
    text: "Забираешь свой диплом",
  },
]

const blueColors = [
  {
    id: 0,
    price: 500,
    title: "Без тиснения",
    image: "/covers/blue/withoutEmblems/empty.png",
    diplomWork: false,
    diplomProject: false,
    finalWork: false,
    masterThesis: false
  },
  {
    id: 1,
    price: 500,
    title: "С тиснением ВКР",
    image: "/covers/blue/withoutEmblems/finalWork.png",
    diplomWork: false,
    diplomProject: false,
    finalWork: true,
    masterThesis: false
  },
  {
    id: 2,
    price: 500,
    title: "С тиснением ДР",
    image: "/covers/blue/withoutEmblems/diplomWork.png",
    diplomWork: true,
    diplomProject: false,
    finalWork: false,
    masterThesis: false
  },
  {
    id: 3,
    price: 500,
    title: "С тиснением ДП",
    image: "/covers/blue/withoutEmblems/diplomProject.png",
    diplomWork: false,
    diplomProject: true,
    finalWork: false,
    masterThesis: false
  },
  {
    id: 4,
    price: 500,
    title: "С тиснением МД",
    image: "/covers/blue/withoutEmblems/masterThesis.png",
    diplomWork: false,
    diplomProject: false,
    finalWork: false,
    masterThesis: true
  }
]

const redColors =[
  {
    id: 0,
    price: 500,
    title: "Без тиснения",
    image: "/covers/red/withoutEmblems/empty.png",
    diplomWork: false,
    diplomProject: false,
    finalWork: false,
    masterThesis: false
  },
  {
    id: 1,
    price: 500,
    title: "С тиснением ВКР",
    image: "/covers/red/withoutEmblems/finalWork.png",
    diplomWork: false,
    diplomProject: false,
    finalWork: true,
    masterThesis: false
  },
  {
    id: 2,
    price: 500,
    title: "С тиснением ДР",
    image: "/covers/red/withoutEmblems/diplomWork.png",
    diplomWork: true,
    diplomProject: false,
    finalWork: false,
    masterThesis: false
  },
  {
    id: 3,
    price: 500,
    title: "С тиснением ДП",
    image: "/covers/red/withoutEmblems/diplomProject.png",
    diplomWork: false,
    diplomProject: true,
    finalWork: false,
    masterThesis: false
  },
  {
    id: 4,
    price: 500,
    title: "С тиснением МД",
    image: "/covers/red/withoutEmblems/masterThesis.png",
    diplomWork: false,
    diplomProject: false,
    finalWork: false,
    masterThesis: true
  }
]

const logos = [
  {
    id: 0,
    price: false,
    title: "Без эмблемы",
    image: ""
  },
  {
    id: 1,
    price: 150,
    title: "МАДИ",
    image: "/logos/vector/madi.svg"
  },
  {
    id: 2,
    price: 150,
    title: "Финашка",
    image: "/logos/vector/fin.svg"
  },
  {
    id: 3,
    price: 150,
    title: "Бауманка",
    image: "/logos/vector/baumanka.svg"
  },
  {
    id: 4,
    price: 150,
    title: "МАИ",
    image: "/logos/vector/mai.svg"
  },
  {
    id: 5,
    price: 150,
    title: "МЭИ",
    image: "/logos/vector/mei.svg"
  }
]

export { metro, steps, blueColors, redColors, logos };