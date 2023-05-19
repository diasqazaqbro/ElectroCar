const CURRENT_PRICE = "CURRENT_PRICE";
let initialState = {
  currentPrice: "",
  cars: [
    {
      id: 1,
      inStock: true,
      filter: "electro",
      name: "Zeekr001",
      price: 100000,
      desk: {
        desk1: "3.8 секунд",
        desk2: "544 л.с",
        desk3: "606 км по CLTC",
        desk4: "4WD (Полный)",
        desk5: "5 / 4",
        desk6: "4694*1850*1443",
        desk7: "2875",
        desk8: "235/45 R18",
        desk9: "Искусственная кожа",
      },
      tuningColor: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-white-715x455.png",
          name: "Extra White",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z02-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-grey-715x455.png",
          name: "Gray",
          price: 100,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z03-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-black-715x455.png",
          name: "Black",
          price: 500,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z04-50x50.png",
        },
      ],
      tuningWheels: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-04-transformed-715x455.png",
          name: "21 дюймовые",
          price: 228,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/Z001H005_detail_img-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-03-transformed-715x455.png",
          name: "21 дюймовые Arclight Phantom ",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/Z001H004_detail_img-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-01-transformed-715x455.png",
          name: "21 дюймовые Air Vortex",
          price: 1000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/Z001H001_detail_img-50x50.png",
        },
      ],
      tuningSalon: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/salon/salon-zeekr-001-3-715x455.jpg",
          name: "Оранжевый с серый (Алькантара)",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/zs07-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/salon/salon-zeekr-001-4-715x455.png",
          name: "Платина (Наппа + алькантара)",
          price: 100,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/zs10-50x50.png",
        },
      ],
    },
    {
      id: 2,
      inStock: true,
      filter: "sedans",
      name: "NIO ET5",
      price: 50000,
      desk: {
        desk1: "6.1 секунды",
        desk2: "264 л.с",
        desk3: "556 км",
        desk4: "RWD (Задний)",
        desk5: "5 / 4",
        desk6: "4694*1850*1443",
        desk7: "2875",
        desk8: "235/45 R18",
        desk9: "Искусственная кожа",
      },
      tuningColor: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/Beznazvaniya(2)-715x455.png",
          name: "Белый",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z02-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/Beznazvaniya(1)-715x455.png",
          name: "Серый",
          price: 500,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z03-50x50.png",
        },
      ],
      tuningWheels: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/Beznazvaniya(10)-715x455.png",
          name: "19 дюймовые диски Yunfan с шинами Michelin e.Primacy",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/wheels/et5-4-50x50.jpg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/Beznazvaniya(13)-715x455.png",
          name: "20 дюймовые пятиспицевые диски Sharpie с шинами Pirelli P Zero",
          price: 1000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/wheels/et5-1-50x50.jpg",
        },
      ],
      tuningSalon: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/salon1-715x455.png",
          name: "Светлый потолок черный салон",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color-salon/col1-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/salon9-715x455.png",
          name: "Фиолетовый + черная потолок",
          price: 5000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color-salon/col9-50x50.png",
        },
      ],
    },
    {
      id: 3,
      inStock: true,
      filter: "minivans",
      name: "Voyah Dreamer",
      price: 205000,
      desk: {
          desk1: "6.1 секунды",
          desk2: "264 л.с",
          desk3: "556 км",
          desk4: "RWD (Задний)",
          desk5: "5 / 4",
          desk6: "4694*1850*1443",
          desk7: "2875",
          desk8: "235/45 R18",
          desk9: "Искусственная кожа",
      },
      tuningColor: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/VoyahDreamer-5-transformed-715x455.png",
          name: "Черный",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/black-50x50.jpeg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/VoyahDreamer-4-transformed-715x455.png",
          name: "Белый",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/white-50x50.jpeg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/VoyahDreamer-7-transformed-715x455.png",
          name: "Светло золотой",
          price: 1000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/light_gold-50x50.jpg",
        },
      ],
      tuningWheels: [
        {
          img: "",
          name: "",
          price: 0,
          imgLogo: "",
        },
      ],
      tuningSalon: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/5-715x455.jpg",
          name: "Бежевый",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/Frame3-50x50.jpg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/4-715x455.jpg",
          name: "Светло коричневый",
          price: 100,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/light_brown-50x50.jpg",
        },
      ],
    },
    {
      id: 4,
      inStock: true,
      filter: "electro",
      name: "Tesla Model 3",
      price: 300000,
      desk: {
        desk1: "6.1 секунды",
        desk2: "264 л.с",
        desk3: "556 км",
        desk4: "RWD (Задний)",
        desk5: "5 / 4",
        desk6: "4694*1850*1443",
        desk7: "2875",
        desk8: "235/45 R18",
        desk9: "Искусственная кожа",
      },
      tuningColor: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/tesla/model3/color/model-3-2-715x455.jpg",
          name: "Черный",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/black-50x50.jpeg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/tesla/model3/color/model-3-1-715x455.jpg",
          name: "Белый",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/white-50x50.jpeg",
        },

        {
          img: "https://rucars.ru/image/cache/catalog/cars/tesla/model3/color/model-3-3-715x455.jpg",
          name: "Синий",
          price: 1000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/blue-50x50.jpeg",
        },
      ],
      tuningWheels: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/tesla/model3/color/model-3-4-715x455.jpg",
          name: "18 дюймовые черные",
          price: 0,
          imgLogo: "https://rucars.ru/image/cache/catalog/cars/tesla/model3/color/18-50x50.jpg",
        },
      ],
      tuningSalon: [
        {
          img: "",
          name: "",
          price: 0,
          imgLogo: "",
        },
      ],
    },
    {
      id: 5,
      inStock: true,
      filter: "crossover",
      name: "Cadillac Lyriq",
      price: 400000,
      desk: {
        desk1: "6.1 секунды",
        desk2: "264 л.с",
        desk3: "556 км",
        desk4: "RWD (Задний)",
        desk5: "5 / 4",
        desk6: "4694*1850*1443",
        desk7: "2875",
        desk8: "235/45 R18",
        desk9: "Искусственная кожа",
      },
      tuningColor: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Cadillac/color/cadillac-lyriq-05-transformed-715x455.png",
          name: "Черный",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/black-50x50.jpeg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Cadillac/color/cadillac-lyriq-01-transformed-715x455.png",
          name: "Белый",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/white-50x50.jpeg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Cadillac/color/cadillac-lyriq-06-transformed-715x455.png",
          name: "Синий",
          price: 1000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/blue-50x50.jpeg",
        },
      ],
      tuningWheels: [
        {
          img: "",
          name: "",
          price: 0,
          imgLogo: "",
        },
      ],
      tuningSalon: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Cadillac/cadillac-lyriq/8899-715x455.jpg",
          name: "Белый",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/white-50x50.jpeg",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Cadillac/cadillac-lyriq/0222-715x455.jpg",
          name: "Черный",
          price: 0,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/options/color/black-50x50.jpeg",
        },
      ],
    },
  ],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_PRICE: {
      return { ...state, currentPrice: action.sum };
    }

    default:
      return state;
  }
};

export const calculatorProduct = (sum) => ({
  type: CURRENT_PRICE,
  sum,
});

export default carReducer;
