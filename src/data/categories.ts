export const CAR_BRANDS = [
  "Acura", "Alfa Romeo", "Audi", "Avior", "BMW", "BYD", "Baic", "Belgee", 
  "Brilliance", "Cadillac", "Changan", "Chery", "Chevrolet", "Chrysler", 
  "Citroen", "Cupra", "DS", "DW", "Dacia", "Daewoo", "Daihatsu", "Datsun", 
  "Dodge", "Dongfeng", "Exeed", "FAW", "Fiat", "Ford", "Forthing", "Foton", 
  "GAC", "Geely", "Genesis", "Great Wall", "Haval", "Honda", "Hongqi", 
  "Hummer", "Hyundai", "Infiniti", "Iran Khodro", "Isuzu", "Iveco", "JAC", 
  "JMC", "Jaecoo", "Jaguar", "Jeep", "Jetour", "Jetta", "KGM", "Kaiyi", "Kia", 
  "Lancia", "Land Rover", "Lexus", "LiXiang", "Lifan", "Lynk&Co", "MAN", "MG", 
  "Maserati", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", 
  "Omoda", "Opel", "Oting", "Peugeot", "Porsche", "Ravon", "Renault", "SWM", 
  "Saab", "Seat", "Skoda", "Solaris", "Sollers", "Soueast", "SsangYong", 
  "Subaru", "Suzuki", "Tank", "Tenet", "Tesla", "Toyota", "Volkswagen", 
  "Volvo", "Voyah", "Wey", "Xcite", "Zotye", "АЗЛК", "ВАЗ", "ГАЗ", "ЗАЗ", 
  "ИЖ", "Москвич", "ТагАЗ", "УАЗ", "Универсальные"
];

export const TOYOTA_MODELS = [
  "Runner", "Alphard", "Auris", "Avensis", "Avensis Verso", "Aygo", "C-HR", 
  "Caldina", "Cami", "Camry", "Carina", "Corolla", "Corolla Axio", "Corolla Cross", 
  "Corolla Fielder", "Corolla Spacio", "Corolla Verso", "Corona Premio", "Esquire", 
  "Estima", "FJ Cruiser", "Fortuner", "Fun Cargo", "Gaia", "Grand Hiace", 
  "Grand Highlander", "Granvia", "Harrier", "Hiace", "Hiace Regius", "Highlander", 
  "Hilux", "Hilux Surf", "Ipsum", "Isis", "Land Cruiser", "Land Cruiser Prado", 
  "Lite Ace", "Nadia", "Noah", "Picnic", "Previa", "Prius", "Prius Alfa", 
  "Prius c", "Prius v", "Proace", "Proace City", "Probox", "RAV4", "Regius", 
  "RegiusAce", "Rush", "Sienna", "Sprinter Carib", "Succeed", "Town Ace", 
  "Tundra", "Urban Cruiser", "Vellfire", "Venza", "Verso", "Vista Ardeo", 
  "Voltz", "Voxy", "Wish", "Yaris", "Yaris Cross", "Yaris Verso", "bZ4X"
];

export const TOYOTA_YEARS = [
  "1990-1994", "1995-1998", "1999-2002", "2003-2006", "2007-2011", "2012-2017", "2018-2023", "2024-Present"
];

export const ALL_CATEGORIES = [
  { 
    group: "Запчасти и расходники", 
    image: "https://images.unsplash.com/photo-1530906358829-e84b27691dc8?auto=format&fit=crop&q=80&w=600",
    items: ["Тормозные диски", "Тормозные колодки", "Тормозная система", "Амортизаторы и стойки", "Брызговики", "Дворники", "Дефлекторы, шторки", "Амортизаторы капота", "Подлокотники"] 
  },
  { 
    group: "Тюнинг и экстерьер", 
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600",
    items: ["Тюнинг: пороги, накладки", "Авточехлы на сидения", "Оплётки на руль", "Подкрылки", "Багажники, рейлинги, боксы", "Защита картера"] 
  },
  { 
    group: "Фаркопы и прицепное", 
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
    items: ["Американский фаркоп под квадрат", "Жесткая сцепка", "Замковое устройство", "Удлинители крюка", "Аксессуары для фаркопов"] 
  },
  { 
    group: "Для внедорожников", 
    image: "https://images.unsplash.com/photo-1533473359331-01f435fb3d58?auto=format&fit=crop&q=80&w=600",
    items: ["Силовые бамперы", "Силовые пороги", "Расширители арок", "Кронштейн запасного колеса", "Лифт-комплекты, проставки", "Подвеска", "Рулевая система", "Колеса", "Лебедки", "Трос буксировочный", "Защита окон"] 
  },
  { 
    group: "Дополнительное оборудование", 
    image: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=600",
    items: ["Кузов пикапа", "Доп. фары и фонари", "Шноркель", "Палатки, тенты, маркизы", "Блокировка дифференциала", "Сенд-траки", "Цепи противоскольжения", "Компрессоры, ресиверы", "Консоль потолочная", "Лестница на заднюю дверь"] 
  },
  { 
    group: "Прочее", 
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600",
    items: ["Коврики в салон и багажник", "Велокрепления", "Насосы, компрессоры", "Аккумуляторы, зарядка", "Уход за автомобилем", "Полезные мелочи в авто", "Автотовары для зимы", "Защита от угона", "Домкраты", "Для квадроциклов", "Защита и оборудовани"] 
  }
];
