
import { DailyItinerary } from './types';

export const ITINERARY: DailyItinerary[] = [
  {
    day: 'D1',
    date: '01.15',
    hotel: '沖繩那霸旭橋托麗芙特酒店',
    items: [
      { time: '10:30', activity: '家裡出發 (包車)', isImportant: true, note: '提醒司機準時到達' },
      { time: '11:30', activity: '抵達桃園機場 T1', note: '辦理登機手續' },
      { time: '13:30', activity: 'FD230 飛機起飛', isImportant: true },
      { time: '15:55', activity: '抵達那霸機場', note: '領取行李，搭專車前往租車' },
      { time: '16:45', activity: '沖繩行腳租車', isImportant: true, note: '需國際護照，補價差(需現金！)，領車' },
      { time: '18:00', activity: '飯店 Check-in', isImportant: true, note: '飯店 13-21點提供免費迎賓飲料與泡盛無限暢飲！' },
      { time: '18:30', activity: '尋找晚餐', note: '待尋找' },
      { time: '19:30', activity: '逛國際通商圈', mapUrl: 'https://www.google.com/maps/search/?api=1&query=國際通' }
    ]
  },
  {
    day: 'D2',
    date: '01.16',
    hotel: 'MIHANA 恩納村',
    items: [
      { time: '08:00', activity: '飯店出發', note: '沖繩那霸旭橋托麗芙特酒店' },
      { time: '08:10', activity: '泊港魚市場', note: '早餐到海鮮市場享用', mapUrl: 'https://www.google.com/maps/search/?api=1&query=泊港魚市場' },
      { time: '11:10', activity: '古宇利海洋塔', note: '欣賞漂亮的海景與古宇利大橋', mapUrl: 'https://www.google.com/maps/search/?api=1&query=古宇利海洋塔' },
      { time: '12:30', activity: '午餐：蝦蝦飯', note: '或尋找古宇利附近的食物', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kouri+Shrimp' },
      { time: '13:45', activity: '沖繩美麗海水族館', isImportant: true, note: '13:00/15:00海豚劇場；15:00鯨鯊餵食秀。戶外有海龜海牛。', mapUrl: 'https://www.google.com/maps/search/?api=1&query=沖繩美麗海水族館' },
      { time: '17:40', activity: '燒肉 琉球的牛 恩納店', isImportant: true, note: '沖繩知名燒肉店！', mapUrl: 'https://www.google.com/maps/search/?api=1&query=琉球的牛+恩納店' },
      { time: '20:10', activity: '飯店 Check-in', note: '恩納村' }
    ]
  },
  {
    day: 'D3',
    date: '01.17',
    hotel: '那霸雞尾酒住宿飯店',
    items: [
      { time: '08:30', activity: '離開恩納村' },
      { time: '08:40', activity: 'BAYWICH 早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=BAYWICH' },
      { time: '10:10', activity: '美國村', mapUrl: 'https://www.google.com/maps/search/?api=1&query=美國村' },
      { time: '12:30', activity: 'cocoroar 甜點', note: '提拉米蘇、鬆餅、夏威夷飯', mapUrl: 'https://www.google.com/maps/search/?api=1&query=cocoroar' },
      { time: '13:00', activity: 'okinawa cerrado coffee', note: '買杯咖啡' },
      { time: '14:00', activity: 'Parco city', note: '逛街 shopping', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parco+City' },
      { time: '18:30', activity: '飯店 Check-in', note: '那霸雞尾酒住宿飯店' },
      { time: '19:00', activity: '尋找晚餐 / 逛市區' }
    ]
  },
  {
    day: 'D4',
    date: '01.18',
    hotel: 'Storyline 瀨長島',
    items: [
      { time: '07:00', activity: '飯店出發', note: '那霸雞尾酒住宿飯店' },
      { time: '07:10', activity: '超商', note: '買早餐吃早餐！' },
      { time: '07:50', activity: '賞鯨之旅', isImportant: true, note: 'Marine club berry naha (時常約三小時)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Marine+club+berry+naha' },
      { time: '12:00', activity: '尋找午餐', note: '自由用餐' },
      { time: '13:30', activity: '波上宮', note: '觀光巡禮', mapUrl: 'https://www.google.com/maps/search/?api=1&query=波上宮' },
      { time: '15:00', activity: '玉泉洞', note: '壯觀鐘乳石洞', mapUrl: 'https://www.google.com/maps/search/?api=1&query=玉泉洞' },
      { time: '18:00', activity: '飯店 Check-in', isImportant: true, note: '瀨長島頂樓空中酒吧 Happy Hour (17-21:30) 免費酒水/飲品小食！' },
      { time: '18:00', activity: '尋找晚餐', note: '室外溫泉 Spa/按摩浴缸開放至 21:00' }
    ]
  },
  {
    day: 'D5',
    date: '01.19',
    hotel: '回家',
    items: [
      { time: '09:00', activity: '瀨長島逛逛', note: '起飛前最後 Shopping 與放鬆', mapUrl: 'https://www.google.com/maps/search/?api=1&query=瀨長島' },
      { time: '14:00', activity: '吃完午餐出發還車', isImportant: true },
      { time: '16:30', activity: 'OD883 飛機起飛', isImportant: true, note: '那霸機場 T1' }
    ]
  }
];

export const COST_SUMMARY = [
  { category: '包車來回', detail: '6人均分 ($270/人)', price: '$1,620' },
  { category: '飛機去程', detail: '含行李 $4560 (4人) / 無行李 $3690 (2人)', price: '$25,620' },
  { category: '飛機回程', detail: '含行李 $3727 (5人) / 苓 $3079', price: '$21,714' },
  { category: '住宿 D1-D3', detail: '旭橋/恩納/雞尾酒 (6人均分)', price: '$19,776' },
  { category: '活動套票', detail: '美麗海+玉泉洞 ($800/人；苓 $324)', price: '$4,324' },
  { category: '賞鯨之旅', detail: 'Berry Naha ($1261/人；苓 $1061)', price: '$7,366' },
  { category: '住宿 D4', detail: '瀨長島 (波羊 $3133 / 其餘 $2221.5)', price: '$15,152' },
  { category: 'Sim 卡', detail: '爸波 $600 / 媽羊 $593 / 苓蓉 $759', price: '$1,952' }
];

export const INDIVIDUAL_COSTS = [
  { name: '爸', amount: 16436, icon: 'fa-user-tie' },
  { name: '媽', amount: 16432, icon: 'fa-user-plus' },
  { name: '波', amount: 17347, icon: 'fa-user-ninja' },
  { name: '羊', amount: 17344, icon: 'fa-user-astronaut' },
  { name: '苓', amount: 14321, icon: 'fa-user-graduate' },
  { name: '蓉', amount: 15645, icon: 'fa-user-tag' }
];

export const GUIDES = [
  {
    title: '沖繩那霸旭橋托麗芙特酒店 (Hotel Torifito)',
    description: '設計精巧且極具現代感的城市飯店。位於旭橋站附近，早餐豐富且評價極高，是我們 D1 的落腳點。',
    trivia: '13:00-21:00 提供的迎賓飲料除了咖啡，竟然還有在地「泡盛」無限暢飲，簡直是酒鬼天堂！',
    osmCoords: '26.2117,127.6733',
    imageUrl: '旭橋.jpg',
    blogUrl: 'https://y00.tw/torifito-naha-asahibashi/'
  },
  {
    title: '泊港魚市場 (Tomari Iyumachi)',
    description: '那霸市區最方便的海鮮市場，有許多剛上岸的鮪魚。場內提供豐富的生魚片、烤扇貝與海鮮丼。',
    trivia: '雖然是市場，但環境非常乾淨清爽，是那霸吃「海鮮早餐」的最佳首選。',
    osmCoords: '26.2287,127.6833',
    imageUrl: 'fish_market.jpg',
    blogUrl: 'https://y00.tw/tomari-iyumachi/'
  },
  {
    title: '沖繩美麗海水族館',
    description: '世界前三大的水族館之一。震撼的「黑潮之海」巨型水槽，容納了巨大的鯨鯊與鬼蝠魟。',
    trivia: '鯨鯊每天 15:00 的餵食秀會「站著吃」，景象非常壯觀。',
    osmCoords: '26.6944,127.8779',
    imageUrl: '水族館.jpg',
    blogUrl: 'https://tc.tabirai.net/sightseeing/article/okinawa-churaumi-aquarium/'
  },
  {
    title: '燒肉 琉球的牛 (恩納店)',
    description: '沖繩超高人氣的頂級燒肉，以入口即化的和牛聞名。建議一定要提前預約或在開店前抵達。',
    trivia: '其主打的「頂級炙燒握壽司」是隱藏版神級美味，牛肉油脂會在口中完全綻放！',
    osmCoords: '26.4449,127.8105',
    imageUrl: 'barbacue.jpg',
    blogUrl: 'https://www.u-shi.net/chinese/index.html'
  },
  {
    title: 'MIHANA 恩納村 (Villa)',
    description: '隱身在恩納村的高質感 Villa 住宿。室內空間寬敞，非常適合家庭旅客，可以享受寧靜的度假氣息。',
    trivia: '距離海灘非常近，清晨或傍晚散步過去只要幾分鐘，是體驗沖繩慢活的最佳選擇。',
    osmCoords: '26.4442,127.8110',
    imageUrl: 'mihana-onnason-okinawa-01.webp',
    blogUrl: 'https://tw.hotels.com/ho2145327328/mihana-onna-village-villas-onna-ri-ben/'
  },
  {
    title: '北谷美國村 (American Village)',
    description: '充滿濃厚美國風情的娛樂複合型區塊。巨大的摩天輪、繽紛色彩的建築以及無敵夕陽海景是其亮點。',
    trivia: '這裡的前身是美軍機場改建，因此處處充滿了 1950 年代的復古美式氣氛。',
    osmCoords: '26.3158,127.7571',
    imageUrl: 'USAVilage.jpg',
    blogUrl: 'https://tw.bring-you.info/mihama-american-village'
  },
  {
    title: 'San-A-Parco City',
    description: '那霸附近最大的新型商場，擁有 250 家以上的店舖。從名牌店到超市、家電應有盡有，且正對著大海。',
    trivia: '除了好買，這裡的美食街視野極佳，可以一邊吃拉麵一邊看著蔚藍的海景。',
    osmCoords: '26.2570,127.6970',
    imageUrl: 'parco.jpg',
    blogUrl: 'https://www.viviantrip.com/san-a-parco-city/'
  },
  {
    title: '那霸雞尾酒住宿飯店 (Cocktail Stay NaHa)',
    description: '位於那霸市區，以極簡工業風與舒適空間著稱。步行即可到達國際通與波上宮，交通極其便利。',
    trivia: '一樓大廳提供各式調酒與飲品，環境非常放鬆，適合三五好友晚上在此小酌聊天。',
    osmCoords: '26.2201,127.6740',
    imageUrl: '雞尾酒.jpg',
    blogUrl: 'https://www.tripadvisor.com.tw/Hotel_Review-g298224-d23259972-Reviews-Hotel_Cocktail_Stay_Naha-Naha_Okinawa_Prefecture.html'
  },
  {
    title: 'Marine club berry naha 賞鯨之旅',
    description: '冬季沖繩必玩！搭乘特製快艇出海，近距離觀察體型震撼的座頭鯨。店家提供接送與專業攝影服務。',
    trivia: '沖繩賞鯨的機率高達 98%，如果真的沒看到，通常店家會提供全額退費或再玩一次！',
    osmCoords: '26.2231,127.6744',
    imageUrl: 'whale_watching.png',
    blogUrl: 'https://www.berry7.com/lang/zh-TW/naha-whale'
  },
  {
    title: '波上宮 (Naminoue Shrine)',
    description: '波上宮座落於珊瑚礁岩之上，是沖繩八大神社之首。神社建築莊嚴，緊鄰波之上海灘。是祈求航海安全及身體健康的重要勝地。',
    trivia: '波上宮是沖繩唯一的「海灘神社」，站在海灘上可以看到神社屹立在崖邊。',
    osmCoords: '26.2208,127.6711',
    imageUrl: '波上宮.jpg',
    blogUrl: 'https://tw.bring-you.info/naminoue-shrine'
  },
  {
    title: '玉泉洞 (Okinawa World)',
    description: '東南亞最大的鐘乳石洞窟，全長五公里，洞內超過一百萬支鐘乳石，景象極其震撼。',
    trivia: '玉泉洞內的溫度長年保持在 21 度，冬暖夏涼非常舒服。',
    osmCoords: '26.1397,127.7503',
    imageUrl: '玉泉洞.jpg',
    blogUrl: 'https://www.gyokusendo.co.jp/okinawaworld/tc/gyokusendo/'
  },
  {
    title: 'Storyline 瀨長島 (住宿)',
    description: '2024年全新開幕的旗艦飯店。頂樓擁有無邊際泳池與空中酒吧，設計走的是高級現代波西米亞風。',
    trivia: '17:00-21:30 的 Happy Hour 提供免費的在地泡盛與特調飲料，絕對撐到你不想吃晚餐。',
    osmCoords: '26.1755,127.6470',
    imageUrl: 'storyline.jpg',
    blogUrl: 'https://vivawei.tw/storyline-senagajima/'
  },
  {
    title: '瀨長島 Umikaji Terrace',
    description: '有「沖繩聖托里尼」之稱。純白建築沿著斜坡而建，聚集了眾多文青小店、咖啡廳以及知名的「幸福鬆餅」。',
    trivia: '因為就在機場跑道旁，這裡也是全沖繩看飛機起降最近、最震撼的地點。',
    osmCoords: '26.1747,127.6458',
    imageUrl: '瀨長島.jpg',
    blogUrl: 'https://tw.bring-you.info/senagajima'
  }
];
