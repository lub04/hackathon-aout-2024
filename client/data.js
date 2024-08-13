const destinations = [
  {
    id: 1,
    City: "Los Angeles",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxGZVwZ-uT_ypzL6lvUBTva_jPtha12BNpQ&s",
    image2:
      "https://www.civitatis.com/f/estados-unidos/los-angeles/los-angeles-m.jpg",
    image3:
      "https://images.musement.com/cover/0001/43/los-angeles_header-42380.jpeg",
    Air_Quality_Index: 50,
    Happiness_Score: 6.8,
    Cost_of_Living_Index: 90,
    Region: "Amerique du nord",
    Country: "USA",
    image_country:
      "https://www.westeurobikes.com/wp-content/uploads/2024/05/carte-des-etats-unis-geographie-usa.jpg",
    AvgTemperature: 16.9825688073,
    Traffic_enc: 1,
    IATA: ["LAX", "LSQ", "WHP"],
    Airport_name: [
      "Los Angeles International Airport",
      "Maria Dolores Airport",
      "Whiteman Airport",
    ],
    meal_inexpensive_restaurant_USD: 20.0,
    meal_2people_midrange_restaurant: 87.09,
    rent_appartment_month_center_1bedroom: 2568.47,
    rent_appartment_month_no_center_1bedroom: 1952.66,
    Pays: "USA",
    vol_price_USD: 611.0,
    sejour_price_USD: 1538.0,
    day_price_USD: 106.0,
    description_country:
      "Les États-Unis sont une république fédérale composée de 50 États, chacun ayant une culture et des lois distinctes. C’est l’un des pays les plus influents du monde, avec une économie diversifiée qui inclut des industries de pointe comme la technologie, la finance, et les divertissements. Son paysage est tout aussi diversifié, allant des montagnes rocheuses aux vastes plaines du Midwest, en passant par les déserts du Sud-Ouest. Le pays est également marqué par une riche histoire d'immigration qui a forgé une société multiculturelle. La capitale, Washington D.C., abrite des institutions politiques clés telles que la Maison Blanche, tandis que New York est un centre financier mondial.Les États-Unis sont une république fédérale composée de 50 États, chacun ayant une culture et des lois distinctes. C’est l’un des pays les plus influents du monde, avec une économie diversifiée qui inclut des industries de pointe comme la technologie, la finance, et les divertissements. Son paysage est tout aussi diversifié, allant des montagnes rocheuses aux vastes plaines du Midwest, en passant par les déserts du Sud-Ouest. Le pays est également marqué par une riche histoire d'immigration qui a forgé une société multiculturelle. La capitale, Washington D.C., abrite des institutions politiques clés telles que la Maison Blanche, tandis que New York est un centre financier mondial.",
    description_city:
      "Los Angeles, en Californie, est la deuxième plus grande ville des États-Unis. Connue pour Hollywood, elle est le cœur de l'industrie cinématographique mondiale. LA est aussi célèbre pour ses plages, comme Venice et Santa Monica, et ses quartiers diversifiés, tels que Beverly Hills et Downtown LA. La ville est un centre culturel avec des musées, des galeries, et une scène musicale dynamique.",
    Latitude: 34.0536909,
    Longitude: -118.242766,
  },
  {
    id: 2,
    City: "Chicago",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSRrLcrWMHnnlYwQwp72W68zSAwJlka_0Mw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy_9CsEFT_KUqFkM2YogKAgQjjC2oEpLz_Q&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZ7vo2_Rg8ZhBelA76AASqpmgvb8GnzDPyg&s",
    Air_Quality_Index: 55,
    Happiness_Score: 7.0,
    Cost_of_Living_Index: 85,
    Region: "Amerique du nord",
    Country: "USA",
    image_country:
      "https://www.westeurobikes.com/wp-content/uploads/2024/05/carte-des-etats-unis-geographie-usa.jpg",
    AvgTemperature: 10.1915752234,
    Traffic_enc: 1,
    IATA: ["MDW", "ORD"],
    Airport_name: [
      "Chicago Midway International Airport",
      "Chicago O'Hare International Airport",
    ],
    meal_inexpensive_restaurant_USD: 20.0,
    meal_2people_midrange_restaurant: 80.0,
    rent_appartment_month_center_1bedroom: 1969.12,
    rent_appartment_month_no_center_1bedroom: 1436.82,
    Pays: "USA",
    vol_price_USD: 611.0,
    sejour_price_USD: 1538.0,
    day_price_USD: 106.0,
    description_country:
      "Les États-Unis sont une république fédérale composée de 50 États, chacun ayant une culture et des lois distinctes. C’est l’un des pays les plus influents du monde, avec une économie diversifiée qui inclut des industries de pointe comme la technologie, la finance, et les divertissements. Son paysage est tout aussi diversifié, allant des montagnes rocheuses aux vastes plaines du Midwest, en passant par les déserts du Sud-Ouest. Le pays est également marqué par une riche histoire d'immigration qui a forgé une société multiculturelle. La capitale, Washington D.C., abrite des institutions politiques clés telles que la Maison Blanche, tandis que New York est un centre financier mondial.",
    description_city:
      "Chicago, située sur les rives du lac Michigan, est la troisième plus grande ville des États-Unis. Surnommée 'Windy City', elle est célèbre pour son architecture, avec des gratte-ciels emblématiques comme la Willis Tower. Chicago est aussi un hub culturel, avec des musées renommés, une scène musicale riche, notamment pour le jazz et le blues, et une histoire sportive vibrante.",
    Latitude: 41.8755616,
    Longitude: -87.6244212,
  },
  {
    id: 3,
    City: "Londres",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_iN0ZX3t5KcbvzJnzNHZmxwTXPx2iy_BVg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkehQM9--pdB9Ew0KQxoztf4Bji4zJAzWI_g&s",
    image3: "https://angleterre.org.uk/photos/londoneyesm.jpg",
    Air_Quality_Index: 60,
    Happiness_Score: 7.2,
    Cost_of_Living_Index: 110,
    Region: "Europe",
    Country: "Royaume-Uni",
    image_country:
      "https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2022/07/19/10/royaume-uni-qu-est-ce-que-l-union-jack.jpg?VersionId=C8zfcG2mQbuzlmUZSlGyYJtQ4kN3GaBo",
    AvgTemperature: 11.3140153968,
    Traffic_enc: 2,
    IATA: ["BQH", "LCY", "LGW", "LHR", "LOZ", "LTN", "NHT", "STN", "YXU"],
    Airport_name: [
      "London Biggin Hill Airport",
      "London City Airport",
      "London Gatwick Airport",
      "London Heathrow Airport",
      "London-Corbin Airport/Magee Field",
      "London Luton Airport",
      "RAF Northolt",
      "London Stansted Airport",
      "London Airport",
    ],
    meal_inexpensive_restaurant_USD: 18.02,
    meal_2people_midrange_restaurant: 80.48,
    rent_appartment_month_center_1bedroom: 2311.99,
    rent_appartment_month_no_center_1bedroom: 1669.19,
    Pays: "Royaume Uni",
    vol_price_USD: 109.0,
    sejour_price_USD: 1266.0,
    day_price_USD: 118.0,
    description_country:
      "Le Royaume-Uni est une monarchie constitutionnelle composée de quatre nations : l'Angleterre, l'Écosse, le Pays de Galles, et l'Irlande du Nord. C’est une puissance mondiale historique avec une longue tradition de démocratie parlementaire. Londres, la capitale, est une métropole cosmopolite et un centre financier mondial. Le Royaume-Uni est connu pour ses contributions à la culture, notamment la littérature, la musique et le théâtre, avec des figures emblématiques comme Shakespeare et les Beatles. Le pays a une influence géopolitique significative, étant un membre clé de l'OTAN et du Commonwealth.",
    description_city:
      "Londres est la capitale du Royaume-Uni, un centre mondial de la finance, de la culture, et de l'histoire. Connue pour ses monuments emblématiques comme Big Ben, le Tower Bridge, et Buckingham Palace, Londres offre une richesse culturelle inégalée avec des musées, des théâtres, et une scène artistique dynamique. C'est aussi une ville multiculturelle, où des cuisines du monde entier se rencontrent.",
    Latitude: 51.5074456,
    Longitude: -0.1277653,
  },
  {
    id: 4,
    City: "Paris",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s_leqysdhNQ4IozOk_v0qoiBg637Q84mDQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJFG_jEUYAlZUN1EDXrfZ8BpUxYAY80OT3w&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XCLGAWQ05_fKTqdilQ33wZKNPGodn8tDAQ&s",
    Air_Quality_Index: 65,
    Happiness_Score: 6.9,
    Cost_of_Living_Index: 95,
    Region: "Europe",
    Country: "France",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IV_6-XETioybiR_94V0P3_d20jRfhCSg3A&s",
    AvgTemperature: 11.6337146557,
    Traffic_enc: 2,
    IATA: ["CDG", "LBG", "ORY", "PHT", "PRX"],
    Airport_name: [
      "Charles de Gaulle International Airport",
      "Paris-Le Bourget Airport",
      "Paris-Orly Airport",
      "Henry County Airport",
      "Cox Field",
    ],
    meal_inexpensive_restaurant_USD: 15.58,
    meal_2people_midrange_restaurant: 62.32,
    rent_appartment_month_center_1bedroom: 1325.47,
    rent_appartment_month_no_center_1bedroom: 978.26,
    Pays: "France",
    vol_price_USD: 76.0,
    sejour_price_USD: 654.0,
    day_price_USD: 98.0,
    description_country:
      "La France est une république située en Europe occidentale, célèbre pour son patrimoine culturel, sa gastronomie et ses paysages diversifiés, allant des plages méditerranéennes aux montagnes des Alpes. Paris, sa capitale, est une ville emblématique, souvent appelée 'la ville des Lumières' et connue pour ses monuments tels que la Tour Eiffel et le Louvre. La France a une histoire riche, marquée par des événements comme la Révolution française, qui a eu une influence profonde sur la politique mondiale. Le pays joue un rôle clé dans l'Union européenne et est l'une des principales économies mondiales.",
    description_city:
      "Paris, la capitale de la France, est souvent surnommée 'la Ville Lumière'. Réputée pour ses monuments emblématiques tels que la Tour Eiffel, le Louvre, et Notre-Dame, Paris est aussi un centre mondial de l'art, de la mode, et de la gastronomie. Ses cafés, ses boulevards historiques, et ses musées en font une des villes les plus visitées au monde. La culture parisienne est un mélange de tradition et de modernité.",
    Latitude: 48.8588897,
    Longitude: 2.3200410217,
  },
  {
    id: 5,
    City: "Tokyo",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nGdskY9dSS3S8yUPn7ep_DwvNO5vJ2vsfA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHV25uDSw26ld_lMMnNgDGB7cK_QtDWWbMQg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkllucAvoQ2CY1Y__PrsqYZUeQ4Gep_WsV-g&s",
    Air_Quality_Index: 70,
    Happiness_Score: 6.0,
    Cost_of_Living_Index: 120,
    Region: "Asie",
    Country: "Japon",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRogKHly57yZi3fkGZStXkzgesPxP46Bj6rQ&s",
    AvgTemperature: 16.1463894285,
    Traffic_enc: 2,
    IATA: ["HND", "NRT"],
    Airport_name: [
      "Tokyo Haneda International Airport",
      "Narita International Airport",
    ],
    meal_inexpensive_restaurant_USD: 7.22,
    meal_2people_midrange_restaurant: 43.31,
    rent_appartment_month_center_1bedroom: 1105.83,
    rent_appartment_month_no_center_1bedroom: 638.41,
    Pays: "Japon",
    vol_price_USD: 699.0,
    sejour_price_USD: 3001.0,
    day_price_USD: 90.0,
    description_country:
      "Le Japon est un archipel situé en Asie de l'Est, composé de quatre îles principales. C’est un pays où la tradition et la modernité coexistent harmonieusement, avec des temples anciens côtoyant des gratte-ciels futuristes. Tokyo, la capitale, est une mégapole dynamique, reconnue pour sa technologie de pointe, sa culture pop influente, et sa cuisine raffinée. Le Japon est aussi célèbre pour sa discipline sociale et son riche patrimoine culturel, incluant les arts martiaux, la cérémonie du thé, et les festivals traditionnels. Le pays est une puissance économique majeure avec une influence technologique mondiale.",
    description_city:
      "Tokyo, la capitale du Japon, est une mégapole dynamique où tradition et modernité se côtoient. Connue pour ses gratte-ciels futuristes, ses temples anciens, et ses quartiers animés comme Shibuya et Akihabara, Tokyo est aussi un centre économique mondial. La ville offre une cuisine renommée, des parcs magnifiques, et une scène culturelle diversifiée, du théâtre traditionnel kabuki aux innovations technologiques.",
    Latitude: 35.6821936,
    Longitude: 139.762221,
  },
  {
    id: 6,
    City: "Seoul",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviudLwcHklbt_E3stECIDb5QIWo8-p5GIJg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMqRUXsbmkvfq-EUx1bz3FeoLcjg4Wvs9Xg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQSqTbA473ulFH-sCcv0P-j_0KJk9jPNJ5w&s",
    Air_Quality_Index: 75,
    Happiness_Score: 5.8,
    Cost_of_Living_Index: 105,
    Region: "Asie",
    Country: "Corée du sud",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lwQuRO3-8gTVgFYyOOiwYuwO8WelXSVd4w&s",
    AvgTemperature: 11.5988740197,
    Traffic_enc: 2,
    IATA: ["GMP", "ICN"],
    Airport_name: [
      "Gimpo International Airport",
      "Incheon International Airport",
    ],
    meal_inexpensive_restaurant_USD: 7.16,
    meal_2people_midrange_restaurant: 52.77,
    rent_appartment_month_center_1bedroom: 809.83,
    rent_appartment_month_no_center_1bedroom: 583.6,
    Pays: "Corée du sud",
    vol_price_USD: 655.0,
    sejour_price_USD: 1570.0,
    day_price_USD: 78.0,
    description_country:
      "La Corée du Sud est une république située sur la péninsule coréenne en Asie de l'Est. C’est un pays connu pour son développement rapide, passant d'une économie agricole à l'une des économies les plus avancées du monde en quelques décennies. Séoul, la capitale, est un centre névralgique de la technologie et de la culture, avec une scène K-pop et une industrie cinématographique influentes. La Corée du Sud maintient une forte identité culturelle, malgré les tensions historiques avec la Corée du Nord voisine. Le pays est également reconnu pour sa cuisine unique, incluant des plats comme le kimchi et le barbecue coréen.",
    description_city:
      "Séoul, la capitale de la Corée du Sud, est une ville où l'histoire millénaire rencontre la modernité technologique. Séoul est célèbre pour ses palais royaux, tels que Gyeongbokgung, et ses marchés traditionnels comme Namdaemun. La ville est un hub de la culture pop, notamment avec la K-pop et le cinéma coréen. Séoul est également un centre économique, abritant des entreprises technologiques majeures.",
    Latitude: 37.5666791,
    Longitude: 126.9782914,
  },
  {
    id: 7,
    City: "Sydney",
    image1:
      "https://content.r9cdn.net/rimg/dimg/12/98/b1e36771-city-2258-163f4d7f814.jpg?crop=true&width=1020&height=498",
    image2:
      "https://cms.finnair.com/resource/blob/747612/3523a759b61b788b834fe56aa57fa255/sydney-main-data.jpg?impolicy=crop&width=4000&height=1714&x=0&y=447",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxLAzO1CS1BtOBgROKy_NHJKWn4ZZLB-pwA&s",
    Air_Quality_Index: 30,
    Happiness_Score: 7.8,
    Cost_of_Living_Index: 115,
    Region: "Australie/Pacifique Sud",
    Country: "Australie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4aza50j9NG7yc7blYOONVw7OpHVS5yw4uw&s",
    AvgTemperature: 14.1940307456,
    Traffic_enc: 0,
    IATA: ["BWU", "SYD", "YQY"],
    Airport_name: [
      "Sydney Bankstown Airport",
      "Sydney Kingsford Smith International Airport",
      "Sydney / J.A. Douglas McCurdy Airport",
    ],
    meal_inexpensive_restaurant_USD: 13.41,
    meal_2people_midrange_restaurant: 80.47,
    rent_appartment_month_center_1bedroom: 1657.31,
    rent_appartment_month_no_center_1bedroom: 1243.61,
    Pays: "Australie",
    vol_price_USD: 1201.0,
    sejour_price_USD: 3908.0,
    day_price_USD: 119.0,
    description_country:
      "L'Australie est un pays-continent situé dans l'hémisphère sud, connu pour sa faune unique, ses vastes déserts, et ses plages magnifiques. Sydney et Melbourne sont les villes les plus célèbres, chacune offrant une qualité de vie élevée et une culture vibrante. L'Australie est aussi reconnue pour son mode de vie décontracté et son amour du sport, notamment le rugby et le cricket. Le pays a une économie prospère, basée sur des ressources naturelles comme les minéraux, ainsi que sur le tourisme. La Grande Barrière de Corail et l'Outback sont des symboles naturels emblématiques de ce pays.",
    description_city:
      "Sydney est la plus grande ville d'Australie, célèbre pour son opéra emblématique, son port spectaculaire, et ses plages comme Bondi Beach. C'est une métropole cosmopolite avec une riche scène culturelle, des festivals, et une cuisine diversifiée. Sydney est aussi un centre économique et financier majeur dans la région Asie-Pacifique, avec un mélange unique de vie urbaine et de nature.",
    Latitude: -33.8698439,
    Longitude: 151.2082848,
  },
  {
    id: 8,
    City: "Istanbul",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdEJsBrWleL7iE2R01wUsczREKiazR4_wvg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4z0oeJwcNTvpmFf_REGK2IAzXNf9DSmf-w&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyJhMmXZBlk8KumMjGUYAdmmvYUIcDQhHkw&s",
    Air_Quality_Index: 85,
    Happiness_Score: 6.8,
    Cost_of_Living_Index: 75,
    Region: "Moyen-Orient",
    Country: "Turquie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsvCVUsQ_koqkuDyzl15EYf4fcF_T-PH5oA&s",
    AvgTemperature: 15.2516188215,
    Traffic_enc: 2,
    IATA: ["ISL", "IST", "SAW"],
    Airport_name: [
      "Istanbul New Airport",
      "Istanbul International Airport",
      "Sabiha Gokcen International Airport",
    ],
    meal_inexpensive_restaurant_USD: 5.36,
    meal_2people_midrange_restaurant: 24.14,
    rent_appartment_month_center_1bedroom: 538.89,
    rent_appartment_month_no_center_1bedroom: 312.32,
    Pays: "Turquie",
    vol_price_USD: 207.0,
    sejour_price_USD: 449.0,
    day_price_USD: 60.0,
    description_country:
      "La Turquie est un pays transcontinental situé principalement en Asie avec une petite partie en Europe. Son histoire est marquée par des civilisations anciennes comme les Grecs, les Romains, et les Ottomans. Istanbul, autrefois Constantinople, est une ville qui incarne ce riche héritage, où l'Orient rencontre l'Occident. La Turquie est un pays majoritairement musulman avec une diversité culturelle et religieuse. Son économie est en croissance, avec des secteurs forts comme le textile, l'automobile, et le tourisme. Les sites historiques comme Sainte-Sophie et la Cappadoce attirent des millions de touristes chaque année.",
    description_city:
      "Istanbul est la plus grande ville de Turquie, située à la croisée de l'Europe et de l'Asie. Elle est connue pour son riche patrimoine historique et culturel, avec des sites emblématiques comme la mosquée Sainte-Sophie, le palais de Topkapi, et le Grand Bazar. Istanbul est un centre économique et culturel dynamique, où l'ancien et le moderne coexistent harmonieusement dans une atmosphère vibrante.",
    Latitude: 41.006381,
    Longitude: 28.9758715,
  },
  {
    id: 9,
    City: "Rio de Janeiro",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKr6FApkHvPwHgFeQ2DjKUCu18N4xAzuYSHQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyE5q7RzOaeU37AO-D9t7S8yfXwI_PeSjTg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrc6O-shL6Rpe9XOcehi-QdR5FSeU_5LeuQ&s",
    Air_Quality_Index: 55,
    Happiness_Score: 6.5,
    Cost_of_Living_Index: 80,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Brésil",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMVrmD8jN5TvWxRTY6xkq_l2QUsOMnTObJQ&s",
    AvgTemperature: 22.8871319782,
    Traffic_enc: 1,
    IATA: ["SNZ"],
    Airport_name: ["Santa Cruz Air Force Base"],
    meal_inexpensive_restaurant_USD: 6.52,
    meal_2people_midrange_restaurant: 27.95,
    rent_appartment_month_center_1bedroom: 385.92,
    rent_appartment_month_no_center_1bedroom: 247.48,
    Pays: "Brésil",
    vol_price_USD: 874.0,
    sejour_price_USD: 1547.0,
    day_price_USD: 72.0,
    description_country:
      "Le Brésil est le plus grand pays d'Amérique du Sud, connu pour sa diversité culturelle et ses paysages variés, allant de la forêt amazonienne aux plages de Rio de Janeiro. C’est un pays où les influences africaines, européennes, et indigènes se mêlent, créant une culture vibrante, illustrée par des événements comme le Carnaval. Le football est une passion nationale, avec des légendes comme Pelé et Neymar. Le Brésil est aussi une puissance économique régionale, avec une agriculture développée et des ressources naturelles abondantes, notamment le café, le soja, et le pétrole.",
    description_city:
      "Rio de Janeiro, au Brésil, est une ville emblématique pour son carnaval, ses plages comme Copacabana, et son Christ Rédempteur surplombant la ville. Rio est un centre culturel avec une riche tradition de musique samba et bossa nova. La ville offre aussi des paysages naturels impressionnants, du Pain de Sucre à la forêt de Tijuca, et une vie nocturne animée.",
    Latitude: -22.9110137,
    Longitude: -43.2093727,
  },
  {
    id: 10,
    City: "Toronto",
    image1:
      "https://cdn.authentik.com/canada/images/section/images_list/1-toronto-downtown-skyline-1000x600jpeg_52060.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoO7Mg5z_sC8GGbNFzm9dncc9MJNDPjVEcVw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNy-TwcEOVrX-pDa5SyZ-8krpkEmj1Iugi2w&s",
    Air_Quality_Index: 40,
    Happiness_Score: 7.1,
    Cost_of_Living_Index: 95,
    Region: "Amerique du nord",
    Country: "Canada",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DFv_0Vl0yKo0jkYf-h_mzsgptLPyvKHUkA&s",
    AvgTemperature: 8.665743479,
    Traffic_enc: 1,
    IATA: ["YKZ", "YTZ", "YYZ", "YZD"],
    Airport_name: [
      "Buttonville Municipal Airport",
      "Billy Bishop Toronto City Centre Airport",
      "Lester B. Pearson International Airport",
      "Downsview Airport",
    ],
    meal_inexpensive_restaurant_USD: 18.61,
    meal_2people_midrange_restaurant: 81.9,
    rent_appartment_month_center_1bedroom: 1696.63,
    rent_appartment_month_no_center_1bedroom: 1435.71,
    Pays: "Canada",
    vol_price_USD: 764.0,
    sejour_price_USD: 1998.0,
    day_price_USD: 102.0,
    description_country:
      "Le Canada est le deuxième plus grand pays du monde par sa superficie, situé en Amérique du Nord. C’est une fédération composée de dix provinces et trois territoires, avec une diversité géographique impressionnante, allant des montagnes Rocheuses aux plaines de l'Alberta, en passant par les forêts boréales. Le Canada est bilingue, avec l'anglais et le français comme langues officielles, reflétant son héritage britannique et français. Ottawa est la capitale, tandis que Toronto, Montréal et Vancouver sont des centres urbains majeurs. Le pays est reconnu pour sa qualité de vie élevée, son système de santé universel, et son engagement envers les droits humains.",
    description_city:
      "Toronto est la plus grande ville du Canada et un centre économique et culturel majeur. Multiculturelle, elle abrite une population diversifiée et une scène gastronomique riche. Toronto est connue pour sa skyline dominée par la Tour CN, ses quartiers comme le Distillery District, et ses festivals. La ville est aussi un hub pour l'industrie cinématographique et technologique, attirant des talents du monde entier.",
    Latitude: 43.6534817,
    Longitude: -79.3839347,
  },
  {
    id: 11,
    City: "Mexico ",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHqY43gTOVh8KM3033Q29nGOEKs8k2evK6g&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QSEilQl9NhYtuROMN4B5gUD7ayx88m-q7Q&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MmZ5eQRjpS5v8Ci5ayASOe4R2fWXssf7Lw&s",
    Air_Quality_Index: 90,
    Happiness_Score: 5.2,
    Cost_of_Living_Index: 65,
    Region: "Amerique du nord",
    Country: "Mexique",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nYNUZtQeanCiFk0t2Inty2R5GF407D56tg&s",
    AvgTemperature: 16.694711279,
    Traffic_enc: 3,
    IATA: ["MEX"],
    Airport_name: ["Licenciado Benito Juarez International Airport"],
    meal_inexpensive_restaurant_USD: 7.78,
    meal_2people_midrange_restaurant: 39.95,
    rent_appartment_month_center_1bedroom: 789.83,
    rent_appartment_month_no_center_1bedroom: 484.05,
    Pays: "Mexique",
    vol_price_USD: 710.0,
    sejour_price_USD: 1392.0,
    day_price_USD: 56.0,
    description_country:
      "Le Mexique est un pays d'Amérique du Nord, riche en histoire et en culture. C’est le berceau de grandes civilisations précolombiennes comme les Mayas et les Aztèques, et cette histoire est encore visible dans des sites archéologiques comme Chichén Itzá et Teotihuacán. Mexico, la capitale, est une mégapole dynamique et l'une des plus grandes villes du monde. Le Mexique est aussi célèbre pour sa cuisine, classée au patrimoine mondial de l'UNESCO, avec des plats emblématiques comme les tacos, les enchiladas, et le guacamole. Le pays est une destination touristique populaire, avec des plages magnifiques, des villes coloniales, et une vie nocturne animée.",
    description_city:
      "Mexico City, la capitale du Mexique, est l'une des plus grandes métropoles du monde. C'est une ville riche en histoire, avec des sites précolombiens comme Teotihuacán, des monuments coloniaux, et des musées renommés comme le Musée national d'anthropologie. La ville est également un centre culturel dynamique, avec une scène artistique et musicale vibrante, et une cuisine reconnue mondialement.",
    Latitude: 19.4326296,
    Longitude: -99.1331785,
  },
  {
    id: 12,
    City: "Bangkok",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeldF-gNE-gXFabT-GIjs3kaRnbIX0b7oveg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllkmwDIz911wEjKnf55XBAEcStPbIp_fXhg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLD_WOa2nGXnR0nEW_mWcjrqwXOn8IQviYeg&s",
    Air_Quality_Index: 110,
    Happiness_Score: 4.0,
    Cost_of_Living_Index: 50,
    Region: "Asie",
    Country: "Thailande",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfrZdoYZCdhLYlUNV1JbTqagbkWgZb9qqaQ&s",
    AvgTemperature: 22.480047712,
    Traffic_enc: 2,
    IATA: ["BKK", "DMK"],
    Airport_name: ["Suvarnabhumi Airport", "Don Mueang International Airport"],
    meal_inexpensive_restaurant_USD: 2.6,
    meal_2people_midrange_restaurant: 28.09,
    rent_appartment_month_center_1bedroom: 584.77,
    rent_appartment_month_no_center_1bedroom: 280.92,
    Pays: "Thailande",
    vol_price_USD: 710.0,
    sejour_price_USD: 1110.0,
    day_price_USD: 44.0,
    description_country:
      "La Thaïlande est un royaume situé en Asie du Sud-Est, célèbre pour ses plages paradisiaques, sa cuisine épicée, et ses temples bouddhistes majestueux. Bangkok, la capitale, est une métropole vibrante, mêlant tradition et modernité avec ses marchés flottants, ses gratte-ciels, et ses palais royaux. Le pays est souvent appelé 'le pays du sourire' en raison de l'accueil chaleureux de ses habitants. La Thaïlande est aussi un centre majeur du bouddhisme Theravāda, avec de nombreux sites religieux comme le Wat Pho et le Wat Arun. Le tourisme joue un rôle crucial dans son économie, attirant des millions de visiteurs chaque année.",
    description_city:
      "Bangkok, la capitale de la Thaïlande, est une ville vibrante où tradition et modernité se rencontrent. Connue pour ses temples bouddhistes comme Wat Arun et Wat Phra Kaew, Bangkok est aussi célèbre pour sa vie nocturne animée, ses marchés flottants, et sa cuisine de rue délicieuse. La ville est un centre économique et culturel, attirant des visiteurs pour son mélange unique de culture et d'énergie.",
    Latitude: 13.7524938,
    Longitude: 100.4935089,
  },
  {
    id: 13,
    City: "Buenos Aires",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzagOT0EwlTPvUl8uLWIbVheCSUVpWRiJwKg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FMr3Bn83Fc-j2leGOfezOHOtZCSj71KVlw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_YJ5EOAwAPDw61p3wRbeo8IP5R8BSYZdFKw&s",
    Air_Quality_Index: 60,
    Happiness_Score: 6.1,
    Cost_of_Living_Index: 60,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Argentine",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeg1_sb46HWyZP-8cO7B91P_Mt0GIeYZ37Q&s",
    AvgTemperature: 16.8360553517,
    Traffic_enc: 2,
    IATA: ["AEP", "EZE"],
    Airport_name: [
      "Jorge Newbery Airpark",
      "Ministro Pistarini International Airport",
    ],
    meal_inexpensive_restaurant_USD: 6.4,
    meal_2people_midrange_restaurant: 25.0,
    rent_appartment_month_center_1bedroom: 308.45,
    rent_appartment_month_no_center_1bedroom: 225.84,
    Pays: "Argentine",
    vol_price_USD: 983.0,
    sejour_price_USD: 3027.0,
    day_price_USD: 85.0,
    description_country:
      "L’Argentine est un vaste pays d’Amérique du Sud, connu pour sa culture du tango, ses paysages époustouflants comme la Patagonie et les chutes d’Iguazú, et sa passion pour le football. Buenos Aires, la capitale, est une ville cosmopolite et dynamique, souvent appelée 'le Paris de l’Amérique du Sud' en raison de son architecture et de son ambiance européenne. Le pays est aussi célèbre pour sa gastronomie, notamment ses grillades de viande appelées 'asado'. L’Argentine a une histoire riche, marquée par des mouvements politiques et sociaux, ainsi que par des personnalités emblématiques comme Eva Perón.",
    description_city:
      "Buenos Aires, la capitale de l'Argentine, est souvent surnommée 'le Paris de l'Amérique du Sud'. C'est une ville passionnée, connue pour le tango, ses cafés historiques, et son architecture européenne. Buenos Aires est un centre culturel, avec des musées, des théâtres, et une scène artistique dynamique. La ville offre aussi une cuisine savoureuse, avec des grillades et des vins renommés.",
    Latitude: -34.6073387,
    Longitude: -58.4432852,
  },
  {
    id: 14,
    City: "Amsterdam",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrDImdQy-IJtHNNmsEWewDJT-fIaTLHDqcQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUyf-qH91p7gliJdv3DhEE-YF7cazlrry5g&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUG8BHf56gV5USzIBmnMVKH0Mrj0oJDxzOA&s",
    Air_Quality_Index: 50,
    Happiness_Score: 7.9,
    Cost_of_Living_Index: 105,
    Region: "Europe",
    Country: "Les Pays-Bas",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFhHfFK1oxnYfvAsTmaOVbWHypFMECcT5gQ&s",
    AvgTemperature: 10.4544871334,
    Traffic_enc: 0,
    IATA: ["AMS"],
    Airport_name: ["Amsterdam Airport Schiphol"],
    meal_inexpensive_restaurant_USD: 19.22,
    meal_2people_midrange_restaurant: 83.1,
    rent_appartment_month_center_1bedroom: 1769.11,
    rent_appartment_month_no_center_1bedroom: 1512.73,
    Pays: "Les Pays-Bas",
    vol_price_USD: 87.0,
    sejour_price_USD: 633.0,
    day_price_USD: 112.0,
    description_country:
      "Les Pays-Bas, situés en Europe occidentale, sont un pays connu pour ses paysages plats, ses champs de tulipes, ses moulins à vent, et ses canaux pittoresques. Amsterdam, la capitale, est une ville célèbre pour son patrimoine culturel, ses musées comme le Rijksmuseum et le musée Van Gogh, ainsi que pour sa vie nocturne animée. Les Pays-Bas ont une longue tradition de tolérance et de liberté, illustrée par leurs politiques progressistes en matière de droits civiques. Le pays est aussi un leader mondial en matière de commerce international, grâce à son port de Rotterdam, l'un des plus grands au monde.",
    description_city:
      "Amsterdam, la capitale des Pays-Bas, est célèbre pour ses canaux pittoresques, ses maisons à pignon, et ses musées renommés comme le Rijksmuseum et le musée Van Gogh. La ville est aussi connue pour sa culture tolérante, ses cafés, et ses pistes cyclables. Amsterdam est un centre culturel dynamique avec une riche histoire maritime, une scène artistique florissante, et une vie nocturne animée.",
    Latitude: 52.3730796,
    Longitude: 4.8924534,
  },
  {
    id: 15,
    City: "Le Caire",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal7utj72b0KRv5mvjTQoSN3tnLnU-N3xR3Q&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdQZ3oMyzUYrrU_Oe9I-JWbxwATbM57G0xg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKji1E1ru9m9u62seuUT0U7oJXS3elD-swIA&s",
    Air_Quality_Index: 115,
    Happiness_Score: 3.5,
    Cost_of_Living_Index: 55,
    Region: "Afrique",
    Country: "Egypte",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe4_C9B6J5yuq-LBfhZQ6bYs-WxLbp12Wdw&s",
    AvgTemperature: 22.196375039,
    Traffic_enc: 3,
    IATA: ["CAI", "CIR"],
    Airport_name: ["Cairo International Airport", "Cairo Regional Airport"],
    meal_inexpensive_restaurant_USD: 4.07,
    meal_2people_midrange_restaurant: 20.36,
    rent_appartment_month_center_1bedroom: 197.56,
    rent_appartment_month_no_center_1bedroom: 113.99,
    Pays: "Egypte",
    vol_price_USD: 306.0,
    sejour_price_USD: 574.0,
    day_price_USD: 49.0,
    description_country:
      "L'Égypte est un pays transcontinental situé en Afrique du Nord et au Moyen-Orient, célèbre pour son histoire millénaire et ses monuments emblématiques comme les pyramides de Gizeh et le Sphinx. Le Caire, sa capitale, est une ville animée où se mêlent l'antique et le moderne. L'Égypte est considérée comme le berceau de l'une des plus anciennes civilisations du monde, avec une influence profonde sur la science, la médecine, et la culture. Le Nil, le plus long fleuve du monde, joue un rôle central dans la vie du pays. Aujourd'hui, l'Égypte est un acteur clé dans la politique et la culture du monde arabe.",
    description_city:
      "Le Caire, capitale de l'Égypte, est une métropole tentaculaire sur les rives du Nil. C'est une ville au riche patrimoine historique, abritant les pyramides de Gizeh, le Sphinx, et le musée égyptien. Le Caire est également un centre culturel et économique du monde arabe, avec une scène artistique vibrante, des marchés animés comme Khan el-Khalili, et une cuisine aux saveurs orientales.",
    Latitude: 30.0443879,
    Longitude: 31.2357257,
  },
  {
    id: 16,
    City: "Moscou",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-h3PeEK_O1SCUcAA2ATdq1dRv-FW66XOig&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxo3Pxt7zZ4quxC0jkS8aotQQoAjiq7tEQw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfe0hLrvMjwRzasgfgo6FP6jqADa36HpVYDQ&s",
    Air_Quality_Index: 80,
    Happiness_Score: 5.8,
    Cost_of_Living_Index: 70,
    Region: "Europe",
    Country: "Russie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWSZzQGCZR9OtYE_m2o1XmApZC-TBxdXefA&s",
    AvgTemperature: 5.5144434851,
    Traffic_enc: 2,
    IATA: ["CKL", "DME", "OSF", "SVO", "VKO", "ZIA"],
    Airport_name: [
      "Chkalovskiy Air Base",
      "Domodedovo International Airport",
      "Ostafyevo International Airport",
      "Sheremetyevo International Airport",
      "Vnukovo International Airport",
      "Zhukovsky International Airport",
    ],
    meal_inexpensive_restaurant_USD: 13.1,
    meal_2people_midrange_restaurant: 65.5,
    rent_appartment_month_center_1bedroom: 1167.72,
    rent_appartment_month_no_center_1bedroom: 674.05,
    Pays: "Russie",
    vol_price_USD: 207.0,
    sejour_price_USD: 1580.0,
    day_price_USD: 80.0,
    description_country:
      "La Russie est le plus grand pays du monde par sa superficie, s'étendant de l'Europe de l'Est à l'Asie du Nord. C’est une fédération composée de multiples ethnies et cultures, un héritage de l'histoire complexe de l'Empire russe et de l'Union soviétique. Moscou, la capitale, est un centre politique, économique et culturel, abritant des sites emblématiques comme le Kremlin et la Place Rouge. La Russie est connue pour ses contributions majeures à la littérature, la musique, et les arts, avec des figures comme Tolstoï, Tchaïkovski, et Kandinsky. Le pays possède également d'immenses ressources naturelles, notamment le gaz et le pétrole.",
    description_city:
      "Moscou, la capitale de la Russie, est une ville au riche patrimoine historique et culturel. Connue pour le Kremlin, la Place Rouge, et la cathédrale Saint-Basile, Moscou est un centre politique et économique majeur. La ville est aussi réputée pour ses théâtres, ses musées comme la galerie Tretiakov, et sa scène artistique. Moscou allie l'ancien et le moderne dans une métropole dynamique.",
    Latitude: 55.625578,
    Longitude: 37.6063916,
  },
  {
    id: 17,
    City: "Singapour",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Ed2jHT6JgSh7cJpkJKjk_2uSx46KevymCg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3yFHc8usetZRUKtk6Zdha96CIpXK0v62rA&s",
    image3:
      "https://res.cloudinary.com/dtljonz0f/image/upload/f_auto/q_auto/v1/gc-v1/singapore/julien-de-salaberry-viwdmfrbXfI-unsplash-2.jpg",
    Air_Quality_Index: 60,
    Happiness_Score: 7.0,
    Cost_of_Living_Index: 125,
    Region: "Asie",
    Country: "Singapour",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFETEV3iZzPIMzcuzUqDclYgFPc7Hjhk_BQ&s",
    AvgTemperature: 27.5857795525,
    Traffic_enc: 2,
    IATA: ["QPG", "SIN", "TGA"],
    Airport_name: [
      "Paya Lebar Air Base",
      "Singapore Changi Airport",
      "Tengah Air Base",
    ],
    meal_inexpensive_restaurant_USD: 10.92,
    meal_2people_midrange_restaurant: 60.06,
    rent_appartment_month_center_1bedroom: 2660.73,
    rent_appartment_month_no_center_1bedroom: 1965.72,
    Pays: "Singapour",
    vol_price_USD: 688.0,
    sejour_price_USD: 2143.0,
    day_price_USD: 83.0,
    description_country:
      "Singapour est une cité-État insulaire située en Asie du Sud-Est, reconnue pour son économie prospère, son urbanisme moderne, et sa propreté légendaire. Bien que petit en taille, Singapour est un centre financier mondial et un hub de transport majeur. La ville est un mélange de cultures, avec des influences chinoises, malaises, indiennes, et occidentales. Cette diversité se reflète dans sa cuisine réputée, qui attire les gourmets du monde entier. Singapour est aussi connue pour ses lois strictes, son système éducatif performant, et son infrastructure de pointe, qui en font un modèle de développement en Asie.",
    description_city:
      "Singapour est une cité-État d'Asie du Sud-Est, connue pour son skyline futuriste, ses jardins urbains comme Gardens by the Bay, et son port animé. Singapour est un centre financier mondial, avec une économie dynamique basée sur le commerce, la finance, et la technologie. La ville offre une riche diversité culturelle, avec des influences chinoises, malaises, indiennes, et occidentales, visible dans sa cuisine et son architecture.",
    Latitude: 1.357107,
    Longitude: 103.8194992,
  },
  {
    id: 18,
    City: "Dubai",
    image1:
      "https://cdn.generationvoyage.fr/2024/01/architecture-futuriste-Dubai-630x420.jpeg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrN30WIiYGuZN8BL6K1ph004ju9y4DTv7EQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eVIneUOw8JXxTu5OP9Rh3L8ZETPLc3p9tQ&s",
    Air_Quality_Index: 120,
    Happiness_Score: 6.0,
    Cost_of_Living_Index: 110,
    Region: "Moyen-Orient",
    Country: "Emirats Arabes Unis",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7Qk-G47X8Aw9b7tjs_DyffYFdocfq0393w&s",
    AvgTemperature: 28.3181284025,
    Traffic_enc: 1,
    IATA: ["DXB", "NHD"],
    Airport_name: ["Dubai International Airport", "Al Minhad Air Base"],
    meal_inexpensive_restaurant_USD: 12.25,
    meal_2people_midrange_restaurant: 81.68,
    rent_appartment_month_center_1bedroom: 1752.39,
    rent_appartment_month_no_center_1bedroom: 1024.09,
    Pays: "Emirats Arabes Unis",
    vol_price_USD: 328.0,
    sejour_price_USD: 694.0,
    day_price_USD: 82.0,
    description_country:
      "Les Émirats arabes unis (EAU) sont une fédération de sept émirats, situés dans la péninsule arabique. Dubaï et Abou Dhabi sont les deux émirats les plus connus, célèbres pour leur architecture futuriste, leurs centres commerciaux luxueux, et leurs attractions touristiques comme le Burj Khalifa et la mosquée Sheikh Zayed. Les EAU ont connu une croissance économique spectaculaire, principalement grâce à leurs vastes réserves de pétrole, mais aussi en diversifiant leur économie dans des secteurs comme le tourisme, l'aviation, et la finance. Le pays est un mélange fascinant de traditions arabes et de modernité cosmopolite.",
    description_city:
      "Dubaï est une ville des Émirats arabes unis, célèbre pour son architecture ultramoderne, ses gratte-ciels comme le Burj Khalifa, et ses centres commerciaux luxueux. Dubaï est un centre économique et touristique majeur au Moyen-Orient, offrant des expériences de shopping, de divertissement, et d'aventure dans le désert. La ville est un mélange de traditions arabes et de modernité cosmopolite.",
    Latitude: 25.2653471,
    Longitude: 55.2924914,
  },
  {
    id: 19,
    City: "Hong Kong",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZsLIyFRvB1MUZucrwLMJywZYLLuctYBSfg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Wl88Ite_CUMtcKvk2YdmRRwnZ4NSoU7YTQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZoolp9Eh4cjj9eRBKnxsM56AVVPSJTitpw&s",
    Air_Quality_Index: 100,
    Happiness_Score: 5.5,
    Cost_of_Living_Index: 130,
    Region: "Asie",
    Country: "Chine",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXj5YjV8ZFpHupyO1pQ89FL2rU9KwDYjrD5g&s",
    AvgTemperature: 23.9237654987,
    Traffic_enc: 2,
    IATA: ["HKG"],
    Airport_name: ["Hong Kong International Airport"],
    meal_inexpensive_restaurant_USD: 7.68,
    meal_2people_midrange_restaurant: 64.02,
    rent_appartment_month_center_1bedroom: 2284.16,
    rent_appartment_month_no_center_1bedroom: 1629.08,
    Pays: "Chine",
    vol_price_USD: 764.0,
    sejour_price_USD: 1944.0,
    day_price_USD: 153.0,
    description_country:
      "La Chine est le pays le plus peuplé du monde, situé en Asie de l'Est. C’est une civilisation ancienne avec une histoire riche de plus de 5 000 ans, marquée par des dynasties impériales et des révolutions. Pékin, la capitale, est le centre politique et culturel du pays, tandis que Shanghai est le centre économique. La Chine est connue pour ses contributions majeures à la science, à la technologie, à l'art, et à la philosophie, avec des inventions comme le papier, la poudre à canon, et l'imprimerie. Aujourd'hui, la Chine est une superpuissance mondiale avec une économie en plein essor et une influence politique croissante.",
    description_city:
      "Hong Kong est une région administrative spéciale de Chine, connue pour son skyline spectaculaire, son port animé, et son rôle de centre financier mondial. La ville offre un mélange unique de culture chinoise et d'influences coloniales britanniques, visible dans son architecture, sa cuisine, et ses traditions. Hong Kong est également réputée pour ses marchés, ses festivals, et sa vie nocturne trépidante.",
    Latitude: 22.2793278,
    Longitude: 114.1628131,
  },
  {
    id: 20,
    City: "Barcelone",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAI-LEOOVAOZU-dswBd2GqT-3qscPeMd8tQA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRgSGvnL8MXW_79e4zK00o9c1_AkEA2M_NQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPpQnpBw3LcyVqjUVteJbORY60T149_sdyA&s",
    Air_Quality_Index: 35,
    Happiness_Score: 7.7,
    Cost_of_Living_Index: 90,
    Region: "Europe",
    Country: "Espagne",
    image_country:
      "https://images.winalist.com/blog/wp-content/uploads/2022/06/22135520/alicante-1024x683.jpeg",
    AvgTemperature: 16.2607022088,
    Traffic_enc: 1,
    IATA: ["BCN", "BLA"],
    Airport_name: [
      "Barcelona International Airport",
      "General Jose Antonio Anzoategui International Airport",
    ],
    meal_inexpensive_restaurant_USD: 14.54,
    meal_2people_midrange_restaurant: 62.32,
    rent_appartment_month_center_1bedroom: 1075.89,
    rent_appartment_month_no_center_1bedroom: 840.13,
    Pays: "Espagne",
    vol_price_USD: 71.0,
    sejour_price_USD: 453.0,
    day_price_USD: 78.0,
    description_country:
      "L'Espagne est un pays du sud de l'Europe, connu pour sa culture vibrante, son histoire riche, et ses paysages variés allant des plages de la Costa del Sol aux montagnes des Pyrénées. Madrid, la capitale, est une ville dynamique et cosmopolite, tandis que Barcelone est célèbre pour son architecture unique, notamment les œuvres de Gaudí comme la Sagrada Família. L'Espagne est également réputée pour sa cuisine, avec des plats emblématiques comme la paella, les tapas, et le jamón ibérico. Le pays a une histoire complexe, marquée par des périodes d'unité et de division, comme la Reconquista et la guerre civile espagnole.",
    description_city:
      "Barcelone est une ville espagnole située en Catalogne, célèbre pour son architecture moderniste, notamment les œuvres d'Antoni Gaudí comme la Sagrada Família. Barcelone est aussi connue pour ses plages, son ambiance méditerranéenne, et son riche patrimoine culturel. La ville est un centre artistique et culturel, avec des musées, des festivals, et une scène gastronomique réputée.",
    Latitude: 41.3828939,
    Longitude: 2.1774322,
  },
  {
    id: 21,
    City: "Lisbone",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcY1uhOVQ4HznwxBOpwsz27E1obFtqQcibA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9iJ0WIwklRWB8uBnKz9jlLBvOULWi-CBVw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTt79CdGUBDG2XwEIpvhemyS8AZOM8zXSTPw&s",
    Air_Quality_Index: 40,
    Happiness_Score: 7.8,
    Cost_of_Living_Index: 75,
    Region: "Europe",
    Country: "Portugal",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_QjnxyXowGOcU6I_NlcfXw1m3y-06kPGog&s",
    AvgTemperature: 16.5876501907,
    Traffic_enc: 0,
    IATA: ["LIS"],
    Airport_name: ["Humberto Delgado Airport"],
    meal_inexpensive_restaurant_USD: 12.46,
    meal_2people_midrange_restaurant: 51.93,
    rent_appartment_month_center_1bedroom: 1215.82,
    rent_appartment_month_no_center_1bedroom: 801.79,
    Pays: "Portugal",
    vol_price_USD: 142.0,
    sejour_price_USD: 655.0,
    day_price_USD: 75.0,
    description_country:
      "Le Portugal est un pays situé à l'extrémité sud-ouest de l'Europe, connu pour son littoral spectaculaire, ses villages pittoresques, et son riche patrimoine maritime. Lisbonne, la capitale, est une ville charmante avec ses collines, ses tramways, et ses quartiers historiques comme Alfama. Le Portugal a été un des premiers empires coloniaux, avec des explorateurs célèbres comme Vasco de Gama qui ont ouvert de nouvelles routes maritimes vers l'Inde et l'Afrique. Le pays est aussi célèbre pour son vin de Porto, sa musique traditionnelle, le fado, et son amour du football. Aujourd'hui, le Portugal est une destination touristique prisée pour sa culture et sa qualité de vie.",
    description_city:
      "Lisbonne, la capitale du Portugal, est une ville historique et culturelle située sur les rives du Tage. Connue pour ses collines, ses tramways, et ses quartiers pittoresques comme Alfama, Lisbonne est une ville où le passé et le présent cohabitent harmonieusement. La ville est célèbre pour ses monuments, sa musique fado, et sa cuisine délicieuse, notamment les pasteis de nata. Lisbonne est également un centre économique et technologique en plein essor.",
    Latitude: 38.7077507,
    Longitude: -9.1365919,
  },
  {
    id: 22,
    City: "Melbourne",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEk7CBTgFbcc-YhmFgAbA1GpsBxLp3tdrww&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rxDgHnPVDqMejvVOSD9rlLmmOipvLKgi0w&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSz11AS4ZSlw24vcmZ5-P8Ls_VvrkOkV5IA&s",
    Air_Quality_Index: 45,
    Happiness_Score: 7.9,
    Cost_of_Living_Index: 115,
    Region: "Australie/Pacifique Sud",
    Country: "Australie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuh7wn3wVwE8fCfpFWiAZlw6NUZ4nwe-SxwA&s",
    AvgTemperature: 18.1774468187,
    Traffic_enc: 0,
    IATA: ["AVV", "MBW", "MEL", "MLB"],
    Airport_name: [
      "Avalon Airport",
      "Melbourne Moorabbin Airport",
      "Melbourne International Airport",
      "Melbourne International Airport",
    ],
    meal_inexpensive_restaurant_USD: 15.42,
    meal_2people_midrange_restaurant: 80.47,
    rent_appartment_month_center_1bedroom: 1226.45,
    rent_appartment_month_no_center_1bedroom: 1003.98,
    Pays: "Australie",
    vol_price_USD: 1201.0,
    sejour_price_USD: 3908.0,
    day_price_USD: 119.0,
    description_country:
      "L'Australie est un pays-continent situé dans l'hémisphère sud, connu pour sa faune unique, ses vastes déserts, et ses plages magnifiques. Sydney et Melbourne sont les villes les plus célèbres, chacune offrant une qualité de vie élevée et une culture vibrante. L'Australie est aussi reconnue pour son mode de vie décontracté et son amour du sport, notamment le rugby et le cricket. Le pays a une économie prospère, basée sur des ressources naturelles comme les minéraux, ainsi que sur le tourisme. La Grande Barrière de Corail et l'Outback sont des symboles naturels emblématiques de ce pays.",
    description_city:
      "Melbourne, en Australie, est une ville cosmopolite réputée pour sa qualité de vie, sa culture artistique, et ses cafés. C'est un centre culturel dynamique avec des festivals, des galeries d'art, et une scène musicale florissante. Melbourne est aussi connue pour ses sports, notamment le cricket et le tennis, et pour ses jardins magnifiques. La ville est un melting-pot de cultures, offrant une riche diversité gastronomique.",
    Latitude: -37.8142454,
    Longitude: 144.9631732,
  },
  {
    id: 23,
    City: "Auckland",
    image1:
      "https://images.ctfassets.net/bth3mlrehms2/1uneRYZMEI1CojLQ02xfSw/a002e1468e20182993b4bc8425e298b1/Nouvelle-Ze__lande__Auckland__Skyline.jpg?w=1047&h=595&fl=progressive&q=50&fm=jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp6CcdQgsYB4jMeXi-NxQAco-NkWr47YLJw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKQffzKJUaBzacaogFTwpD9D0z5WanMP66w&s",
    Air_Quality_Index: 35,
    Happiness_Score: 8.1,
    Cost_of_Living_Index: 100,
    Region: "Australie/Pacifique Sud",
    Country: "Nouvelle-Zélande",
    image_country:
      "https://www.hostelworld.com/blog/wp-content/uploads/2018/11/NZ-weather.jpg",
    AvgTemperature: 14.9520828837,
    Traffic_enc: 0,
    IATA: ["AKL", "WIK"],
    Airport_name: ["Auckland International Airport", "Waiheke Reeve Airport"],
    meal_inexpensive_restaurant_USD: 15.53,
    meal_2people_midrange_restaurant: 74.56,
    rent_appartment_month_center_1bedroom: 1320.14,
    rent_appartment_month_no_center_1bedroom: 1159.51,
    Pays: "Nouvelle-Zélande",
    vol_price_USD: 1310.0,
    sejour_price_USD: 2218.0,
    day_price_USD: 119.0,
    description_country:
      "La Nouvelle-Zélande est un pays insulaire situé dans le Pacifique Sud, composé de deux îles principales, l'île du Nord et l'île du Sud. Le pays est célèbre pour ses paysages spectaculaires, allant des montagnes enneigées des Alpes du Sud aux plages dorées de la Bay of Islands. Wellington est la capitale, tandis qu'Auckland est la plus grande ville. La Nouvelle-Zélande est connue pour sa riche culture maorie et son engagement en faveur de la nature et de l'environnement. Le pays est également un leader dans les sports d'aventure et est devenu une destination prisée pour les amateurs de plein air.",
    description_city:
      "Auckland est la plus grande ville de Nouvelle-Zélande, située sur l'île du Nord. Connue pour ses paysages volcaniques, ses ports, et ses plages, Auckland est un centre économique et culturel du Pacifique. La ville offre une qualité de vie exceptionnelle, avec des espaces verts, des musées, et une scène artistique dynamique. Auckland est également un point de départ pour explorer les magnifiques îles environnantes.",
    Latitude: -36.852095,
    Longitude: 174.7631803,
  },
  {
    id: 24,
    City: "Rome",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1B2XX5iWH7gTkPldkctN5sv4z85scO-4DWg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zlN2MynhkvSeX452Oxe-heMUuK_3iJMPcQ&s",
    image3:
      "https://www.donatello.fr/wp-content/uploads/2023/11/byn1agxcxjhz0zk.webp",
    Air_Quality_Index: 70,
    Happiness_Score: 6.7,
    Cost_of_Living_Index: 85,
    Region: "Europe",
    Country: "Italie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6b5mqI5YYluHeji9sIw1dEEsHl6vpJUIY_g&s",
    AvgTemperature: 15.6804566276,
    Traffic_enc: 2,
    IATA: ["CIA", "FCO", "REO", "RME", "RMG"],
    Airport_name: [
      "Ciampino\u2013G. B. Pastine International Airport",
      "Leonardo da Vinci\u2013Fiumicino Airport",
      "Rome State Airport",
      "Griffiss International Airport",
      "Richard B Russell Airport",
    ],
    meal_inexpensive_restaurant_USD: 16.1,
    meal_2people_midrange_restaurant: 72.71,
    rent_appartment_month_center_1bedroom: 1055.02,
    rent_appartment_month_no_center_1bedroom: 717.64,
    Pays: "Italie",
    vol_price_USD: 72.0,
    sejour_price_USD: 513.0,
    day_price_USD: 98.0,
    description_country:
      "L'Italie est un pays du sud de l'Europe, célèbre pour son patrimoine historique, sa cuisine, et ses arts. Rome, la capitale, est une ville millénaire qui abrite des monuments emblématiques comme le Colisée, le Vatican, et la fontaine de Trevi. L'Italie a été le berceau de la Renaissance, avec des artistes comme Léonard de Vinci et Michel-Ange qui ont marqué l'histoire de l'art. La cuisine italienne est mondialement connue, avec des plats comme les pâtes, les pizzas, et le risotto. Le pays est également reconnu pour sa mode, avec des maisons de couture célèbres comme Gucci et Prada, et son industrie automobile avec des marques comme Ferrari et Lamborghini.",
    description_city:
      "Rome, la capitale de l'Italie, est une ville chargée d'histoire, connue comme 'la Ville Éternelle'. Elle abrite des monuments emblématiques comme le Colisée, le Vatican, et la fontaine de Trevi. Rome est un centre mondial de l'art, de la culture, et de la religion. La ville offre une cuisine renommée, des places animées, et une richesse architecturale qui attire des millions de visiteurs chaque année.",
    Latitude: 41.8933203,
    Longitude: 12.4829321,
  },
  {
    id: 25,
    City: "Athenes",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6vJI9hgvSCfrd4FW9KOlCY87i-U2ESiUuw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYAUW5oNqa0rYsgSRK-m25YfWAQSubEcm-g&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrpdO6bJcPsxdjGQb_3OBrEH9Nuh6G1s8og&s",
    Air_Quality_Index: 75,
    Happiness_Score: 6.2,
    Cost_of_Living_Index: 70,
    Region: "Europe",
    Country: "Grèce",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE5nffhITac-PLDvKSro6XEidj337dt_xhw&s",
    AvgTemperature: 15.3521504014,
    Traffic_enc: 1,
    IATA: ["AHN", "ATH", "MMI"],
    Airport_name: [
      "Athens Ben Epps Airport",
      "Eleftherios Venizelos International Airport",
      "McMinn County Airport",
    ],
    meal_inexpensive_restaurant_USD: 12.46,
    meal_2people_midrange_restaurant: 51.93,
    rent_appartment_month_center_1bedroom: 508.7,
    rent_appartment_month_no_center_1bedroom: 453.9,
    Pays: "Grèce",
    vol_price_USD: 218.0,
    sejour_price_USD: 455.0,
    day_price_USD: 64.0,
    description_country:
      "La Grèce est un pays situé dans le sud-est de l'Europe, souvent considéré comme le berceau de la civilisation occidentale. Athènes, la capitale, est une ville riche en histoire, abritant des monuments antiques comme l'Acropole et le Parthénon. La Grèce est également le berceau de la démocratie, de la philosophie, et des Jeux olympiques. Le pays est connu pour ses paysages magnifiques, avec des îles pittoresques comme Santorin et Mykonos, ses plages de sable fin, et sa cuisine méditerranéenne, incluant des plats comme la moussaka, le souvlaki, et la feta. La Grèce joue un rôle clé dans la culture et l'histoire européennes.",
    description_city:
      "Athènes, la capitale de la Grèce, est une ville historique considérée comme le berceau de la civilisation occidentale. Connue pour l'Acropole, le Parthénon, et ses ruines antiques, Athènes est aussi une ville moderne avec une vie nocturne animée et une riche culture. La ville est un mélange de l'ancien et du contemporain, offrant une cuisine méditerranéenne savoureuse et des traditions vivantes.",
    Latitude: 33.9597677,
    Longitude: -83.376398,
  },
  {
    id: 26,
    City: "Vienne",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ru4649HOhgSDiXYp-iLJNvfR579RaCG0oQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumgX9wFG0QfONAiGx6DjstIl9ToeH8eQgDA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FrJFK7PiLEAJYhLoHzwkkv_qCBLIxqz73g&s",
    Air_Quality_Index: 30,
    Happiness_Score: 8.2,
    Cost_of_Living_Index: 95,
    Region: "Europe",
    Country: "Autriche",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqrjSLMsQDCOx8534J59L_bKjCB2B_znzgw&s",
    AvgTemperature: 10.5817924551,
    Traffic_enc: 0,
    IATA: ["VIE"],
    Airport_name: ["Vienna International Airport"],
    meal_inexpensive_restaurant_USD: 15.58,
    meal_2people_midrange_restaurant: 62.32,
    rent_appartment_month_center_1bedroom: 983.06,
    rent_appartment_month_no_center_1bedroom: 690.86,
    Pays: "Autriche",
    vol_price_USD: 131.0,
    sejour_price_USD: 797.0,
    day_price_USD: 108.0,
    description_country:
      "L'Autriche est un pays d'Europe centrale, réputé pour ses montagnes alpines, sa musique classique, et son riche patrimoine culturel. Vienne, la capitale, est une ville historique connue pour ses palais impériaux, ses opéras, et ses cafés traditionnels. L'Autriche a été le cœur de l'Empire austro-hongrois et a donné naissance à des figures culturelles majeures comme Mozart, Beethoven, et Freud. Le pays est aussi un centre de ski alpin, avec des stations célèbres comme Innsbruck et Kitzbühel. L'Autriche a une économie développée, fortement orientée vers le tourisme, l'industrie, et les services financiers.",
    description_city:
      "Vienne, la capitale de l'Autriche, est une ville réputée pour sa musique, son art, et son architecture impériale. Ancienne capitale de l'Empire austro-hongrois, Vienne est célèbre pour ses palais comme Schönbrunn et le Belvédère, ainsi que pour ses cafés historiques. La ville est un centre culturel, abritant des orchestres renommés, des musées, et une scène artistique dynamique. Vienne est également connue pour sa qualité de vie.",
    Latitude: 48.2083537,
    Longitude: 16.3725042,
  },
  {
    id: 27,
    City: "Dublin",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcC5XWHXpZTzaoOdJciCpQEc38jQruzGjjDA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVADIlOSsGFIeGh0ZjKbY0VCIDl-YNCg1hQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCc0QPM4nvzp1kVL_-HUt78W2LAtfATWwew&s",
    Air_Quality_Index: 40,
    Happiness_Score: 7.0,
    Cost_of_Living_Index: 105,
    Region: "Europe",
    Country: "Irlande",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsjC3RVQtm7DlLlt_TdZFH-Oh3q0GBUUEiw&s",
    AvgTemperature: 9.4815454349,
    Traffic_enc: 1,
    IATA: ["DBN", "DUB", "PSK"],
    Airport_name: [
      "W H 'Bud' Barron Airport",
      "Dublin Airport",
      "New River Valley Airport",
    ],
    meal_inexpensive_restaurant_USD: 18.7,
    meal_2people_midrange_restaurant: 83.1,
    rent_appartment_month_center_1bedroom: 1989.88,
    rent_appartment_month_no_center_1bedroom: 1738.62,
    Pays: "Irlande",
    vol_price_USD: 98.0,
    sejour_price_USD: 923.0,
    day_price_USD: 106.0,
    description_country:
      "L'Irlande est une île située à l'ouest de la Grande-Bretagne, connue pour ses paysages verdoyants, sa culture celtique, et ses légendes. Dublin, la capitale, est une ville animée, célèbre pour sa musique traditionnelle, ses pubs, et ses écrivains comme James Joyce. L'Irlande a une histoire marquée par la lutte pour l'indépendance, la Grande Famine, et le conflit en Irlande du Nord. Le pays est également réputé pour son patrimoine littéraire, ses festivals de musique, et sa passion pour le sport, notamment le football gaélique et le rugby. Aujourd'hui, l'Irlande est un pays moderne avec une économie en pleine expansion, en particulier dans les secteurs de la technologie et de la finance.",
    description_city:
      "Dublin, la capitale de l'Irlande, est une ville dynamique avec un riche patrimoine historique et culturel. Connue pour ses pubs animés, ses écrivains célèbres comme James Joyce, et ses monuments tels que le Trinity College, Dublin est aussi un centre technologique en plein essor. La ville offre une scène musicale vibrante, des festivals, et une ambiance conviviale. Dublin est un mélange de tradition irlandaise et de modernité.",
    Latitude: 53.3493795,
    Longitude: -6.2605593,
  },
  {
    id: 28,
    City: "Copenhague",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn64NOQeOMN54R_Lbpbod2drjbRInAaEyEwQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6996EASioqmiqHcBmTDnzT23jtlDAngdmQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_rHhvbfY9BSCC6SaVA6EdNjUl6QMA6kXDQ&s",
    Air_Quality_Index: 35,
    Happiness_Score: 8.3,
    Cost_of_Living_Index: 110,
    Region: "Europe",
    Country: "Danemark",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_68uGzUpnSgki5ol42ynrHMfnoBbnfxIjAg&s",
    AvgTemperature: 8.3113593304,
    Traffic_enc: 0,
    IATA: ["CPH", "RKE"],
    Airport_name: ["Copenhagen Kastrup Airport", "Copenhagen Roskilde Airport"],
    meal_inexpensive_restaurant_USD: 19.55,
    meal_2people_midrange_restaurant: 111.74,
    rent_appartment_month_center_1bedroom: 1705.63,
    rent_appartment_month_no_center_1bedroom: 1278.77,
    Pays: "Danemark",
    vol_price_USD: 131.0,
    sejour_price_USD: 1348.0,
    day_price_USD: 148.0,
    description_country:
      "Le Danemark est un pays d'Europe du Nord, connu pour son modèle social avancé, son design scandinave, et ses paysages côtiers. Copenhague, la capitale, est une ville moderne et écologique, réputée pour ses vélos, ses cafés branchés, et ses palais royaux. Le Danemark est souvent classé parmi les pays les plus heureux du monde, grâce à son haut niveau de vie, son système de santé universel, et son éducation gratuite. Le pays a une longue histoire, étant autrefois le centre de l'empire viking, et aujourd'hui il joue un rôle clé dans l'Union européenne et l'OTAN.",
    description_city:
      "Copenhague, la capitale du Danemark, est une ville moderne et écologiquement consciente, connue pour son architecture contemporaine, ses canaux, et ses vélos. La ville offre une qualité de vie élevée, avec des parcs, des cafés, et une scène gastronomique de renommée mondiale. Copenhague est également célèbre pour ses sites historiques comme le palais d'Amalienborg et pour son esprit de design innovant.",
    Latitude: 55.6867243,
    Longitude: 12.5700724,
  },
  {
    id: 29,
    City: "Stockholm",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2KyztVKq9ol0-1pK0aFMXp57YRakHapNhg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6n7oRVMInzO7visx4n0lVRYvQSWL_5KB4QA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqxLQrZoahaBff_LBs7XAlihNdWcYmgj8ww&s",
    Air_Quality_Index: 30,
    Happiness_Score: 8.0,
    Cost_of_Living_Index: 100,
    Region: "Europe",
    Country: "Suède",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1_TLM6L_1J3GbdWpmpOtKmijuipEIT5-9A&s",
    AvgTemperature: 7.2741684054,
    Traffic_enc: 0,
    IATA: ["ARN", "BMA", "SMP"],
    Airport_name: [
      "Stockholm-Arlanda Airport",
      "Stockholm-Bromma Airport",
      "Stockholm Airport",
    ],
    meal_inexpensive_restaurant_USD: 12.38,
    meal_2people_midrange_restaurant: 76.21,
    rent_appartment_month_center_1bedroom: 1365.56,
    rent_appartment_month_no_center_1bedroom: 1016.12,
    Pays: "Suède",
    vol_price_USD: 153.0,
    sejour_price_USD: 1834.0,
    day_price_USD: 129.0,
    description_country:
      "La Suède est un pays d'Europe du Nord, réputé pour sa qualité de vie, ses paysages naturels, et son engagement en faveur de l'environnement. Stockholm, la capitale, est une ville construite sur 14 îles, alliant modernité et histoire avec ses musées, ses parcs, et ses bâtiments médiévaux. La Suède est également connue pour ses entreprises innovantes, notamment dans la technologie, avec des marques comme IKEA, Volvo, et Spotify. Le pays a une longue tradition de neutralité et de diplomatie, jouant souvent un rôle de médiateur dans les conflits internationaux. La culture suédoise est marquée par un fort respect pour la nature et un engagement envers l'égalité des sexes.",
    description_city:
      "Stockholm, la capitale de la Suède, est une ville répartie sur 14 îles, connue pour ses canaux, son architecture historique, et son design scandinave. La ville offre une qualité de vie élevée avec des espaces verts, des musées comme le Vasa, et une scène culturelle riche. Stockholm est un centre d'innovation, avec une forte présence dans les technologies de l'information et une scène musicale dynamique.",
    Latitude: 59.3251172,
    Longitude: 18.0710935,
  },
  {
    id: 30,
    City: "Oslo",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkodS7V6wUcnaV51yg2sjl8-sLTe65ARCaFQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-AgmC68bcAOT8ins6d52yfD946tU6leavQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuZEsFayLvnGIzOSPoxrj--T5j6Ome5CxJw&s",
    Air_Quality_Index: 25,
    Happiness_Score: 8.5,
    Cost_of_Living_Index: 115,
    Region: "Europe",
    Country: "Norvège",
    image_country:
      "https://static-cms.routard.com/web-routard/uploads/xlarge_preikestolen_1479805_657ba5c8c9.jpg",
    AvgTemperature: 4.9574289138,
    Traffic_enc: 0,
    IATA: ["OSL", "RYG"],
    Airport_name: ["Oslo Gardermoen Airport", "Moss Airport, Rygge"],
    meal_inexpensive_restaurant_USD: 20.11,
    meal_2people_midrange_restaurant: 108.58,
    rent_appartment_month_center_1bedroom: 1405.05,
    rent_appartment_month_no_center_1bedroom: 1144.04,
    Pays: "Norvège",
    vol_price_USD: 153.0,
    sejour_price_USD: 2529.0,
    day_price_USD: 170.0,
    description_country:
      "La Norvège est un pays d'Europe du Nord, célèbre pour ses fjords spectaculaires, ses aurores boréales, et son modèle social avancé. Oslo, la capitale, est une ville moderne entourée de nature, offrant un accès facile à la montagne et à la mer. La Norvège a une économie prospère, en grande partie grâce à ses ressources pétrolières et gazières, mais aussi grâce à ses industries maritimes et technologiques. Le pays est souvent classé parmi les meilleurs au monde en termes de qualité de vie, de bien-être, et de sécurité. La culture norvégienne valorise le plein air, avec une forte tradition de ski et de randonnée.",
    description_city:
      "Oslo, la capitale de la Norvège, est une ville entourée de fjords et de forêts, connue pour son engagement en faveur du développement durable. La ville combine architecture moderne et histoire, avec des sites comme l'Opéra d'Oslo et le musée des navires vikings. Oslo est aussi un centre culturel et économique, avec une scène artistique florissante et une qualité de vie élevée, offrant un accès facile à la nature.",
    Latitude: 59.9133301,
    Longitude: 10.7389701,
  },
  {
    id: 31,
    City: "Helsinki",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGg71t226-UG0vCshlqj1dqFxPWJEqGCh4g&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20OUZwQpRZz7B5YL5QjVROIRHGNir03IkXQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUFqrS7xioeHL9PtwN1nQ6vmV-CXBdABjkQ&s",
    Air_Quality_Index: 20,
    Happiness_Score: 8.4,
    Cost_of_Living_Index: 90,
    Region: "Europe",
    Country: "Finlande",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbtY7syFU3jTst_9fadySSsfpUw45y3cing&s",
    AvgTemperature: 5.6911108713,
    Traffic_enc: 0,
    IATA: ["HEL", "HEM"],
    Airport_name: ["Helsinki Vantaa Airport", "Helsinki Malmi Airport"],
    meal_inexpensive_restaurant_USD: 13.5,
    meal_2people_midrange_restaurant: 83.1,
    rent_appartment_month_center_1bedroom: 1041.66,
    rent_appartment_month_no_center_1bedroom: 830.09,
    Pays: "Finlande",
    vol_price_USD: 164.0,
    sejour_price_USD: 1439.0,
    day_price_USD: 134.0,
    description_country:
      "La Finlande est un pays d'Europe du Nord, connu pour ses forêts denses, ses lacs innombrables, et son système éducatif de renommée mondiale. Helsinki, la capitale, est une ville qui combine une architecture moderne avec des influences russes et suédoises. La Finlande est souvent considérée comme l'un des pays les plus innovants et les plus stables du monde, avec un fort engagement envers l'égalité des sexes et la durabilité environnementale. La culture finlandaise est également marquée par la tradition du sauna, une partie intégrante de la vie quotidienne. Le pays est souvent classé parmi les plus heureux du monde.",
    description_city:
      "Helsinki, la capitale de la Finlande, est une ville côtière connue pour son design, son architecture moderne, et ses espaces verts. La ville offre une qualité de vie élevée, avec des parcs, des îles, et une scène culturelle dynamique. Helsinki est aussi un centre d'innovation, avec un fort accent sur la technologie et le développement durable. La ville est un mélange de tradition nordique et de modernité.",
    Latitude: 60.1674881,
    Longitude: 24.9427473,
  },
  {
    id: 32,
    City: "Prague",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCWV-koY5P211qXvDv3J0KnWGQ3C1Av-XoA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaaMWa1E2Ccf9lpWyWv7JPQ9XOG-Eizi8KA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB4laFLMDAWxtB1D1fPa6Cw0AiIbmtYaO0A&s",
    Air_Quality_Index: 65,
    Happiness_Score: 7.3,
    Cost_of_Living_Index: 80,
    Region: "Europe",
    Country: "Republique tchèque",
    image_country:
      "https://partir.ouest-france.fr/photos/pays/accueil/670/republique-tcheque.jpg",
    AvgTemperature: 8.6684773485,
    Traffic_enc: 1,
    IATA: ["PRG"],
    Airport_name: ["V\u00e1clav Havel Airport Prague"],
    meal_inexpensive_restaurant_USD: 8.65,
    meal_2people_midrange_restaurant: 43.26,
    rent_appartment_month_center_1bedroom: 945.17,
    rent_appartment_month_no_center_1bedroom: 704.73,
    Pays: "Republique tchèque",
    vol_price_USD: 87.0,
    sejour_price_USD: 129.0,
    day_price_USD: 51.0,
    description_country:
      "La République tchèque est un pays d'Europe centrale, célèbre pour son patrimoine historique, ses châteaux médiévaux, et sa bière. Prague, la capitale, est une ville magique, souvent surnommée 'la ville aux cent clochers', avec son architecture gothique, son château majestueux, et son pont Charles emblématique. Le pays a une histoire riche, ayant fait partie de l'Empire austro-hongrois et ayant traversé des périodes de domination nazie et soviétique avant de retrouver son indépendance en 1989. La République tchèque est aujourd'hui un pays démocratique et prospère, membre de l'Union européenne, avec une économie basée sur l'industrie, le tourisme, et les technologies de pointe.",
    description_city:
      "Prague, la capitale de la République tchèque, est une ville historique connue pour son architecture médiévale, ses châteaux, et ses ponts, notamment le pont Charles. Surnommée 'la Ville aux cent clochers', Prague offre une riche scène culturelle avec des théâtres, des musées, et des festivals. La ville est un mélange de tradition et de modernité, attirant des visiteurs pour son charme intemporel.",
    Latitude: 50.0596288,
    Longitude: 14.4464592733,
  },
  {
    id: 33,
    City: "Budapest",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-Og4-U34t4B7IC0f5IQvfOL19j8uPRaInA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdiKuBnhihWAyzvOOzpu4GdSyMIqwXimk4Q&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVkaKoOnAhmZuKVspqbm6iQMzPb0U993PVg&s",
    Air_Quality_Index: 70,
    Happiness_Score: 6.8,
    Cost_of_Living_Index: 75,
    Region: "Europe",
    Country: "Hongrie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBp92_9jz99UwldElyJ2rWEgrKqoURW0Z1pA&s",
    AvgTemperature: 10.6105894909,
    Traffic_enc: 1,
    IATA: ["BUD"],
    Airport_name: ["Budapest Liszt Ferenc International Airport"],
    meal_inexpensive_restaurant_USD: 7.93,
    meal_2people_midrange_restaurant: 38.35,
    rent_appartment_month_center_1bedroom: 475.62,
    rent_appartment_month_no_center_1bedroom: 368.37,
    Pays: "Hongrie",
    vol_price_USD: 82.0,
    sejour_price_USD: 513.0,
    day_price_USD: 64.0,
    description_country:
      "La Hongrie est un pays d'Europe centrale, connu pour sa riche histoire, sa culture unique, et ses sources thermales. Budapest, la capitale, est une ville majestueuse située sur les rives du Danube, avec des sites emblématiques comme le Parlement hongrois, le Bastion des Pêcheurs, et les thermes de Széchenyi. La Hongrie a une histoire complexe, marquée par des périodes de domination ottomane, autrichienne, et soviétique, avant de devenir une république démocratique en 1989. Le pays est célèbre pour sa cuisine, avec des plats traditionnels comme le goulasch et le paprika, ainsi que pour sa musique folklorique et sa danse.",
    description_city:
      "Budapest, la capitale de la Hongrie, est une ville majestueuse située sur les rives du Danube. Connue pour ses bains thermaux, son architecture, et son château, Budapest est aussi un centre culturel et économique de la région. La ville offre une scène artistique dynamique, une cuisine délicieuse, et une histoire riche, visible dans ses monuments et ses quartiers historiques comme le quartier du château de Buda.",
    Latitude: 47.48138955,
    Longitude: 19.1460941269,
  },
  {
    id: 34,
    City: "Varsovie",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjUc1zc4Mo3TkorfP5LVILyqwqm7n5ON81g&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsfuB7oaUSY86VB5SlJfqZTKPO5XfljTkhQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWS99a6JvmRuh_mNpgctBEzhdnViDP2_ZeKg&s",
    Air_Quality_Index: 75,
    Happiness_Score: 6.7,
    Cost_of_Living_Index: 70,
    Region: "Europe",
    Country: "Pologne",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJElj7HLkzyireNYhHNa0_LOhZctyOwBuCQ&s",
    AvgTemperature: 8.7644914502,
    Traffic_enc: 1,
    IATA: ["WAW", "WMI"],
    Airport_name: ["Warsaw Chopin Airport", "Modlin Airport"],
    meal_inexpensive_restaurant_USD: 7.78,
    meal_2people_midrange_restaurant: 44.43,
    rent_appartment_month_center_1bedroom: 778.49,
    rent_appartment_month_no_center_1bedroom: 592.63,
    Pays: "Pologne",
    vol_price_USD: 109.0,
    sejour_price_USD: 1334.0,
    day_price_USD: 54.0,
    description_country:
      "La Pologne est un pays d'Europe centrale, riche en histoire et en culture, avec un patrimoine profondément marqué par les guerres et les partitions. Varsovie, la capitale, est une ville qui a su se reconstruire après les destructions de la Seconde Guerre mondiale, avec une vieille ville classée au patrimoine mondial de l'UNESCO. Cracovie, l'ancienne capitale, est un centre culturel majeur, connu pour son château de Wawel et le quartier juif de Kazimierz. La Pologne a une économie en pleine croissance, avec des secteurs dynamiques comme l'industrie, les services, et les technologies de l'information. Le pays est également connu pour sa scène culturelle, notamment sa littérature et son cinéma.",
    description_city:
      "Varsovie, la capitale de la Pologne, est une ville qui a su se reconstruire après les destructions de la Seconde Guerre mondiale. Aujourd'hui, elle est un centre économique et culturel dynamique. Varsovie est connue pour son architecture moderne, ses parcs, et son centre historique, inscrit au patrimoine mondial de l'UNESCO. La ville est aussi un hub pour l'innovation, la culture, et l'éducation en Europe centrale.",
    Latitude: 52.2337172,
    Longitude: 21.0714322356,
  },
  {
    id: 35,
    City: "Sofia",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHoATNW6usMqDvGjuNfOf5xR7yI8UIX-EOw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkLSyDSk6UsvJte5ElLVB0EKd8uEv8jKX4Q&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUnQL_a9cpI7NihgsAlkTSHWQFPNaZWZCkA&s",
    Air_Quality_Index: 80,
    Happiness_Score: 6.0,
    Cost_of_Living_Index: 60,
    Region: "Europe",
    Country: "Bulgarie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGqaxiCQmKyj-W5-7FviH6teqKCu-H5KzgA&s",
    AvgTemperature: 7.3351919802,
    Traffic_enc: 2,
    IATA: ["SOF"],
    Airport_name: ["Sofia Airport"],
    meal_inexpensive_restaurant_USD: 10.62,
    meal_2people_midrange_restaurant: 37.17,
    rent_appartment_month_center_1bedroom: 437.61,
    rent_appartment_month_no_center_1bedroom: 330.07,
    Pays: "Bulgarie",
    vol_price_USD: 104.0,
    sejour_price_USD: 912.0,
    day_price_USD: 57.0,
    description_country:
      "La Bulgarie est un pays d'Europe du Sud-Est, riche en histoire, en traditions, et en paysages diversifiés, allant des montagnes des Balkans aux plages de la mer Noire. Sofia, la capitale, est une ville ancienne avec une riche histoire, où se côtoient des vestiges romains, des églises médiévales, et des bâtiments modernes. Le pays est l'un des plus anciens d'Europe, ayant été fondé au VIIe siècle, et il conserve un riche patrimoine culturel, incluant des danses folkloriques, de la musique traditionnelle, et des icônes religieuses. La Bulgarie est également connue pour sa production de vin, son huile de rose, et sa cuisine, avec des plats comme le banitsa et le yogourt bulgare.",
    description_city:
      "Sofia, la capitale de la Bulgarie, est une ville où l'histoire ancienne et moderne se rencontrent. Connue pour ses églises orthodoxes, ses monuments communistes, et ses boulevards animés, Sofia est aussi un centre culturel et économique de la région. La ville offre une scène artistique dynamique, des musées, et une cuisine savoureuse. Sofia est entourée de montagnes, offrant un accès facile à la nature et aux sports d'hiver.",
    Latitude: -15.2538402,
    Longitude: 48.2562163,
  },
  {
    id: 36,
    City: "Belgrade",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JwHsbYw1lt2qqfYZcwt1wU3HGdWn_fugMg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Y8sYn57YY7wuxRHb7VurIO7ypHsIMZjNAA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-t6rWqb6gMufRtnmj5TWc8yXYnlUjKiX0wg&s",
    Air_Quality_Index: 85,
    Happiness_Score: 5.5,
    Cost_of_Living_Index: 55,
    Region: "Europe",
    Country: "Serbie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOOWmNYmX8A9dnk15xvNAhaxMYqkjJiPpAg&s",
    AvgTemperature: 12.2404669401,
    Traffic_enc: 2,
    IATA: ["BEG"],
    Airport_name: ["Belgrade Nikola Tesla Airport"],
    meal_inexpensive_restaurant_USD: 7.96,
    meal_2people_midrange_restaurant: 31.86,
    rent_appartment_month_center_1bedroom: 635.45,
    rent_appartment_month_no_center_1bedroom: 397.77,
    Pays: "Serbie",
    vol_price_USD: 186.0,
    sejour_price_USD: 1507.0,
    day_price_USD: 55.0,
    description_country:
      "La Serbie est un pays d'Europe du Sud-Est, situé au cœur des Balkans, avec une histoire riche et complexe. Belgrade, la capitale, est l'une des plus anciennes villes d'Europe, connue pour sa vie nocturne animée, ses forteresses historiques, et ses influences culturelles diverses. La Serbie a été au carrefour des civilisations romaine, byzantine, ottomane, et austro-hongroise, ce qui se reflète dans son patrimoine culturel. Le pays est également reconnu pour sa musique traditionnelle, sa cuisine savoureuse, et son hospitalité chaleureuse. Malgré des défis économiques, la Serbie est un pays en développement avec un potentiel de croissance dans les secteurs de l'agriculture, du tourisme, et de l'industrie.",
    description_city:
      "Belgrade, la capitale de la Serbie, est une ville ancienne située au confluent du Danube et de la Save. Connue pour sa vie nocturne animée, ses forteresses historiques, et ses cafés, Belgrade est un centre culturel et économique des Balkans. La ville offre une riche scène artistique, des festivals, et une histoire complexe marquée par différentes civilisations. Belgrade est un mélange de tradition et de modernité",
    Latitude: 44.8178131,
    Longitude: 20.4568974,
  },
  {
    id: 37,
    City: "Lima",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceUYUZeMMDUshdnCaZQ5Tx2ZfU1fFUOdgIA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gjOpD63oml9pgbjfz_yGyQURIcZoXht-hQ&s",
    image3: "https://cdn.generationvoyage.fr/2020/04/lima-cta.jpg",
    Air_Quality_Index: 100,
    Happiness_Score: 4.2,
    Cost_of_Living_Index: 55,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Perou",
    image_country:
      "https://www.perou-sur-mesure.com/uploads/sites/50/2020/01/rainbow-montain-perou-530x400-c-56x70.jpeg",
    AvgTemperature: 19.2408038693,
    Traffic_enc: 3,
    IATA: ["AOH", "LIM"],
    Airport_name: [
      "Lima Allen County Airport",
      "Jorge Ch\u00e1vez International Airport",
    ],
    meal_inexpensive_restaurant_USD: 3.84,
    meal_2people_midrange_restaurant: 23.06,
    rent_appartment_month_center_1bedroom: 503.19,
    rent_appartment_month_no_center_1bedroom: 339.01,
    Pays: "Perou",
    vol_price_USD: 1026.0,
    sejour_price_USD: 2440.0,
    day_price_USD: 46.0,
    description_country:
      "Le Pérou est un pays d'Amérique du Sud, célèbre pour son patrimoine inca, ses paysages spectaculaires, et sa culture riche. Lima, la capitale, est une ville vibrante située sur la côte pacifique, connue pour son mélange d'architecture coloniale et moderne, ainsi que pour sa scène gastronomique renommée. Le Pérou abrite l'une des merveilles du monde, le Machu Picchu, une ancienne cité inca perchée dans les Andes. Le pays est également connu pour sa diversité géographique, avec des régions comme l'Amazonie, le désert côtier, et le lac Titicaca. La culture péruvienne est un mélange d'influences indigènes, espagnoles, et africaines, avec des traditions uniques en musique, en danse, et en cuisine.",
    description_city:
      "Lima, la capitale du Pérou, est une métropole côtière riche en histoire et en culture. Connue pour son centre historique colonial, ses musées, et sa scène gastronomique de renommée mondiale, Lima est un mélange de tradition et de modernité. La ville est également un point de départ pour explorer les sites archéologiques incas et les merveilles naturelles du Pérou. Lima offre une riche diversité culturelle et une ambiance vibrante.",
    Latitude: -12.0621065,
    Longitude: -77.0365256,
  },
  {
    id: 38,
    City: "Bogota",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR8VasAc7db38YEoCUSOxzBEXuOj-pL8fYQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRS1i8gxLejW_Lih8vYP9qa31sTSvnJlEiA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVhWZa4v4iv-Dm26rk2OLhq3AFBtaF8WPlw&s",
    Air_Quality_Index: 110,
    Happiness_Score: 5.0,
    Cost_of_Living_Index: 60,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Colombie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_uJSG5-CxYbO--BvMpASI9Fak_l-aOcxYw&s",
    AvgTemperature: 12.913309111,
    Traffic_enc: 2,
    IATA: ["BOG"],
    Airport_name: ["El Dorado International Airport"],
    meal_inexpensive_restaurant_USD: 3.06,
    meal_2people_midrange_restaurant: 18.34,
    rent_appartment_month_center_1bedroom: 320.94,
    rent_appartment_month_no_center_1bedroom: 253.16,
    Pays: "Colombie",
    vol_price_USD: 830.0,
    sejour_price_USD: 3038.0,
    day_price_USD: 64.0,
    description_country:
      "La Colombie est un pays d'Amérique du Sud, connu pour sa diversité culturelle, ses paysages variés, et son café de renommée mondiale. Bogotá, la capitale, est une ville cosmopolite située à haute altitude, offrant un mélange d'architecture coloniale, de musées modernes, et de vie nocturne animée. La Colombie est également célèbre pour ses plages des Caraïbes, ses montagnes des Andes, et sa forêt amazonienne. Le pays a une histoire complexe marquée par des conflits internes, mais il a fait des progrès significatifs en matière de sécurité et de développement économique ces dernières années. La Colombie est également un centre de production de musique et de danse, avec des genres populaires comme la cumbia et le vallenato.",
    description_city:
      "Bogotá, la capitale de la Colombie, est une ville située à haute altitude dans les Andes. Connue pour son centre historique, la Candelaria, ses musées comme le Musée de l'or, et sa scène culturelle dynamique, Bogotá est un centre économique et politique du pays. La ville offre un mélange de tradition et de modernité, avec des quartiers animés, des marchés, et une cuisine riche en saveurs locales.",
    Latitude: 4.6533816,
    Longitude: -74.0836333,
  },
  {
    id: 39,
    City: "Caracas",
    image1:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/south-america/venezuela/caracas/caracas-banner-mobile-1024x553.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRZnO2B5eMERXjIJb-5nUamuE8g9sO1S4xg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYJv-1ZaPBd6yuZP6EycRwa2PNFxFZLfPAA&s",
    Air_Quality_Index: 115,
    Happiness_Score: 3.0,
    Cost_of_Living_Index: 50,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Venezuela",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZQxk_AhuIa_7dOP4g4tPWOM984fKJ-JNMg&s",
    AvgTemperature: 25.7366732626,
    Traffic_enc: 3,
    IATA: ["CCS"],
    Airport_name: ["Simon Bolivar International Airport"],
    meal_inexpensive_restaurant_USD: 10.0,
    meal_2people_midrange_restaurant: 50.0,
    rent_appartment_month_center_1bedroom: 383.33,
    rent_appartment_month_no_center_1bedroom: 322.22,
    Pays: "Venezuela",
    vol_price_USD: 808.0,
    sejour_price_USD: 1721.0,
    day_price_USD: 74.0,
    description_country:
      "Le Venezuela est un pays d'Amérique du Sud, riche en ressources naturelles, notamment le pétrole, mais confronté à des défis économiques et politiques importants. Caracas, la capitale, est une ville située dans une vallée entourée de montagnes, connue pour son architecture moderne, ses marchés animés, et ses contrastes sociaux. Le Venezuela possède des paysages naturels spectaculaires, tels que le Salto Ángel, la plus haute chute d'eau du monde, et le parc national Canaima. Le pays est également riche en biodiversité, avec une variété de régions écologiques allant des Andes à l'Amazonie. Malgré les défis, le Venezuela a une culture vibrante, avec des contributions importantes à la musique, à la littérature, et à l'art.",
    description_city:
      "Caracas, la capitale du Venezuela, est une ville dynamique entourée de montagnes. Connue pour son architecture moderne, ses parcs, et son rôle de centre économique et culturel du pays, Caracas a une histoire complexe marquée par des périodes de prospérité et de difficultés. La ville offre des musées, des théâtres, et une scène musicale vibrante, malgré les défis socio-économiques qu'elle traverse.",
    Latitude: 10.5060934,
    Longitude: -66.9146008,
  },
  {
    id: 40,
    City: "Quito",
    image1:
      "https://content.r9cdn.net/rimg/dimg/5c/7d/bc41e7f0-city-35586-162e4be9769.jpg?crop=true&width=1020&height=498",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU84FtpF9O3Nz8NRGfv3rPSQEZyuNC_dyXg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94OEs9ooedL1nxU4c_wLPvF9WAvmu6cCpRQ&s",
    Air_Quality_Index: 120,
    Happiness_Score: 4.5,
    Cost_of_Living_Index: 55,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Equateur",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx43P3KzobvvFUzSRA656aVJ_riZVbxwGqtA&s",
    AvgTemperature: 5.7974241731,
    Traffic_enc: 2,
    IATA: ["UIO"],
    Airport_name: ["Mariscal Sucre International Airport"],
    meal_inexpensive_restaurant_USD: 3.5,
    meal_2people_midrange_restaurant: 42.5,
    rent_appartment_month_center_1bedroom: 445.83,
    rent_appartment_month_no_center_1bedroom: 237.81,
    Pays: "Equateur",
    vol_price_USD: 874.0,
    sejour_price_USD: 2041.0,
    day_price_USD: 51.0,
    description_country:
      "L'Équateur est un pays d'Amérique du Sud, situé sur la ligne équatoriale, connu pour sa biodiversité exceptionnelle et ses paysages contrastés. Quito, la capitale, est une ville située à haute altitude, avec un centre historique bien préservé classé au patrimoine mondial de l'UNESCO. Le pays abrite les îles Galápagos, célèbres pour leur faune unique et leurs contributions à la théorie de l'évolution de Charles Darwin. L'Équateur est également marqué par la diversité de ses cultures indigènes, son architecture coloniale, et ses marchés colorés. La production de bananes, de cacao, et de roses est un pilier de l'économie, tandis que le tourisme joue un rôle croissant.",
    description_city:
      "Quito, la capitale de l'Équateur, est une ville située à haute altitude, célèbre pour son centre historique bien préservé, inscrit au patrimoine mondial de l'UNESCO. La ville est un mélange d'architecture coloniale et de modernité, avec des églises, des places, et des musées. Quito est aussi un point de départ pour explorer les Andes et les forêts tropicales. La ville offre une riche culture andine et une ambiance accueillante.",
    Latitude: -0.2201641,
    Longitude: -78.5123274,
  },
  {
    id: 41,
    City: "Panama City",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDuJSdUDE40zQ8a0HrukomSRcq75SKv3LDA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwt1CdG5Kcj_MvFwfHGGLT4uUtcrzUfYwbg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmICKtdvabJyxJiESMk-wYkdB6Pyn39WeS-Q&s",
    Air_Quality_Index: 125,
    Happiness_Score: 5.8,
    Cost_of_Living_Index: 60,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Paname",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggkaU3erki7-UsM2QJ_hpI4th41y-fjI05A&s",
    AvgTemperature: 26.4326630213,
    Traffic_enc: 1,
    IATA: ["PAM"],
    Airport_name: ["Tyndall Air Force Base"],
    meal_inexpensive_restaurant_USD: 8.0,
    meal_2people_midrange_restaurant: 50.0,
    rent_appartment_month_center_1bedroom: 908.95,
    rent_appartment_month_no_center_1bedroom: 510.29,
    Pays: "Paname",
    vol_price_USD: 764.0,
    sejour_price_USD: 1761.0,
    day_price_USD: 68.0,
    description_country:
      "Le Panama est un pays d'Amérique centrale, connu pour son canal stratégique reliant l'océan Atlantique à l'océan Pacifique, un exploit d'ingénierie qui a transformé le commerce mondial. Panama City, la capitale, est une ville moderne avec des gratte-ciels, des casinos, et un centre historique, le Casco Viejo, classé au patrimoine mondial de l'UNESCO. Le pays est également riche en biodiversité, avec des forêts tropicales, des plages de sable blanc, et une faune variée. L'économie panaméenne est l'une des plus dynamiques de la région, soutenue par les services financiers, le commerce, et le tourisme. Panama est aussi un carrefour culturel, avec des influences espagnoles, africaines, et amérindiennes.",
    description_city:
      "Panama City, la capitale du Panama, est une métropole moderne située au bord du canal de Panama, l'une des merveilles d'ingénierie du monde. Connue pour ses gratte-ciels, son quartier historique Casco Viejo, et ses plages, Panama City est un centre financier et commercial de la région. La ville offre une riche diversité culturelle, une vie nocturne animée, et un mélange de tradition et de modernité.",
    Latitude: 30.1586518,
    Longitude: -85.6602936,
  },
  {
    id: 42,
    City: "La Havane",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUn5WCO5-n_kUoH2vQkwsIyBXwlUUJVGOwA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5vzIVgU8wb6xUSoQkmjEGGBNwBMV_TjsKQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWr3SP9deqclZFrASy7wh6_vZBhFEkwwwrzA&s",
    Air_Quality_Index: 135,
    Happiness_Score: 6.0,
    Cost_of_Living_Index: 50,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Cuba",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxmpICgrbMey0c9U2eUQ4PBU9ZfAjmvxBtg&s",
    AvgTemperature: 22.5782239493,
    Traffic_enc: 1,
    IATA: ["HAV", "UPB"],
    Airport_name: ["Jose Marti International Airport", "Playa Baracoa Airport"],
    meal_inexpensive_restaurant_USD: 10.0,
    meal_2people_midrange_restaurant: 40.0,
    rent_appartment_month_center_1bedroom: 353.33,
    rent_appartment_month_no_center_1bedroom: 222.5,
    Pays: "Cuba",
    vol_price_USD: 819.0,
    sejour_price_USD: 1221.0,
    day_price_USD: 64.0,
    description_country:
      "Cuba est une île située dans les Caraïbes, connue pour sa culture riche, son histoire révolutionnaire, et ses plages paradisiaques. La Havane, la capitale, est une ville emblématique avec son architecture coloniale, ses voitures anciennes, et son atmosphère nostalgique. Cuba est célèbre pour sa musique, notamment la salsa, le mambo, et le son cubain, ainsi que pour son art et sa littérature. Le pays a une histoire marquée par la révolution de 1959 menée par Fidel Castro, qui a établi un régime socialiste toujours en place aujourd'hui. Malgré les défis économiques, Cuba est réputée pour ses avancées dans les domaines de la santé et de l'éducation.",
    description_city:
      "La Havane, la capitale de Cuba, est une ville emblématique connue pour son architecture coloniale colorée, ses voitures anciennes, et sa culture vibrante. La ville offre une riche histoire, visible dans ses quartiers comme La Vieille Havane, classée au patrimoine mondial de l'UNESCO. La Havane est aussi le cœur de la musique cubaine, du salsa au jazz, et une destination prisée pour son ambiance unique.",
    Latitude: 23.135305,
    Longitude: -82.3589631,
  },
  {
    id: 43,
    City: "Saint-Domingue",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKYGJtRXIXZtsICJslamnCWWfY_YO7i_U7A&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTzuv8ouOFkABldNi0rMUES2YK1IhrCVNZw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbh7JHYnSvBt8MJpm3YLdSpn6ykKi0oQ4v7A&s",
    Air_Quality_Index: 140,
    Happiness_Score: 5.5,
    Cost_of_Living_Index: 55,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "République dominicaine",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKjltKbDKX71j68fy7OwhOvXAmkr2CwsbEQ&s",
    AvgTemperature: 18.4531990166,
    Traffic_enc: 2,
    IATA: ["SDQ", "STD"],
    Airport_name: [
      "Las Americas International Airport",
      "Mayor Buenaventura Vivas International Airport",
    ],
    meal_inexpensive_restaurant_USD: 9.04,
    meal_2people_midrange_restaurant: 37.99,
    rent_appartment_month_center_1bedroom: 899.92,
    rent_appartment_month_no_center_1bedroom: 369.91,
    Pays: "République dominicaine",
    vol_price_USD: 764.0,
    sejour_price_USD: 985.0,
    day_price_USD: 57.0,
    description_country:
      "La République dominicaine est un pays des Caraïbes, partageant l'île d'Hispaniola avec Haïti. Elle est connue pour ses plages de sable blanc, ses stations balnéaires, et sa culture vibrante. Saint-Domingue, la capitale, est la plus ancienne ville coloniale du Nouveau Monde, avec un centre historique classé au patrimoine mondial de l'UNESCO. La République dominicaine est également réputée pour sa musique, notamment le merengue et la bachata, ainsi que pour ses cigares et son rhum. Le pays a une économie diversifiée, avec des secteurs importants comme le tourisme, l'agriculture, et les zones franches industrielles. La République dominicaine est l'une des destinations touristiques les plus populaires des Caraïbes.",
    description_city:
      "Saint-Domingue, la capitale de la République dominicaine, est la plus ancienne ville coloniale du Nouveau Monde. Connue pour sa zone coloniale, classée au patrimoine mondial de l'UNESCO, Saint-Domingue est riche en histoire et en culture. La ville offre des plages, une vie nocturne animée, et une scène artistique dynamique. Saint-Domingue est un mélange de tradition et de modernité, avec une ambiance caribéenne chaleureuse.",
    Latitude: 18.4801972,
    Longitude: -69.942111,
  },
  {
    id: 44,
    City: "Manille",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUBG7_l-_in_cis37Rh8cyz1A9QM-6bKBGQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xZw4BUDoaE7C-rPQPL3PNqUp_KOh2ibDxw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQcmArdu3TTLzM2VAXmCCk9SC-VoxmeS5mA&s",
    Air_Quality_Index: 150,
    Happiness_Score: 4.5,
    Cost_of_Living_Index: 45,
    Region: "Asie",
    Country: "Philippines",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XP6FBrVRoheL1di8kTpSrdZFTnHxvK2zuw&s",
    AvgTemperature: 27.5235688419,
    Traffic_enc: 3,
    IATA: ["MNL"],
    Airport_name: ["Ninoy Aquino International Airport"],
    meal_inexpensive_restaurant_USD: 3.54,
    meal_2people_midrange_restaurant: 27.4,
    rent_appartment_month_center_1bedroom: 559.52,
    rent_appartment_month_no_center_1bedroom: 281.78,
    Pays: "Philippines",
    vol_price_USD: 721.0,
    sejour_price_USD: 2397.0,
    day_price_USD: 36.0,
    description_country:
      "Les Philippines sont un archipel situé en Asie du Sud-Est, composé de plus de 7 000 îles, connu pour ses plages idylliques, ses volcans actifs, et sa culture diversifiée. Manille, la capitale, est une ville dense et animée, mélangeant des influences espagnoles, américaines, et asiatiques. Le pays a une histoire complexe, marquée par la colonisation espagnole, la domination américaine, et une longue lutte pour l'indépendance. Les Philippines sont également reconnues pour leur biodiversité, avec une faune et une flore uniques, ainsi que pour leur production de riz, de cocotiers, et de fruits tropicaux. La culture philippine est un mélange d'influences indigènes et coloniales, avec une forte tradition de musique, de danse, et de fêtes religieuses.",
    description_city:
      "Manille, la capitale des Philippines, est une ville animée et vibrante qui offre une expérience unique aux visiteurs. Située sur l'île de Luçon, Manila est connue pour son mélange de cultures espagnoles, américaines et asiatiques. La ville est célèbre pour son architecture coloniale, ses marchés animés et ses plats délicieux. Les touristes peuvent visiter le Fort Santiago, le Palais de Malacañang et la cathédrale de Manille, entre autres attractions.",
    Latitude: 14.5906346,
    Longitude: 120.9799964,
  },
  {
    id: 45,
    City: "Jakarta",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8Tzu4O9zelNl4zmLnbwdC-llW5pH1RLjfw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbb2uPzpRIsIfUtcd25d_staOPkUXpwIrYLA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsUMslvHORoM70A1qbc0odQznBe0LFgDytw&s",
    Air_Quality_Index: 155,
    Happiness_Score: 4.0,
    Cost_of_Living_Index: 40,
    Region: "Asie",
    Country: "Indonesie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmCzmqU6Xz-8Rx3gekGdzlW5-emMzRyrKrQ&s",
    AvgTemperature: 2.215782215,
    Traffic_enc: 3,
    IATA: ["CGK", "HLP", "PCB", "PPJ"],
    Airport_name: [
      "Soekarno-Hatta International Airport",
      "Halim Perdanakusuma International Airport",
      "Pondok Cabe Air Base",
      "Pulau Panjang Airport",
    ],
    meal_inexpensive_restaurant_USD: 2.54,
    meal_2people_midrange_restaurant: 22.25,
    rent_appartment_month_center_1bedroom: 482.85,
    rent_appartment_month_no_center_1bedroom: 270.15,
    Pays: "Indonesie",
    vol_price_USD: 710.0,
    sejour_price_USD: 1381.0,
    day_price_USD: 36.0,
    description_country:
      "L'Indonésie est le plus grand archipel du monde, situé en Asie du Sud-Est, comprenant plus de 17 000 îles, dont les plus connues sont Java, Sumatra, et Bali. Jakarta, la capitale, est une mégapole dynamique avec une économie en pleine croissance. L'Indonésie est le pays musulman le plus peuplé du monde, mais elle est également caractérisée par une grande diversité religieuse et culturelle, avec des influences hindoues, bouddhistes, et chrétiennes. Le pays est riche en ressources naturelles, notamment le pétrole, le gaz, et les minéraux, et est également un acteur majeur dans le commerce mondial. Le tourisme, en particulier à Bali, joue un rôle important dans l'économie indonésienne.",
    description_city:
      "Jakarta, la capitale de l'Indonésie, est une ville gigantesque et animée qui abrite plus de 10 millions d'habitants. Située sur l'île de Java, Jakarta est connue pour son mélange de cultures javanaises, hollandaises et islamiques. La ville est célèbre pour ses monuments historiques, tels que le Monas et le Musée national, ainsi que ses marchés traditionnels et ses plats délicieux. Les touristes peuvent également visiter les quartiers historiques de Kota et de Glodok.",
    Latitude: -6.175247,
    Longitude: 106.8270488,
  },
  {
    id: 46,
    City: "Kuala Lumpur",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvwmKPS9wJJdURDF7nXaTRa4tLBj8KEDYAw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh07bvCZZlUAuROrsb10bTLfffaPdX-85cg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-Ww-JFbksxUT6ic4pIkCsUIZfPKyfSqu_g&s",
    Air_Quality_Index: 160,
    Happiness_Score: 5.2,
    Cost_of_Living_Index: 55,
    Region: "Asie",
    Country: "Malaisie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCo5myaxZ3c6oKxuLncYhqV0lyvUEiwp0tQ&s",
    AvgTemperature: 26.0850720675,
    Traffic_enc: 2,
    IATA: ["KUL"],
    Airport_name: ["Kuala Lumpur International Airport"],
    meal_inexpensive_restaurant_USD: 3.33,
    meal_2people_midrange_restaurant: 22.2,
    rent_appartment_month_center_1bedroom: 426.7,
    rent_appartment_month_no_center_1bedroom: 274.24,
    Pays: "Malaisie",
    vol_price_USD: 655.0,
    sejour_price_USD: 2010.0,
    day_price_USD: 34.0,
    description_country:
      "La Malaisie est un pays situé en Asie du Sud-Est, composé de deux régions séparées par la mer de Chine méridionale : la Malaisie péninsulaire et la Malaisie orientale sur l'île de Bornéo. Kuala Lumpur, la capitale, est une ville moderne avec des gratte-ciels emblématiques comme les tours Petronas. La Malaisie est un melting-pot de cultures, avec des influences malaises, chinoises, indiennes, et européennes. Le pays est connu pour ses forêts tropicales, ses plages, et ses îles paradisiaques. L'économie malaisienne est l'une des plus dynamiques de la région, avec des secteurs forts comme l'électronique, l'huile de palme, et le tourisme.",
    description_city:
      "Kuala Lumpur, la capitale de la Malaisie, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située dans la péninsule malaisienne, Kuala Lumpur est connue pour ses gratte-ciel impressionnants, ses marchés animés et ses plats délicieux. Les touristes peuvent visiter les Tours Petronas, le Batu Caves et le Musée national, entre autres attractions. La ville est également célèbre pour son mélange de cultures malaisienne, chinoise et indienne.",
    Latitude: 3.1516964,
    Longitude: 101.6942371,
  },
  {
    id: 47,
    City: "Taiwan",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK1egq99y2VuKFQnn0lGoOtj_ztzvEC07eQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi47sh1-yPphBriv9bwwuu8pQIIlkJi8g4wA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yny15cNiZbAJjOb4-xx46E6O-eiCsPQY3w&s",
    Air_Quality_Index: 165,
    Happiness_Score: 5.8,
    Cost_of_Living_Index: 75,
    Region: "Asie",
    Country: "Taiwan",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IG58n4MvaCXCNrvCS6-RTqUKTqyBmQPBdQ&s",
    AvgTemperature: 20.741042521,
    Traffic_enc: 2,
    IATA: ["TPE"],
    Airport_name: ["Taiwan Taoyuan International Airport"],
    meal_inexpensive_restaurant_USD: 5.82,
    meal_2people_midrange_restaurant: 38.77,
    rent_appartment_month_center_1bedroom: 663.07,
    rent_appartment_month_no_center_1bedroom: 429.98,
    Pays: "Taiwan",
    vol_price_USD: 819.0,
    sejour_price_USD: 1798.0,
    day_price_USD: 62.0,
    description_country:
      "Taïwan est une île située en Asie de l'Est, au large de la côte sud-est de la Chine, connue pour son économie de haute technologie, sa cuisine variée, et ses paysages montagneux. Taipei, la capitale, est une ville moderne avec des gratte-ciels, des marchés de nuit animés, et une scène culturelle dynamique. Taïwan a une histoire complexe, avec des influences chinoises, japonaises, et occidentales. L'île est un centre majeur de l'industrie électronique mondiale, produisant des semi-conducteurs et d'autres composants technologiques essentiels. La culture taïwanaise est un mélange unique de traditions anciennes et de modernité, avec une forte influence bouddhiste et taoïste.",
    description_city:
      "Taïwan, est une ville animée et moderne qui offre une expérience unique aux visiteurs. Située sur l'île de Taïwan, Taipei est connue pour ses gratte-ciel impressionnants, ses marchés nocturnes et ses plats délicieux. Les touristes peuvent visiter le Palais présidentiel, le Musée national du Palais et la tour Taipei 101, entre autres attractions. La ville est également célèbre pour son mélange de cultures chinoises et japonaises.",
    Latitude: 25.0375198,
    Longitude: 121.5636796,
  },
  {
    id: 48,
    City: "Shanghai",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEIeZYTPxYMtAF-YSIKDCR_mu5yIL0NxYSQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSNXOXFCYUSJ8bUBiVuvYo0M3R74qsauvlg&s",
    image3:
      "https://content.r9cdn.net/rimg/dimg/7e/34/4e0ebeaf-city-25894-1672d2a1216.jpg?crop=true&width=1020&height=498",
    Air_Quality_Index: 170,
    Happiness_Score: 5.0,
    Cost_of_Living_Index: 80,
    Region: "Asie",
    Country: "Chine",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIrZxf-3NkxlJDqXJiDEJgbSMhmPZH3tOmA&s",
    AvgTemperature: 17.15168957,
    Traffic_enc: 3,
    IATA: ["PVG", "SHA"],
    Airport_name: [
      "Shanghai Pudong International Airport",
      "Shanghai Hongqiao International Airport",
    ],
    meal_inexpensive_restaurant_USD: 5.59,
    meal_2people_midrange_restaurant: 40.51,
    rent_appartment_month_center_1bedroom: 1080.07,
    rent_appartment_month_no_center_1bedroom: 564.3,
    Pays: "Chine",
    vol_price_USD: 546.0,
    sejour_price_USD: 1711.0,
    day_price_USD: 51.0,
    description_country:
      "La Chine est le pays le plus peuplé du monde, situé en Asie de l'Est. C’est une civilisation ancienne avec une histoire riche de plus de 5 000 ans, marquée par des dynasties impériales et des révolutions. Pékin, la capitale, est le centre politique et culturel du pays, tandis que Shanghai est le centre économique. La Chine est connue pour ses contributions majeures à la science, à la technologie, à l'art, et à la philosophie, avec des inventions comme le papier, la poudre à canon, et l'imprimerie. Aujourd'hui, la Chine est une superpuissance mondiale avec une économie en plein essor et une influence politique croissante.",
    description_city:
      "Shanghai, la ville la plus peuplée de Chine, est une métropole moderne et dynamique qui offre une expérience unique aux visiteurs. Située sur le delta du Yangtsé, Shanghai est connue pour ses gratte-ciel impressionnants, ses quartiers historiques et ses plats délicieux. Les touristes peuvent visiter le Bund, la Place du Peuple et la Tour de la Perle de l'Orient, entre autres attractions. La ville est également célèbre pour son mélange de cultures chinoises et occidentales.",
    Latitude: 31.2323437,
    Longitude: 121.4691024,
  },
  {
    id: 49,
    City: "Pékin",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGv9vCAIsdnlM-cJ06VZW7RnLx4XmChou32w&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPsqJ5Cmq9MGAckzn1VyIYGUpEv6VuarbiQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m2mMhjj3zrBr1_ZpJDUDsXl2XKn4nT_gaQ&s",
    Air_Quality_Index: 175,
    Happiness_Score: 4.5,
    Cost_of_Living_Index: 85,
    Region: "Asie",
    Country: "Chine",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIrZxf-3NkxlJDqXJiDEJgbSMhmPZH3tOmA&s",
    AvgTemperature: 12.6222090318,
    Traffic_enc: 3,
    IATA: ["NAY", "PEK"],
    Airport_name: [
      "Beijing Nanyuan Airport",
      "Beijing Capital International Airport",
    ],
    meal_inexpensive_restaurant_USD: 4.19,
    meal_2people_midrange_restaurant: 30.73,
    rent_appartment_month_center_1bedroom: 1176.59,
    rent_appartment_month_no_center_1bedroom: 660.6,
    Pays: "Chine",
    vol_price_USD: 546.0,
    sejour_price_USD: 1711.0,
    day_price_USD: 51.0,
    description_country:
      "La Chine est le pays le plus peuplé du monde, situé en Asie de l'Est. C’est une civilisation ancienne avec une histoire riche de plus de 5 000 ans, marquée par des dynasties impériales et des révolutions. Pékin, la capitale, est le centre politique et culturel du pays, tandis que Shanghai est le centre économique. La Chine est connue pour ses contributions majeures à la science, à la technologie, à l'art, et à la philosophie, avec des inventions comme le papier, la poudre à canon, et l'imprimerie. Aujourd'hui, la Chine est une superpuissance mondiale avec une économie en plein essor et une influence politique croissante.",
    description_city:
      "Pekin, la capitale de la Chine, est une ville historique et culturelle qui offre une expérience unique aux visiteurs. Située dans le nord de la Chine, Beijing est connue pour ses monuments historiques, tels que la Grande Muraille de Chine et la Cité interdite. Les touristes peuvent également visiter le Palais d'Été, le Temple du Ciel et la Place Tian'anmen, entre autres attractions. La ville est célèbre pour son mélange de cultures chinoises et mongoles.",
    Latitude: 39.9057136,
    Longitude: 116.3912972,
  },
  {
    id: 50,
    City: "Karachi",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2_4fXD56B8OOkUrkIebkc7WqDQdoUWJfyg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjGYuYpll3me0juWKWwpLwxelp8dS5V56Pg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavTo4LargAo8sJaGizuELronbFbL-i_mE-g&s",
    Air_Quality_Index: 190,
    Happiness_Score: 3.0,
    Cost_of_Living_Index: 40,
    Region: "Asie",
    Country: "Pakistan",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrj7TOa4B_a-qB6WO_9KZwNt_5r50b07qWfg&s",
    AvgTemperature: 25.5204892966,
    Traffic_enc: 3,
    IATA: ["KHI"],
    Airport_name: ["Jinnah International Airport"],
    meal_inexpensive_restaurant_USD: 2.23,
    meal_2people_midrange_restaurant: 11.14,
    rent_appartment_month_center_1bedroom: 113.5,
    rent_appartment_month_no_center_1bedroom: 77.16,
    Pays: "Pakistan",
    vol_price_USD: 928.0,
    sejour_price_USD: 1912.0,
    day_price_USD: 91.0,
    description_country:
      "Le Pakistan est un pays d'Asie du Sud, situé entre l'Inde, l'Afghanistan, et l'Iran, connu pour son histoire riche, ses paysages variés, et sa culture diversifiée. Islamabad, la capitale, est une ville moderne et planifiée, tandis que Karachi est la plus grande ville et le centre économique du pays. Le Pakistan a une histoire ancienne, avec des sites archéologiques comme Mohenjo-Daro, qui témoignent de la civilisation de la vallée de l'Indus. Le pays est majoritairement musulman et a été créé en 1947 après la partition de l'Inde britannique. Le Pakistan est un pays en développement, avec une économie basée sur l'agriculture, l'industrie textile, et les exportations de main-d'œuvre.",
    description_city:
      "Karachi, la ville la plus peuplée du Pakistan, est une métropole animée et vibrante qui offre une expérience unique aux visiteurs. Située sur la côte du Pakistan, Karachi est connue pour ses plages, ses marchés animés et ses plats délicieux. Les touristes peuvent visiter le Musée national, le Fort de Karachi et la mosquée de Tooba, entre autres attractions. La ville est également célèbre pour son mélange de cultures pakistanaises et arabes.",
    Latitude: 24.8546842,
    Longitude: 67.0207055,
  },
  {
    id: 51,
    City: "Dhaka",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVwAVR24w9jGxG63Sy-YDwzM121NfBvQjfg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStW2qZXU8nQ_dv9R2aiKBq_611uc1Mf0x9tA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Qgb1bTr3cTTw0mW6L5T-InZcg_8TKQJLCQ&s",
    Air_Quality_Index: 195,
    Happiness_Score: 2.5,
    Cost_of_Living_Index: 35,
    Region: "Asie",
    Country: "Bangladesh",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHBz0rTVOuJZvIkSbItxWsvWeljG2vjshtQ&s",
    AvgTemperature: -12.1611780455,
    Traffic_enc: 3,
    IATA: ["DAC"],
    Airport_name: ["Hazrat Shahjalal International Airport"],
    meal_inexpensive_restaurant_USD: 1.87,
    meal_2people_midrange_restaurant: 11.24,
    rent_appartment_month_center_1bedroom: 136.4,
    rent_appartment_month_no_center_1bedroom: 84.27,
    Pays: "Bangladesh",
    vol_price_USD: 1201.0,
    sejour_price_USD: 1817.0,
    day_price_USD: 58.0,
    description_country:
      "Le Bangladesh est un pays d'Asie du Sud, bordé par l'Inde, le Myanmar, et le golfe du Bengale, connu pour ses rivières, ses plaines fertiles, et son patrimoine culturel. Dhaka, la capitale, est une métropole densément peuplée, souvent appelée la 'ville des mosquées'. Le Bangladesh est l'un des pays les plus peuplés du monde, avec une économie en croissance rapide, principalement basée sur l'industrie textile, l'agriculture, et les envois de fonds des travailleurs expatriés. Le pays est également vulnérable aux catastrophes naturelles, notamment les inondations et les cyclones. La culture bengalie est riche, avec une forte tradition en littérature, en musique, et en arts visuels.",
    description_city:
      "Dhaka, la capitale du Bangladesh, est une ville animée et vibrante qui offre une expérience unique aux visiteurs. Située sur la rive du fleuve Buriganga, Dhaka est connue pour ses monuments historiques, tels que le Lalbagh Fort et la mosquée de Hussaini Dalan. Les touristes peuvent également visiter les marchés traditionnels et les bazars, ainsi que les plats délicieux de la cuisine bangladaise.",
    Latitude: 23.7644025,
    Longitude: 90.389015,
  },
  {
    id: 52,
    City: "Colombo",
    image1:
      "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ports-and-destinations/ports/colombo-sri-lanka/overview/colombo-sri-lanka-aerial-view.jpg?$750x320$",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpCZQqH5tXJNqZ9883UFEqCOhflSoh6zLbw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8xaVcLvT0Twm3KUbAh559d_x0NTyFyGtNQ&s",
    Air_Quality_Index: 200,
    Happiness_Score: 5.5,
    Cost_of_Living_Index: 45,
    Region: "Asie",
    Country: "Sri Lanka",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3WwhsTBbgro4NIPMeKGEDOmitPXQluKDvg&s",
    AvgTemperature: 23.4674556923,
    Traffic_enc: 2,
    IATA: ["CMB", "RML"],
    Airport_name: [
      "Bandaranaike International Colombo Airport",
      "Colombo Ratmalana Airport",
    ],
    meal_inexpensive_restaurant_USD: 1.36,
    meal_2people_midrange_restaurant: 10.85,
    rent_appartment_month_center_1bedroom: 295.69,
    rent_appartment_month_no_center_1bedroom: 113.04,
    Pays: "Sri Lanka",
    vol_price_USD: 677.0,
    sejour_price_USD: 1346.0,
    day_price_USD: 50.0,
    description_country:
      "Le Sri Lanka est une île située dans l'océan Indien, au sud de l'Inde, connue pour sa biodiversité, ses plages, et son patrimoine bouddhiste. Colombo, la capitale, est une ville portuaire animée, mélangeant influences coloniales et modernes. Le pays a une histoire ancienne, avec des sites archéologiques comme Sigiriya et Anuradhapura, témoignant de sa riche civilisation. Le Sri Lanka est également un important producteur de thé, de caoutchouc, et d'épices. Le pays a traversé une guerre civile longue et douloureuse, mais aujourd'hui, il est en paix et se développe en tant que destination touristique prisée pour ses paysages et sa culture.",
    description_city:
      "Colombo, la capitale du Sri Lanka, est une ville animée et vibrante qui offre une expérience unique aux visiteurs. Située sur la côte ouest du Sri Lanka, Colombo est connue pour ses monuments historiques, tels que le Fort de Colombo et la mosquée de Jami Ul-Alfar. Les touristes peuvent également visiter les marchés traditionnels, les temples bouddhistes et les plages de la ville, entre autres attractions. La ville est célèbre pour son mélange de cultures sri-lankaises et asiatiques.",
    Latitude: 6.9388614,
    Longitude: 79.8542005,
  },
  {
    id: 53,
    City: "Islamabad",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXPYh52ZDA6YRop98qjxipIC2iEXLynWlpg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcw7UmcMNq1iAqV7ERkkVCpxDG3CQg2v_1A&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJaM41eey7Rcm5va7aSLok22b44npOCpEpQ&s",
    Air_Quality_Index: 205,
    Happiness_Score: 3.5,
    Cost_of_Living_Index: 40,
    Region: "Asie",
    Country: "Pakistan",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Caw6KnjOM0z7YXcSP8ZNgteXQSi1dTuWhA&s",
    AvgTemperature: 18.53619356,
    Traffic_enc: 3,
    IATA: ["ISB"],
    Airport_name: ["New Islamabad International Airport"],
    meal_inexpensive_restaurant_USD: 1.34,
    meal_2people_midrange_restaurant: 15.59,
    rent_appartment_month_center_1bedroom: 164.65,
    rent_appartment_month_no_center_1bedroom: 106.92,
    Pays: "Pakistan",
    vol_price_USD: 928.0,
    sejour_price_USD: 1912.0,
    day_price_USD: 91.0,
    description_country:
      "Le Pakistan est un pays d'Asie du Sud, situé entre l'Inde, l'Afghanistan, et l'Iran, connu pour son histoire riche, ses paysages variés, et sa culture diversifiée. Islamabad, la capitale, est une ville moderne et planifiée, tandis que Karachi est la plus grande ville et le centre économique du pays. Le Pakistan a une histoire ancienne, avec des sites archéologiques comme Mohenjo-Daro, qui témoignent de la civilisation de la vallée de l'Indus. Le pays est majoritairement musulman et a été créé en 1947 après la partition de l'Inde britannique. Le Pakistan est un pays en développement, avec une économie basée sur l'agriculture, l'industrie textile, et les exportations de main-d'œuvre.",
    description_city:
      "Islamabad, la capitale du Pakistan, est une ville moderne et paisible qui offre une expérience unique aux visiteurs. Située dans le nord du Pakistan, Islamabad est connue pour ses monuments historiques, tels que le Faisal Mosque et le Pakistan Monument. Les touristes peuvent également visiter le Musée national et les jardins botaniques, entre autres attractions. La ville est célèbre pour son mélange de cultures pakistanaises et islamiques.",
    Latitude: 33.6938118,
    Longitude: 73.0651511,
  },
  {
    id: 54,
    City: "Hanoi",
    image1:
      "https://content.r9cdn.net/rimg/dimg/9f/f9/b80f2b97-city-34211-162bb44cf03.jpg?crop=true&width=1020&height=498",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z1lS86-nMAZeIt6XRV77PV-wxVktT_BVtw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdroJon5YOrrcBkKJYo84P2ZtnUcDwuegZ5A&s",
    Air_Quality_Index: 220,
    Happiness_Score: 3.0,
    Cost_of_Living_Index: 35,
    Region: "Asie",
    Country: "Vietnam",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkH_N6t6Iki9R0dNgiDvc7rNwAwnrPrYppg&s",
    AvgTemperature: 23.7429551287,
    Traffic_enc: 3,
    IATA: ["HAN"],
    Airport_name: ["Noi Bai International Airport"],
    meal_inexpensive_restaurant_USD: 2.02,
    meal_2people_midrange_restaurant: 20.03,
    rent_appartment_month_center_1bedroom: 339.98,
    rent_appartment_month_no_center_1bedroom: 216.88,
    Pays: "Vietnam",
    vol_price_USD: 710.0,
    sejour_price_USD: 1692.0,
    day_price_USD: 27.0,
    description_country:
      "Le Viêt Nam est un pays d'Asie du Sud-Est, bordé par la Chine, le Laos, et le Cambodge, connu pour ses paysages variés, son histoire tumultueuse, et sa cuisine. Hanoï, la capitale, est une ville ancienne avec une riche histoire, tandis que Ho Chi Minh-Ville (anciennement Saïgon) est le centre économique dynamique du pays. Le Viêt Nam a une histoire marquée par des guerres coloniales et de résistance, notamment contre la France et les États-Unis. Aujourd'hui, c'est un pays en pleine croissance, avec une économie diversifiée et un secteur touristique en expansion, attirant des visiteurs pour ses plages, ses temples, et sa culture.",
    description_city:
      "Hanoi, la capitale du Viêt Nam, est une ville historique et culturelle qui offre une expérience unique aux visiteurs. Située dans le nord du Viêt Nam, Hanoi est connue pour ses monuments historiques, tels que le Mausolée de Ho Chi Minh et la Pagode de la Dame Céleste. Les touristes peuvent également visiter le Quartier français, le Lac Hoan Kiem et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures vietnamiennes et françaises.",
    Latitude: 21.0283334,
    Longitude: 105.854041,
  },
  {
    id: 55,
    City: "Perth",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hmDQNdZ-Br-GgTDceRdT88gqh6fMHx_lqQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UDnSP62NRvsOhJD3ZDkkvqBQyrH_yexi2g&s",
    image3:
      "https://a.storyblok.com/f/112937/568x464/fcd14560e0/10-reasons-to-love-perth_568x464.jpg/m/620x0/filters:quality(70)/",
    Air_Quality_Index: 50,
    Happiness_Score: 7.7,
    Cost_of_Living_Index: 110,
    Region: "Australie/Pacifique Sud",
    Country: "Australie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MZg4Ok7Od-p7A6xGG-q20Dqz5SZAK6mG1A&s",
    AvgTemperature: 16.8059033024,
    Traffic_enc: 0,
    IATA: ["JAD", "PER", "PSL"],
    Airport_name: [
      "Perth Jandakot Airport",
      "Perth International Airport",
      "Perth/Scone Airport",
    ],
    meal_inexpensive_restaurant_USD: 16.77,
    meal_2people_midrange_restaurant: 67.06,
    rent_appartment_month_center_1bedroom: 1187.86,
    rent_appartment_month_no_center_1bedroom: 933.42,
    Pays: "Australie",
    vol_price_USD: 1201.0,
    sejour_price_USD: 3908.0,
    day_price_USD: 119.0,
    description_country:
      "L'Australie est un pays-continent situé dans l'hémisphère sud, connu pour sa faune unique, ses vastes déserts, et ses plages magnifiques. Sydney et Melbourne sont les villes les plus célèbres, chacune offrant une qualité de vie élevée et une culture vibrante. L'Australie est aussi reconnue pour son mode de vie décontracté et son amour du sport, notamment le rugby et le cricket. Le pays a une économie prospère, basée sur des ressources naturelles comme les minéraux, ainsi que sur le tourisme. La Grande Barrière de Corail et l'Outback sont des symboles naturels emblématiques de ce pays.",
    description_city:
      "Perth, la ville la plus occidentale de l'Australie, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située sur la côte ouest de l'Australie, Perth est connue pour ses plages, ses parcs et ses jardins. Les touristes peuvent visiter le Kings Park, le Perth Zoo et la rivière Swan, entre autres attractions. La ville est également célèbre pour son mélange de cultures australiennes et britanniques.",
    Latitude: -31.9558933,
    Longitude: 115.8605855,
  },
  {
    id: 56,
    City: "Brisbane",
    image1:
      "https://a.storyblok.com/f/112937/568x464/d506d45dbf/10-reasons-to-love-brisbane_1920x1080.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYl-fX0Pnw78smnBAyXHy1lzAVVULm1N8tw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkqkmimYDCCzdytwXjIjjlzqJqW1YexeFkQ&s",
    Air_Quality_Index: 40,
    Happiness_Score: 7.9,
    Cost_of_Living_Index: 100,
    Region: "Australie/Pacifique Sud",
    Country: "Australie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MZg4Ok7Od-p7A6xGG-q20Dqz5SZAK6mG1A&s",
    AvgTemperature: 20.0402726815,
    Traffic_enc: 0,
    IATA: ["ACF", "BNE"],
    Airport_name: [
      "Brisbane Archerfield Airport",
      "Brisbane International Airport",
    ],
    meal_inexpensive_restaurant_USD: 13.41,
    meal_2people_midrange_restaurant: 67.06,
    rent_appartment_month_center_1bedroom: 1290.34,
    rent_appartment_month_no_center_1bedroom: 1020.53,
    Pays: "Australie",
    vol_price_USD: 1201.0,
    sejour_price_USD: 3908.0,
    day_price_USD: 119.0,
    description_country:
      "L'Australie est un pays-continent situé dans l'hémisphère sud, connu pour sa faune unique, ses vastes déserts, et ses plages magnifiques. Sydney et Melbourne sont les villes les plus célèbres, chacune offrant une qualité de vie élevée et une culture vibrante. L'Australie est aussi reconnue pour son mode de vie décontracté et son amour du sport, notamment le rugby et le cricket. Le pays a une économie prospère, basée sur des ressources naturelles comme les minéraux, ainsi que sur le tourisme. La Grande Barrière de Corail et l'Outback sont des symboles naturels emblématiques de ce pays.",
    description_city:
      "Brisbane, la capitale du Queensland en Australie, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située sur la côte est de l'Australie, Brisbane est connue pour ses plages, ses parcs et ses jardins. Les touristes peuvent visiter le Lone Pine Koala Sanctuary, le Brisbane Riverwalk et la Gallery of Modern Art, entre autres attractions. La ville est également célèbre pour son mélange de cultures australiennes et britanniques.",
    Latitude: -27.4689682,
    Longitude: 153.0234991,
  },
  {
    id: 57,
    City: "Canberra",
    image1:
      "https://static.wixstatic.com/media/745c17_f51b1178ff254bb4af146bba19639b07~mv2.jpg/v1/fill/w_640,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/745c17_f51b1178ff254bb4af146bba19639b07~mv2.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSh2sIIFyyd7gs5aOyMBlworEVYB52sS8lcQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikRTvz3H2rFbZigcm_-LAz3KSiDzimWX-iA&s",
    Air_Quality_Index: 35,
    Happiness_Score: 8.0,
    Cost_of_Living_Index: 95,
    Region: "Australie/Pacifique Sud",
    Country: "Australie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MZg4Ok7Od-p7A6xGG-q20Dqz5SZAK6mG1A&s",
    AvgTemperature: 13.0998273257,
    Traffic_enc: 0,
    IATA: ["CBR"],
    Airport_name: ["Canberra International Airport"],
    meal_inexpensive_restaurant_USD: 15.42,
    meal_2people_midrange_restaurant: 73.77,
    rent_appartment_month_center_1bedroom: 1371.43,
    rent_appartment_month_no_center_1bedroom: 1141.94,
    Pays: "Australie",
    vol_price_USD: 1201.0,
    sejour_price_USD: 3908.0,
    day_price_USD: 119.0,
    description_country:
      "L'Australie est un pays-continent situé dans l'hémisphère sud, connu pour sa faune unique, ses vastes déserts, et ses plages magnifiques. Sydney et Melbourne sont les villes les plus célèbres, chacune offrant une qualité de vie élevée et une culture vibrante. L'Australie est aussi reconnue pour son mode de vie décontracté et son amour du sport, notamment le rugby et le cricket. Le pays a une économie prospère, basée sur des ressources naturelles comme les minéraux, ainsi que sur le tourisme. La Grande Barrière de Corail et l'Outback sont des symboles naturels emblématiques de ce pays.",
    description_city:
      "Canberra, la capitale de l'Australie, est une ville moderne et paisible qui offre une expérience unique aux visiteurs. Située dans le centre de l'Australie, Canberra est connue pour ses monuments historiques, tels que le Parlement australien et la Guerre Memorial. Les touristes peuvent également visiter les musées nationaux, les jardins botaniques et le lac Burley Griffin, entre autres attractions. La ville est célèbre pour son mélange de cultures australiennes et britanniques.",
    Latitude: -35.2975906,
    Longitude: 149.1012676,
  },
  {
    id: 58,
    City: "Hamilton",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GHesetwIaRBJXSbob4VkCLVHa3hXMX3HcQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxFDtI7xo2fStwE99plNcxuJISQzQHhlDPw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWOfXcJvrcnTMw1oeTm3Duk6RmI92yCANCg&s",
    Air_Quality_Index: 35,
    Happiness_Score: 8.2,
    Cost_of_Living_Index: 60,
    Region: "Amérique du Sud/Centrale et Caraïbes",
    Country: "Bermude",
    image_country:
      "https://www.costakreuzfahrten.ch/content/dam/costa/costa-magazine/articles-magazine/islands/bermuda-island/bermuda_m.jpg.image.694.390.low.jpg",
    AvgTemperature: 19.4284866873,
    Traffic_enc: 1,
    IATA: ["BDA", "HAB", "HAO", "HLT", "HLZ", "YHM"],
    Airport_name: [
      "L.F. Wade International Airport",
      "Marion County Rankin Fite Airport",
      "Butler Co Regional Airport - Hogan Field",
      "Hamilton Airport",
      "Hamilton International Airport",
      "John C. Munro Hamilton International Airport",
    ],
    meal_inexpensive_restaurant_USD: 29.0,
    meal_2people_midrange_restaurant: 150.0,
    rent_appartment_month_center_1bedroom: 3250.0,
    rent_appartment_month_no_center_1bedroom: 2050.0,
    Pays: "Bermude",
    vol_price_USD: 764.0,
    sejour_price_USD: 2909.0,
    day_price_USD: 230.0,
    description_country:
      "Les Bermudes sont un territoire britannique d'outre-mer situé dans l'océan Atlantique Nord, composé d'un archipel de 138 îles, dont la plus grande est l'île de Grande Bermude. Hamilton, la capitale, est une petite ville portuaire charmante, connue pour ses bâtiments aux façades pastel, ses boutiques, et ses musées. Les Bermudes sont célèbres pour leurs plages de sable rose, leurs eaux cristallines, et leurs récifs coralliens, ce qui en fait une destination prisée pour les amateurs de plongée sous-marine et de sports nautiques. L'archipel est également associé au mystérieux Triangle des Bermudes, une zone légendaire où plusieurs navires et avions auraient disparu de manière inexpliquée. Économiquement, les Bermudes sont un centre financier international, avec une forte présence dans les secteurs de la réassurance et des services financiers. En plus du tourisme, l'économie est soutenue par ces industries, malgré la petite taille et l'isolement géographique du territoire. Les Bermudes ont une culture unique, mêlant influences britanniques, américaines, et caribéennes. Les traditions locales incluent le cricket, les régates, et les célébrations du 'Bermuda Day', qui marquent le début de l'été. Les Bermudes sont également connues pour leur architecture coloniale distincte, avec des toits en calcaire blanc conçus pour recueillir l'eau de pluie, une ressource précieuse sur ces îles.",
    description_city:
      "Hamilton, une ville située sur l'île du Nord de la Nouvelle-Zélande, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située sur la rivière Waikato, Hamilton est connue pour ses parcs et ses jardins, ainsi que ses plats délicieux de la cuisine néo-zélandaise. Les touristes peuvent visiter le Hamilton Gardens, le Waikato Museum et la rivière Waikato, entre autres attractions. La ville est également célèbre pour son mélange de cultures maories et britanniques.",
    Latitude: 43.2560802,
    Longitude: -79.8728583,
  },
  {
    id: 59,
    City: "Denver",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBH6lEljOnE6kscn4RM214ihEzGolwXBSv3Q&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQEhpGAcR0MR_SPAqI0s5dHZ98Q44-O03MQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZsktOseFaX-pn2ZXtYaUzDAcds1mSJC-6A&s",
    Air_Quality_Index: 50,
    Happiness_Score: 7.5,
    Cost_of_Living_Index: 95,
    Region: "Amerique du nord",
    Country: "USA",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsrtYUbzOCbHzMztn-aY5_BL3stszlNOjAQ&s",
    AvgTemperature: 9.7162679139,
    Traffic_enc: 1,
    IATA: ["APA", "BJC", "DEN"],
    Airport_name: [
      "Centennial Airport",
      "Rocky Mountain Metropolitan Airport",
      "Denver International Airport",
    ],
    meal_inexpensive_restaurant_USD: 18.0,
    meal_2people_midrange_restaurant: 72.5,
    rent_appartment_month_center_1bedroom: 1893.0,
    rent_appartment_month_no_center_1bedroom: 1601.38,
    Pays: "USA",
    vol_price_USD: 611.0,
    sejour_price_USD: 1538.0,
    day_price_USD: 106.0,
    description_country:
      "Les États-Unis sont une république fédérale composée de 50 États, chacun ayant une culture et des lois distinctes. C’est l’un des pays les plus influents du monde, avec une économie diversifiée qui inclut des industries de pointe comme la technologie, la finance, et les divertissements. Son paysage est tout aussi diversifié, allant des montagnes rocheuses aux vastes plaines du Midwest, en passant par les déserts du Sud-Ouest. Le pays est également marqué par une riche histoire d'immigration qui a forgé une société multiculturelle. La capitale, Washington D.C., abrite des institutions politiques clés telles que la Maison Blanche, tandis que New York est un centre financier mondial.",
    description_city:
      "Denver, la capitale du Colorado aux États-Unis, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située dans les Montagnes Rocheuses, Denver est connue pour ses monuments historiques, tels que le Capitole de l'État du Colorado et le History Colorado Center. Les touristes peuvent également visiter les parcs et les jardins, ainsi que les brasseries et les restaurants de la ville. La ville est célèbre pour son mélange de cultures américaines et occidentales.",
    Latitude: 39.7392364,
    Longitude: -104.984862,
  },
  {
    id: 60,
    City: "Francfort",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHNCNC-m4JSjl9-mt1BFbVjzfQ17IkYXaMQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZPZUmelmmandS4dvS80gT8OZGduR95TySw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03m1RXFz6-uY_4i4B7vO9RPoxK-OTzL0TwQ&s",
    Air_Quality_Index: 60,
    Happiness_Score: 7.3,
    Cost_of_Living_Index: 90,
    Region: "Europe",
    Country: "Allemagne",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HlL7CnbnQpFeqg41NJhv0GcbTy2dTN3NtQ&s",
    AvgTemperature: -25.3715479261,
    Traffic_enc: 1,
    IATA: [null],
    Airport_name: [null],
    meal_inexpensive_restaurant_USD: 14.02,
    meal_2people_midrange_restaurant: 59.73,
    rent_appartment_month_center_1bedroom: 1152.38,
    rent_appartment_month_no_center_1bedroom: 894.37,
    Pays: "Allemagne",
    vol_price_USD: 109.0,
    sejour_price_USD: 948.0,
    day_price_USD: 98.0,
    description_country:
      "L'Allemagne est un pays d'Europe centrale, connu pour son économie puissante, son héritage culturel, et son histoire complexe. Berlin, la capitale, est une ville dynamique avec une scène artistique florissante, des musées de renommée mondiale, et une histoire marquée par la guerre froide. L'Allemagne a joué un rôle central dans l'histoire européenne, de l'Empire romain germanique à la Seconde Guerre mondiale, et elle est aujourd'hui un leader de l'Union européenne. Le pays est également réputé pour ses avancées technologiques, ses voitures de luxe, et sa musique classique, avec des compositeurs comme Beethoven et Bach. La culture allemande est riche en traditions, allant de la fête de la bière (Oktoberfest) aux marchés de Noël.",
    description_city:
      "Frankfurt, une ville située en Allemagne, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située sur la rivière Main, Frankfurt est connue pour ses monuments historiques, tels que la Römerberg et la cathédrale de Frankfurt. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures allemandes et européennes.",
    Latitude: 50.1106444,
    Longitude: 8.6820917,
  },
  {
    id: 61,
    City: "Geneve",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFOPhuqJpgzfJhDAyVtUQJfQod5g3o06ilQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMqB6vAYLZ5kg1gSsBxczvGZXpqh55ulEgw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggozLEPoPo7QwVXzCdzjuURb0moIK6BbG3w&s",
    Air_Quality_Index: 35,
    Happiness_Score: 8.1,
    Cost_of_Living_Index: 120,
    Region: "Europe",
    Country: "Suisse",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0dG_zFzUgEctFf7j_gb_DK-cxI_57Z4evA&s",
    AvgTemperature: 10.7674952634,
    Traffic_enc: 0,
    IATA: ["GVA"],
    Airport_name: ["Geneva Cointrin International Airport"],
    meal_inexpensive_restaurant_USD: 26.42,
    meal_2people_midrange_restaurant: 126.81,
    rent_appartment_month_center_1bedroom: 2098.13,
    rent_appartment_month_no_center_1bedroom: 1691.44,
    Pays: "Suisse",
    vol_price_USD: 93.0,
    sejour_price_USD: 1281.0,
    day_price_USD: 174.0,
    description_country:
      "La Suisse est un pays situé au cœur de l'Europe, connu pour ses paysages alpins majestueux, ses banques, et son horlogerie de précision. Berne, la capitale, est une ville historique avec un centre médiéval bien préservé, classé au patrimoine mondial de l'UNESCO. La Suisse est également célèbre pour ses villes cosmopolites comme Zurich et Genève, où se trouvent de nombreuses organisations internationales, y compris les Nations Unies et la Croix-Rouge. Le pays est reconnu pour sa neutralité politique, une tradition qui remonte à plusieurs siècles, et pour son système de démocratie directe. L'économie suisse est l'une des plus développées au monde, avec des secteurs clés comme la finance, l'industrie pharmaceutique, et le tourisme. La culture suisse est riche et diversifiée, avec quatre langues nationales (allemand, français, italien et romanche) et une forte tradition de respect pour la nature.",
    description_city:
      "Genève, une ville située en Suisse, est une ville moderne et internationale qui offre une expérience unique aux visiteurs. Située sur le lac Léman, Genève est connue pour ses monuments historiques, tels que le Palais des Nations et la cathédrale de Saint-Pierre. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures suisses et internationales.",
    Latitude: 46.2017559,
    Longitude: 6.1466014,
  },
  {
    id: 62,
    City: "Erevan",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvkiTL-9eZolvIXJodd9FekJQ52OHGOzNeA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KojVlkPY8NFoXPn60dpOUtn91sVDmXzh0A&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4SvQq4Z6QdFdl3bIT2FRIZbm_G2JNZVAhQ&s",
    Air_Quality_Index: 85,
    Happiness_Score: 5.8,
    Cost_of_Living_Index: 50,
    Region: "Europe",
    Country: "Russie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyt4XAcWGmZcAzb5x56nQkbzh4EXpkib4NA&s",
    AvgTemperature: 12.0538851002,
    Traffic_enc: 1,
    IATA: ["EVN"],
    Airport_name: ["Zvartnots International Airport"],
    meal_inexpensive_restaurant_USD: 7.5,
    meal_2people_midrange_restaurant: 37.52,
    rent_appartment_month_center_1bedroom: 965.5,
    rent_appartment_month_no_center_1bedroom: 650.54,
    Pays: "Russie",
    vol_price_USD: 207.0,
    sejour_price_USD: 1580.0,
    day_price_USD: 80.0,
    description_country:
      "La Russie est le plus grand pays du monde par sa superficie, s'étendant de l'Europe de l'Est à l'Asie du Nord. C’est une fédération composée de multiples ethnies et cultures, un héritage de l'histoire complexe de l'Empire russe et de l'Union soviétique. Moscou, la capitale, est un centre politique, économique et culturel, abritant des sites emblématiques comme le Kremlin et la Place Rouge. La Russie est connue pour ses contributions majeures à la littérature, la musique, et les arts, avec des figures comme Tolstoï, Tchaïkovski, et Kandinsky. Le pays possède également d'immenses ressources naturelles, notamment le gaz et le pétrole.",
    description_city:
      "Yerevan, la capitale de l'Arménie, est une ville historique et culturelle qui offre une expérience unique aux visiteurs. Située dans le Caucase, Yerevan est connue pour ses monuments historiques, tels que la Place de la République et la cathédrale d'Étchmiadzin. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures arméniennes et caucasiennes.",
    Latitude: 40.1777112,
    Longitude: 44.5126233,
  },
  {
    id: 63,
    City: "Zurich",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSG0mAVWtMCVMmY8mOfe7WSUaEGlzEAib1fg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDUfC9IV7dbNR5cn_PDQkehvj3wf2bof0Jw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT12jOEWvODj6xF_C7ly9Q2pr1vGlfbrqlsqg&s",
    Air_Quality_Index: 40,
    Happiness_Score: 8.2,
    Cost_of_Living_Index: 130,
    Region: "Europe",
    Country: "Suisse",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0dG_zFzUgEctFf7j_gb_DK-cxI_57Z4evA&s",
    AvgTemperature: 9.4857903446,
    Traffic_enc: 0,
    IATA: ["ZRH"],
    Airport_name: ["Z\u00fcrich Airport"],
    meal_inexpensive_restaurant_USD: 26.42,
    meal_2people_midrange_restaurant: 126.81,
    rent_appartment_month_center_1bedroom: 2037.85,
    rent_appartment_month_no_center_1bedroom: 1605.72,
    Pays: "Suisse",
    vol_price_USD: 93.0,
    sejour_price_USD: 1281.0,
    day_price_USD: 174.0,
    description_country:
      "La Suisse est un pays situé au cœur de l'Europe, connu pour ses paysages alpins majestueux, ses banques, et son horlogerie de précision. Berne, la capitale, est une ville historique avec un centre médiéval bien préservé, classé au patrimoine mondial de l'UNESCO. La Suisse est également célèbre pour ses villes cosmopolites comme Zurich et Genève, où se trouvent de nombreuses organisations internationales, y compris les Nations Unies et la Croix-Rouge. Le pays est reconnu pour sa neutralité politique, une tradition qui remonte à plusieurs siècles, et pour son système de démocratie directe. L'économie suisse est l'une des plus développées au monde, avec des secteurs clés comme la finance, l'industrie pharmaceutique, et le tourisme. La culture suisse est riche et diversifiée, avec quatre langues nationales (allemand, français, italien et romanche) et une forte tradition de respect pour la nature.",
    description_city:
      "Zurich, une ville située en Suisse, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située sur le lac de Zurich, Zurich est connue pour ses monuments historiques, tels que la cathédrale de Grossmünster et le château de Zurich. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures suisses et européennes.",
    Latitude: 47.3744489,
    Longitude: 8.5410422,
  },
  {
    id: 64,
    City: "Boston",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsv9Vz5DdTq3XhivI81rlbMh27LtFM9k9tw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaEnLWBOzxQcTq6GpZo_9HVqKFg1FYAaYVQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVOsgHle7h6eURXsKwfJnW2iDFle447BwXg&s",
    Air_Quality_Index: 50,
    Happiness_Score: 7.1,
    Cost_of_Living_Index: 110,
    Region: "Amerique du Nord",
    Country: "USA",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsrtYUbzOCbHzMztn-aY5_BL3stszlNOjAQ&s",
    AvgTemperature: 10.7976974276,
    Traffic_enc: 2,
    IATA: ["BOS"],
    Airport_name: ["General Edward Lawrence Logan International Airport"],
    meal_inexpensive_restaurant_USD: 20.0,
    meal_2people_midrange_restaurant: 100.0,
    rent_appartment_month_center_1bedroom: 2691.67,
    rent_appartment_month_no_center_1bedroom: 1959.38,
    Pays: "USA",
    vol_price_USD: 611.0,
    sejour_price_USD: 1538.0,
    day_price_USD: 106.0,
    description_country:
      "Les États-Unis sont une république fédérale composée de 50 États, chacun ayant une culture et des lois distinctes. C’est l’un des pays les plus influents du monde, avec une économie diversifiée qui inclut des industries de pointe comme la technologie, la finance, et les divertissements. Son paysage est tout aussi diversifié, allant des montagnes rocheuses aux vastes plaines du Midwest, en passant par les déserts du Sud-Ouest. Le pays est également marqué par une riche histoire d'immigration qui a forgé une société multiculturelle. La capitale, Washington D.C., abrite des institutions politiques clés telles que la Maison Blanche, tandis que New York est un centre financier mondial.",
    description_city:
      "Boston, une ville située dans le Massachusetts aux États-Unis, est une ville historique et culturelle qui offre une expérience unique aux visiteurs. Située sur la côte est des États-Unis, Boston est connue pour ses monuments historiques, tels que le Freedom Trail et la Old State House. Les touristes peuvent également visiter les musées, les galeries d'art et les universités, entre autres attractions. La ville est célèbre pour son mélange de cultures américaines et britanniques.",
    Latitude: 42.3554334,
    Longitude: -71.060511,
  },
  {
    id: 65,
    City: "Madrid",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx56co3_68uZiTHlCZH3FnAknxghRPTJgLGw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZL_UUc2fSqRyZwPT4-MB86gBe893le8awg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSADOLpVdw_RdRrwfcIpvL-9KyAHSuLQFNQ&s",
    Air_Quality_Index: 70,
    Happiness_Score: 7.0,
    Cost_of_Living_Index: 85,
    Region: "Europe",
    Country: "Espagne",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cHRuIlj2PDzAOYT1wSZxwFRS_vmpX5Q5Kw&s",
    AvgTemperature: 14.6891862724,
    Traffic_enc: 2,
    IATA: ["ECV", "MAD", "TOJ"],
    Airport_name: [
      "Cuatro Vientos Airport",
      "Adolfo Su\u00e1rez Madrid\u2013Barajas Airport",
      "Torrej\u00f3n Airport",
    ],
    meal_inexpensive_restaurant_USD: 12.46,
    meal_2people_midrange_restaurant: 51.93,
    rent_appartment_month_center_1bedroom: 1041.06,
    rent_appartment_month_no_center_1bedroom: 827.49,
    Pays: "Espagne",
    vol_price_USD: 71.0,
    sejour_price_USD: 453.0,
    day_price_USD: 78.0,
    description_country:
      "L'Espagne est un pays du sud de l'Europe, connu pour sa culture vibrante, son histoire riche, et ses paysages variés allant des plages de la Costa del Sol aux montagnes des Pyrénées. Madrid, la capitale, est une ville dynamique et cosmopolite, tandis que Barcelone est célèbre pour son architecture unique, notamment les œuvres de Gaudí comme la Sagrada Família. L'Espagne est également réputée pour sa cuisine, avec des plats emblématiques comme la paella, les tapas, et le jamón ibérico. Le pays a une histoire complexe, marquée par des périodes d'unité et de division, comme la Reconquista et la guerre civile espagnole.",
    description_city:
      "Madrid, la capitale de l'Espagne, est une ville animée et vibrante qui offre une expérience unique aux visiteurs. Située dans le centre de l'Espagne, Madrid est connue pour ses monuments historiques, tels que le Palais royal et la Plaza Mayor. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures espagnoles et latines.",
    Latitude: 40.4167047,
    Longitude: -3.7035825,
  },
  {
    id: 66,
    City: "Nairobi",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jNBWjGYm0rPDN6m7XQmQJ2qjsbKyIZl-jQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3ZxnGTdXHwcjrLREfjAAqp-qHCifETyhEQ&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkq3vf7YcTUYf7YYPWPmLGxtlJxFLcNqsLLg&s",
    Air_Quality_Index: 95,
    Happiness_Score: 5.0,
    Cost_of_Living_Index: 50,
    Region: "Afrique",
    Country: "Kenya",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtksrslGZGr5pZi-1gPw_sQSaEjo7mpoKxiA&s",
    AvgTemperature: -4.7488550136,
    Traffic_enc: 2,
    IATA: ["NBO", "WIL"],
    Airport_name: [
      "Jomo Kenyatta International Airport",
      "Nairobi Wilson Airport",
    ],
    meal_inexpensive_restaurant_USD: 4.08,
    meal_2people_midrange_restaurant: 32.67,
    rent_appartment_month_center_1bedroom: 406.29,
    rent_appartment_month_no_center_1bedroom: 184.66,
    Pays: "Kenya",
    vol_price_USD: 546.0,
    sejour_price_USD: 1438.0,
    day_price_USD: 63.0,
    description_country:
      "Le Kenya est un pays situé en Afrique de l'Est, réputé pour ses paysages époustouflants, sa faune sauvage, et sa riche diversité culturelle. Nairobi, la capitale, est une métropole dynamique, souvent appelée la 'Silicon Savannah' en raison de son secteur technologique en pleine expansion. Le Kenya est célèbre pour ses parcs nationaux et ses réserves, comme le Masai Mara, où les visiteurs peuvent observer la grande migration des gnous et d'autres animaux sauvages emblématiques d'Afrique. Le pays a une histoire riche, avec des traces d'une des plus anciennes civilisations humaines à la vallée du Rift. Le Kenya est également le berceau de la course à pied de fond, produisant certains des meilleurs athlètes au monde. L'économie kenyane est diversifiée, avec des secteurs clés comme l'agriculture, le tourisme, et les services financiers. La culture kenyane est un mélange de traditions autochtones, influencée par les diverses communautés ethniques qui composent le pays, et par son passé colonial britannique.",
    description_city:
      "Nairobi, la capitale du Kenya, est une ville animée et vibrante qui offre une expérience unique aux visiteurs. Située dans l'est de l'Afrique, Nairobi est connue pour ses monuments historiques, tels que le Musée national et la cathédrale de Nairobi. Les touristes peuvent également visiter les parcs nationaux, les réserves de faune et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures kényanes et africaines.",
    Latitude: -1.30261485,
    Longitude: 36.8288420181,
  },
  {
    id: 67,
    City: "Ottawa",
    image1:
      "https://cdn.authentik.com/canada/images/section/images_list/5-ottawa-capitale-canada_5550.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2yG9M94_Fjkda3WzhddgbI7CMGLfllV0BA&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJFn_yGwzjxU-Q-C10nfZDM3LGDvvRmlEQg&s",
    Air_Quality_Index: 40,
    Happiness_Score: 7.5,
    Cost_of_Living_Index: 90,
    Region: "Amerique du Nord",
    Country: "Canada",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WGPAHtsiExtMl9ok4JDZ-cglEIY01dhh1Q&s",
    AvgTemperature: 6.6349340468,
    Traffic_enc: 1,
    IATA: ["YOW", "YRO"],
    Airport_name: [
      "Ottawa Macdonald-Cartier International Airport",
      "Ottawa / Rockcliffe Airport",
    ],
    meal_inexpensive_restaurant_USD: 18.61,
    meal_2people_midrange_restaurant: 61.42,
    rent_appartment_month_center_1bedroom: 1271.09,
    rent_appartment_month_no_center_1bedroom: 1005.11,
    Pays: "Canada",
    vol_price_USD: 764.0,
    sejour_price_USD: 1998.0,
    day_price_USD: 102.0,
    description_country:
      "Le Canada est le deuxième plus grand pays du monde par sa superficie, situé en Amérique du Nord. C’est une fédération composée de dix provinces et trois territoires, avec une diversité géographique impressionnante, allant des montagnes Rocheuses aux plaines de l'Alberta, en passant par les forêts boréales. Le Canada est bilingue, avec l'anglais et le français comme langues officielles, reflétant son héritage britannique et français. Ottawa est la capitale, tandis que Toronto, Montréal et Vancouver sont des centres urbains majeurs. Le pays est reconnu pour sa qualité de vie élevée, son système de santé universel, et son engagement envers les droits humains.",
    description_city:
      "Ottawa, la capitale du Canada, est une ville moderne et paisible qui offre une expérience unique aux visiteurs. Située sur la rivière des Outaouais, Ottawa est connue pour ses monuments historiques, tels que le Parlement du Canada et la Rideau Canal. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures canadiennes et britanniques.",
    Latitude: 45.4208777,
    Longitude: -75.6901106,
  },
  {
    id: 68,
    City: "Vancouver",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTII7iuAPFTflkr79hpnevRJblZkmccUVkurg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlaSjf1dAGjopBjMfhuFrRPw_TSdq7Tl9Cw&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_AWabXrYrPhZN6jh65B1MOlSUE9JNl1q_w&s",
    Air_Quality_Index: 35,
    Happiness_Score: 7.6,
    Cost_of_Living_Index: 110,
    Region: "Amerique du Nord",
    Country: "Canada",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WGPAHtsiExtMl9ok4JDZ-cglEIY01dhh1Q&s",
    AvgTemperature: 10.2093445368,
    Traffic_enc: 1,
    IATA: ["YDT", "YVR"],
    Airport_name: ["Boundary Bay Airport", "Vancouver International Airport"],
    meal_inexpensive_restaurant_USD: 18.24,
    meal_2people_midrange_restaurant: 85.62,
    rent_appartment_month_center_1bedroom: 1804.36,
    rent_appartment_month_no_center_1bedroom: 1509.65,
    Pays: "Canada",
    vol_price_USD: 764.0,
    sejour_price_USD: 1998.0,
    day_price_USD: 102.0,
    description_country:
      "Le Canada est le deuxième plus grand pays du monde par sa superficie, situé en Amérique du Nord. C’est une fédération composée de dix provinces et trois territoires, avec une diversité géographique impressionnante, allant des montagnes Rocheuses aux plaines de l'Alberta, en passant par les forêts boréales. Le Canada est bilingue, avec l'anglais et le français comme langues officielles, reflétant son héritage britannique et français. Ottawa est la capitale, tandis que Toronto, Montréal et Vancouver sont des centres urbains majeurs. Le pays est reconnu pour sa qualité de vie élevée, son système de santé universel, et son engagement envers les droits humains.",
    description_city:
      "Vancouver, une ville située dans la Colombie-Britannique au Canada, est une ville moderne et dynamique qui offre une expérience unique aux visiteurs. Située sur la côte ouest du Canada, Vancouver est connue pour ses monuments historiques, tels que le Stanley Park et la Granville Island. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures canadiennes et asiatiques.",
    Latitude: 49.2608724,
    Longitude: -123.113952,
  },
  {
    id: 69,
    City: "Zagreb",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6a9q5PA2NB3fLWkKA9gj-es57s14u06iayw&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCeeZq3sqFHwNC5Mbq4xi6knz2Y0xKUm8Rg&s",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGD72w_2uxjaSJ9Oanb_nIK4jIucU_5_cZmg&s",
    Air_Quality_Index: 75,
    Happiness_Score: 6.9,
    Cost_of_Living_Index: 65,
    Region: "Europe",
    Country: "Croatie",
    image_country:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_WN8qd6zz2fohwJds5qtNFRQCS-H2kYvOA&s",
    AvgTemperature: 8.2936739222,
    Traffic_enc: 1,
    IATA: ["ZAG"],
    Airport_name: ["Zagreb Airport"],
    meal_inexpensive_restaurant_USD: 9.63,
    meal_2people_midrange_restaurant: 46.0,
    rent_appartment_month_center_1bedroom: 574.94,
    rent_appartment_month_no_center_1bedroom: 418.29,
    Pays: "Croatie",
    vol_price_USD: 158.0,
    sejour_price_USD: 467.0,
    day_price_USD: 70.0,
    description_country:
      "La Croatie est un pays d'Europe du Sud-Est, situé sur la côte adriatique, connu pour ses plages pittoresques, son patrimoine historique, et sa culture vivante. Zagreb, la capitale, est une ville charmante avec une architecture médiévale, des musées, et une scène artistique florissante. La Croatie est particulièrement célèbre pour sa côte dalmate, parsemée d'îles et de villes historiques comme Dubrovnik, souvent appelée 'la perle de l'Adriatique', qui est inscrite au patrimoine mondial de l'UNESCO. Le pays a une histoire complexe, ayant fait partie de divers empires, dont l'Empire romain, l'Empire austro-hongrois, et la Yougoslavie, avant de devenir indépendant en 1991. L'économie croate repose en grande partie sur le tourisme, mais aussi sur l'industrie, l'agriculture, et les services. La culture croate est riche et diversifiée, avec des influences méditerranéennes, slaves, et austro-hongroises, visibles dans la cuisine, la musique, et les traditions locales.",
    description_city:
      "Zagreb, la capitale de la Croatie, est une ville historique et culturelle qui offre une expérience unique aux visiteurs. Située dans le centre de la Croatie, Zagreb est connue pour ses monuments historiques, tels que la cathédrale de Zagreb et le château de Zagreb. Les touristes peuvent également visiter les musées, les galeries d'art et les marchés traditionnels, entre autres attractions. La ville est célèbre pour son mélange de cultures croates et européennes.",
    Latitude: 45.8130967,
    Longitude: 15.9772795,
  },
];

export default destinations;
