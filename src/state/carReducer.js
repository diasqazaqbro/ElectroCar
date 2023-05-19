const CURRENT_PRICE = "CURRENT_PRICE";
let initialState = {
  currentPrice: "",
  cars: [
    {
      inStock: false,
      filter: "sedans",
      name: "Zeekr001 Sedan",
      price: 50000,
      desk: {
        desk1: "3.8 секунд",
        desk2: "544 л.с",
        desk3: "606 км по CLTC",
        desk4: "4WD (Полный)",
        desk5: "5/5",
      },
      tuningColor: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-white-715x455.png",
          name: "Extra White",
          price: 100000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z02-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-grey-715x455.png",
          name: "Gray",
          price: 300,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z03-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-black-715x455.png",
          name: "Black",
          price: 100,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z01-50x50.png",
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
      inStock: true,
      filter: "electro",
      name: "Zeekr001",
      price: 100000,
      desk: {
        desk1: "3.8 секунд",
        desk2: "544 л.с",
        desk3: "606 км по CLTC",
        desk4: "4WD (Полный)",
        desk5: "5/5",
        desk6: "ДШВ",
        desk7: "Колесная база нифиговая",
        desk8: "Нифиговые колеса",
        desk9: "Титан",
      },
      moreDetails: {},
      tuningColor: [
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-white-715x455.png",
          name: "Extra White",
          price: 100000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z02-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-grey-715x455.png",
          name: "Gray",
          price: 150000,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z03-50x50.png",
        },
        {
          img: "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/kuzov/zeekr-001-black-715x455.png",
          name: "Black",
          price: 100,
          imgLogo:
            "https://rucars.ru/image/cache/catalog/cars/Zeekr/color/z01-50x50.png",
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
    // {
    //   id: 3,
    //   inStock: true,
    //   filter: "sedans",
    //   name: "NIO ET5",
    //   price: 50000,
    //   desk: {
    //     desk1: "4 секунды",
    //     desk2: "490 л. с",
    //     desk3: "700",
    //     desk4: "4WD (полный)",
    //   },
    //   moreDetails: {},
    //   tuningColor: [
    //     {
    //       img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/Beznazvaniya(2)-715x455.png",
    //       name: "Белый",
    //       price: 0,
    //     },
    //     {
    //       img: "https://rucars.ru/image/cache/catalog/cars/NIOET5/Beznazvaniya(1)-715x455.png",
    //       name: "Серый ",
    //       price: 500,
    //     },
    //   ],
    //   tuningWheels: [
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-04-transformed-715x455.png',
    //       name: "21 дюймовые",
    //       price: 228,
    //     },
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-03-transformed-715x455.png',
    //       name: "21 дюймовые Arclight Phantom ",
    //       price: 0,
    //     },
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-01-transformed-715x455.png',
    //       name: "21 дюймовые Air Vortex",
    //       price: 1000,
    //     },
    //   ],
    //   tuningSalon: [
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/salon/salon-zeekr-001-3-715x455.jpg',
    //       name: "Оранжевый с серый (Алькантара)",
    //       price: 0,
    //     },
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/salon/salon-zeekr-001-4-715x455.png',
    //       name: "Платина (Наппа + алькантара)",
    //       price: 100,
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   inStock: true,
    //   filter: "minivans",
    //   name: "Voyah Dreamer",
    //   price: 205000,
    //   desk: {
    //     desk1: "6.6 секунды",
    //     desk2: "394 л.с",
    //     desk3: "750 км EVR / 82 км EV",
    //     desk4: "4WD (Полный)",
    //   },
    //   moreDetails: {},
    //   tuningColor: [
    //     {
    //       img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/VoyahDreamer-5-transformed-715x455.png",
    //       name: "Черный",
    //       price: 0,
    //     },
    //     {
    //       img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/VoyahDreamer-4-transformed-715x455.png",
    //       name: "Белый",
    //       price: 0,
    //     },
    //     {
    //       img: "https://rucars.ru/image/cache/catalog/cars/Voyah/VoyahDreamer/color/VoyahDreamer-7-transformed-715x455.png",
    //       name: "Светло золотой",
    //       price: 1000,
    //     },
    //   ],
    //   tuningWheels: [
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-04-transformed-715x455.png',
    //       name: "21 дюймовые",
    //       price: 228,
    //     },
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-03-transformed-715x455.png',
    //       name: "21 дюймовые Arclight Phantom ",
    //       price: 0,
    //     },
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/koleso/zeekr-001-koleso-01-transformed-715x455.png',
    //       name: "21 дюймовые Air Vortex",
    //       price: 1000,
    //     },
    //   ],
    //   tuningSalon: [
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/salon/salon-zeekr-001-3-715x455.jpg',
    //       name: "Оранжевый с серый (Алькантара)",
    //       price: 0,
    //     },
    //     {
    //       img: 'https://rucars.ru/image/cache/catalog/cars/Zeekr/color/salon/salon-zeekr-001-4-715x455.png',
    //       name: "Платина (Наппа + алькантара)",
    //       price: 100,
    //     },
    //   ],
    // },
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
