import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import header1 from "@i/header1.jpg";
import header2 from "@i/header2.jpg";
import header3 from "@i/header3.jpg";
import header4 from "@i/header4.jpg";
import bestDayIcon from "@i/img1.jpg"
import  youtube from "@i/youtube.png"
import qr from "@i/qrkod.svg"

const TourContext = createContext();

const TourProvider = ({ children }) => {
  const bestDayTours  = [
    { 
      id: 1,
      title: "Dubay,  BAA",
      description: 'Dubayning eng mashhur turistlik manzillariga sayohat',
        places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Birlashgan Arab Amirliklari, Dubai",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25",
      ],  
      price: "550 $",
      image: "/src/assets/Images/header1.jpg",
    },
    {
      id: 2,
      title: "Istanbul – Turistlar Uchun Tavsiya Etiladigan Manzillar va Tajribalar",
      description: "Istanbul, Turkiyaning eng katta shahri va tarixiy markazi bo‘lib, o‘zining boy madaniyati, tarixiy obidalari, zamonaviylik va an’anaviylikning uyg‘unligi bilan sayohatchilarni o‘ziga jalb etadi. Istanbulda sayohat qilish, Sharq va G‘arbni, musulmon va xristian madaniyatlarini birlashtirgan noyob tajribalarni taqdim etadi.",
      places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Turkiya, Istanbul",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25" ,
      ], 
      price: "96 900 ₽",
      image: header2,
    },
    {
      id: 3,
      title: "Yaponiya – Sayohatchilar Uchun Tavsiya Etiladigan Manzillar va Tajribalar",
      description: "Yaponiya o‘zining boy tarixi, zamonaviy texnologiyasi, go‘zal tabiati va madaniyati bilan mashhur. Sayohatchilar bu mamlakatda an’anaviy va zamonaviylikning uyg‘unlashgan nuqtalarini ko‘rishlari mumkin. Quyida Yaponiya bo‘ylab turistlar uchun eng mashhur joylar va tajribalar keltirilgan.",
      places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Yaponiya",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25",
      ], 
      price: "96 900 ₽",
      image: header3,
    },
    { 
      id: 4,
      title: "Hindiston – Turistlar Uchun Tavsiya Etiladigan Manzillar va Tajribalar",
      description: "Hindiston, dunyoning eng rang-barang va madaniy jihatdan boy mamlakatlaridan biridir. Bu yerda har bir mintaqa o‘ziga xos tarix, madaniyat, diniy yodgorliklar va tabiiy go‘zalliklarni taqdim etadi. Hindistonda sayohat qilish, qadimiy an’analardan zamonaviy shaharlargacha bo‘lgan keng qamrovli tajribalarni o‘z ichiga oladi.",
      places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Hindiston, Mumbai",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25",
      ], 
      price: "96 900 ₽",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Taj_Mahal%2C_Iconic_view%2C_Agra%2C_India.jpg",
    },
    {
      id: 5,
      title: " Parij – Romantik Shaharning Go‘zalligi",
      description: "Fransiyaning poytaxti Parij, dunyo bo‘ylab eng mashhur sayohat manzillaridan biri bo‘lib, san'at, moda, va romantikani o‘zida mujassamlashtiradi.",
      places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Fransiya, Parij shahri",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25",
      ], 
      price: "96 900 ₽",
      image: "https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2021/08/25162424/paris-vue.jpg",
    },
    {
      id: 6,
      title: "Koreyada Turistlar Uchun Tavsiya Etiladigan Manzillar va Tajribalar",
      description: "Janubiy Koreya o‘zining boy tarixi, zamonaviy shaharlar, go‘zal tabiati va o‘ziga xos madaniyati bilan mashhur. Koreya sayohat uchun ajoyib joy bo‘lib, turli xil tajribalar taqdim etadi. Quyida Koreyada turistlar uchun eng mashhur joylar va faoliyatlar keltirilgan.",
      places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Koreya davlati",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25",
      ], 
      price: "96 900 ₽",
      image: "/src/assets/Images/korea1.jpg",
    },
    {
      id: 7,
      title: "Misrda Turistlar Uchun Tavsiya Etiladigan Manzillar va Tajribalar",
      description: "Misr dunyoning eng qadimiy sivilizatsiyalaridan biri bo‘lib, tarixiy yodgorliklari, noyob madaniyati va tabiiy go‘zalliklari bilan sayyohlarni jalb etadi. Quyida Misrga sayohat qilishni rejalashtirayotgan turistlar uchun asosiy manzillar va faoliyatlar keltirilgan.",
      places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Misr davlati",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25",
      ], 
      price: "96 900 ₽",
      image: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0636c382-ffa0-4979-941c-7bddb13cb190.jpg?crop=1320%2C880%2C440%2C0",
    },
    {
      id: 8,
      title: "Xitoy",
      description: "Xitoyda Turistlar Uchun Tavsiya Etiladigan Manzillar va TajribalarXitoy dunyoning eng qadimiy sivilizatsiyalaridan biri bo‘lib, o‘zining boy tarixi, madaniyati va zamonaviy shaharlar bilan mashhur. Quyida Xitoyga sayohat qilishni rejalashtirayotgan turistlar uchun eng mashhur joylar va tajribalar keltirilgan.",
      places: [
        { id: 1, name: 'Burj Khalifa', description: 'Dunyoning eng baland binosi.', img: "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg" },
        { id: 2, name: 'Dubai Mall', description: 'Dunyoning eng katta savdo markazi.', img: "https://media.cnn.com/api/v1/images/stellar/prod/240605131819-dubai-mall-expansion-2024-1.jpg?q=w_1110,c_fill/f_webp" },
        { id: 3, name: 'Palm Jumeirah', description: 'Palm shaklidagi sun’iy orol.', img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/10/9c/3e.jpg" },
        { id: 4, name: 'Dubai Marina', description: 'Zamonaviy hudud, restoranlar va do\'konlar bilan to\'la.', img: "https://vacationerdubai.com/wp-content/uploads/2023/04/iStock-924212018-1-1.jpg" },
        { id: 5, name: 'Burj Al Arab', description: 'Dunyoning eng hashamatli mehmonxonasi.', img: header1  },
        { id: 6, name: 'Jumeirah Beach', description: 'Oq qumli plyaj va faoliyatlar.', img: "https://www.sovereign.com/-/media/bynder/sovereign-properties/united-arab-emirates/dubai/ja-ocean-view/views/ja-ocean-view-2023-property-view-001-119485-hybris.jpg" },
        { id: 7, name: 'Dubai Frame', description: 'Shaharni ikki qismga ajratadigan arxitektura.', img: "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg" },
        { id: 8, name: 'Al Fahidi tarixiy tuman', description: 'Dubay tarixiga oid joylar.', img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/31/ea/al-fahidi-historical.jpg" },
        { id: 9, name: 'Desert Safari', description: 'Sahroda safari.', img: "https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-master-catalog/default/dw5c573345/images/large/camel-ride-DESERT-April23-1232x1232.jpg" },
        { id: 10, name: 'Ski Dubai', description: 'Ichki qorli markaz.', img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60608-Ski-Dubai.jpg" },
      ],
      location: "Xitoy davlati",
      difficulty: "Yangi madaniyatlar, Tabiiy go'zalliklar, Til ko'nikmalari, Shaxsiy rivojlanish",
      date: [
        "05.01.2025 — 10.01.25",
      ], 
      price: "96 900 ₽",
      image: "/src/assets/Images/china1.png",
    },
  ];
  
  const tourData = [
    {
      id: 1,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
    {
      id: 2,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
    {
      id: 3,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
    {
      id: 4,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
    {
      id: 5,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
    {
      id: 6,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
    {
      id: 7,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
    {
      id: 8,
      title: "Твоя яркая зима на Сахалине",
      description: "Авиатур по двум самым крупным островам Итуруп и Сахалин",
      location: "Сахалин, Итуруп, Кунашир",
      difficulty: "Средняя",
      date: "10.09.23 — 19.09.23",
      price: "96 900 ₽",
      image: bestDayIcon,
    },
  ]
  
  const videoTour = [
    {
      name: "Дубай – город гармонии современности и традиций",
      img: header1,
      youtube: youtube,
      video: "https://youtu.be/5oG6AqOkC_U?feature=shared",
    },
    {
      name: "САХАЛИН Самые популярные туристические места",
      img: header2,
      youtube: youtube,
      video: "https://youtu.be/isgAjkvyhYQ?feature=shared",
    },
    {
      name: "Остров Кунашир - мыс Столбчатый, головнинский клиф, вулкан Головнина, озеро Кипящее",
      img: header3,
      youtube: youtube,
      video: "https://youtu.be/NeR2C-pUweQ?feature=shared",
    },
    {
      name: "Франсия. Эйфелева башня, Лувр, Французская Ривьера, лавандовые поля Прованса.",
      img: header4,
      youtube: youtube,
      video: "https://youtu.be/cgnOxtlklDk?feature=shared",
    },
    {
      name: "Собор Святой Софии, Каппадокия, Памуккале, пляжи Бодрума в Стамбуле, Турция",
      img: header3,
      youtube: youtube,
      video: "https://youtu.be/FTOrpoz-nmU?feature=shared",
    },
    {
      name: "Япония. Токио, храмы Киото, гора Фудзи, замок Осака.",
      img: header2,
      youtube: youtube,
      video: "https://youtu.be/4bwTH-Dumkc?feature=shared",
    },
  ]
  
  const bed = [
    {
      address: "Sohil",
      img: "https://desertbuggyrental.com/wp-content/uploads/2024/11/Kid-friendly-beaches-Dubai.jpg",
    },
    {
      address: "Manzaralar",
      img: "https://toping.uz/storage/images/oJQKBg06kH0fw2qhv2D66iDg2ViN94es.webp",
    },
    {
      address: "Mehmonhonalar",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d3/e1/5f/hotel-facade.jpg?w=1200&h=-1&s=1",
    },
  ]
  
  const news = [
    {
      id: 1,
      title: "Dubayda Yangi Ekoturizm Markazi Ochildi!",
      img: "https://www.gazeta.uz/media/img/2023/10/ik7r6G16976384838230_l.jpg",
      date: "12-dekabr 2024",
      text: "Dubayning cho'l hududida ekologik barqarorlikni qo'llab-quvvatlash maqsadida yangi ekoturizm markazi foydalanishga topshirildi. Ushbu markaz tabiatni sevuvchilar uchun maxsus joy bo'lib, u yerda sayyohlar quyidagi imkoniyatlardan bahramand bo'lishlari mumkin: Noyob hayvonot va o'simlik dunyosini o'rganish. Maxsus qulayliklarga ega cho'l safari. Ekologik turizmga oid ma'lumotlar olish va mahorat darslarida qatnashish. Bu markaz oilalar, ekologiya ixlosmandlari va tabiatni asrashga hissa qo'shishni istagan sayohatchilar uchun mukammal yo'nalishdir.На встрече рабочей группы по развитию туризма в Сахалинской области обсуждались проблемы.",
      in_detail: "Ko'proq o'qish"
    },
    { 
      id: 2,
      title: "Yaponiya 2024-yilda Sayyohlar Uchun Cheklovlarni Bekor Qildi",
      img: "https://static.xabar.uz/crop/2/0/720_460_95_2044684472.jpg",
      date: "24-dekabr 2024",
      text: "Yaponiya 2024-yilda sayyohlar uchun COVID-19 bilan bog'liq barcha cheklovlarni bekor qildi va turizm sektorini yana rivojlantirishga e'tibor qaratmoqda. Endi sayohatchilar quyidagilardan bemalol bahramand bo'lishlari mumkin: Fuji Tog'i Ekspeditsiyasi Tokiodagi an'anaviy festival va bazarlar Kyotodagi tarixiy ibodatxonalar va bahoriy gilos gullash marosimlari Vizalarni olish jarayoni soddalashtirilgan va mahalliy transport tizimi sayyohlarga qulay xizmatlar ko'rsatmoqda.",
      in_detail: "Ko'proq o'qish"
    },
    {
      id: 3,
      title: "Fransiyada Yangi Turizm Loyihalari Ishga Tushdi!",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      date: "16-dekabr 2024",
      text: "Yangi Loire Vodiylarining Qal’alar Marshruti Fransiya hukumati Loire vodiylaridagi 10 dan ortiq tarixiy qal’alar va saroylarni o‘z ichiga olgan yangi marshrutni taqdim etdi. Bu marshrut orqali sayyohlar quyidagilardan bahramand bo‘lishlari mumkin: Chenonceau qal’asi: Loire daryosi ustida joylashgan go‘zal saroy. Chambord qal’asi: Fransuz Uyg‘onish davrining me’morchilik mo‘jizasi. Amboise qal’asi: Leonardo da Vinchi yashagan joy. Mehmonlarga tarixiy joylarda maxsus ekskursiyalar va o‘rta asrlarni aks ettiruvchi ko‘rgazmalar taqdim etiladi.",
      in_detail: "Ko'proq o'qish"
    },
    {
      id: 4,
      title: "Neom: Kelajakning Shahriga Sayohat",
      img: "https://line-neom.com/wp-content/uploads/2023/07/what-is-the-line-neom-saudi-2030-1.jpg",
      date: "19-dekabr 2024",
      text: "Saudiya Arabistonining futuristik loyihasi – Neom shahri 2024-yilda sayyohlar uchun ayrim hududlarini ochdi. Bu loyiha zamonaviy texnologiyalar, ekologik tozalik va innovatsiyalar uyg‘unligini o‘zida mujassam etgan. Neomda Nima Qilish Mumkin? The Line: Hech qanday transport vositasiz kelajak shahri bilan tanishuv. Bu vertikal shahar butunlay yashil energiya bilan ta'minlanadi. Tabiat safari: Cho‘l va tog‘ hududlarini o‘z ichiga olgan noyob landshaftlarni ko‘rish. Qizil dengiz kurortlari: Ekologik toza dam olish maskanlari va suv sportlari.",
      in_detail: "Ko'proq o'qish"
    },
  ]

  const headerImages = [
    {
      img: header1,
      title: "Dubai",
      subtitle: "в 2024 году",
      text: "Успей забронировать тур на острова, количество мест ограничено"
    },
    {
      img: header2,
      title: "Istanbul",
      subtitle: "в 2024 году",
      text: "Успей забронировать тур на острова, количество мест ограничено"
    },
    {
      img: header3,
      title: "Japan",
      subtitle: "в 2024 году",
      text: "Успей забронировать тур на острова, количество мест ограничено"
    },
    {
      img: header4,
      title: "Hindiston",
      subtitle: "в 2024 году",
      text: "Успей забронировать тур на острова, количество мест ограничено"
    },
  ]

  const tourTurizm = [{
    title: 'SAKHTRAVEL SAYOXAT AGENTLIGI BILAN SAXALINDA TURIZM',
    description: "'Dubayga safaringizni unutilmas qiling! Birlashgan Arab Amirliklarining eng yorqin va zamonaviy shahri – Dubay, o‘zining betakror go‘zalligi, zamonaviy arxitekturasi va eksklyuziv dam olish imkoniyatlari bilan sizni kutmoqda. Bu shaharga birinchi bor kelganingizda, u sizni o‘ziga oshiq qiladi va hech qachon unutmaysiz. SahTravel turizm kompaniyasi siz uchun eng yodda qoladigan, o‘zgacha va hayajonli dam olish imkoniyatlarini taqdim etadi. Agar ish safari yoki qisqa muddatli safarda bo‘lsangiz va faqat bir kun bo‘lsa ham, bu ajoyib shaharni ko‘rishga imkoningiz bo‘lsa, unda 1 kunlik sayohatni tashkil eting! Sizga Dubayning asosiy diqqatga sazovor joylariga ekskursiya yoki 3-4 soatlik tur taklif qilinadi. Bu tur davomida siz Burj Khalifa, Dubai Mall, Dubai Fountain, Dubay ko‘rfazi, zamonaviy ibodatxonalar va boshqa mashhur joylarni ko‘rasiz. Yoki ko‘proq sarguzasht istasangiz, desert safari, Dubai Marina yoki Palm Jumeirah kabi ajoyib joylarga tashrif buyurishingiz mumkin!. Agar sizda bir hafta yoki undan ko‘proq vaqt bo‘lsa, tabriklaymiz – siz chinakam omadlisiz! Sizni kutib oladigan sayohatlar orzusi: luxus kruizlar, sahro safari, shopping turlari, ekstremal turizm, gastronomik turlar, spa dasturlari, byudjet yoki VIP dam olish – bularning barchasi sizni kutmoqda. Sevimli joyingizni, yozgi va qishki turlarni, turli dam olish turlari va narxlarni tanlash imkoniyati juda keng!. Dubayga borganingizda, o‘zingizni haqiqiy sarguzashtchi va luks hayotning bir qismi sifatida his qilasiz!,",
    title2: "NEGA BIZGA?",
    description2: "'SAKHTRAVEL' sayyohlik agentligi sayohatingizni iloji boricha xavfsiz va qulay qiladi, chunki biz 10 yildan ortiq vaqt davomida taqdim etilayotgan xizmatlar sifati va assortimenti ustida doimiy ishlamoqdamiz. Marshrut va tur paketining tavsifi bilan batafsil ma'lumotni sayyohlik kompaniyamiz veb-saytida topishingiz yoki batafsil ma'lumot uchun ko'rsatilgan raqamlarga qo'ng'iroq qilishingiz mumkin."
  }]
  
  const telegramCard = [{
    img: qr,
    tg_address: "Mansurxan1",
    title: "Telegram kanalimizga qo'shiling!",
    title_ru: "",
    text: "Dunyodagi eng yaxshi sayohat turlari, maxsus chegirmalar va yangi takliflardan birinchi bo'lib xabardor bo'ling! Sayohatlaringizni rejalashtirishni biz bilan boshlang. Qo'shiling va orzularingizdagi manzillarga birga sayohat qilaylik!",
    text_ru: ""
  }
]

  const contextValue = { tourData, headerImages, bestDayTours, videoTour, bed, news, tourTurizm, telegramCard };

  return (
    <TourContext.Provider value={contextValue}>
      {children}
    </TourContext.Provider>
  );
};

TourProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTour = () => useContext(TourContext);

// eslint-disable-next-line react-refresh/only-export-components
export { TourProvider, useTour };
