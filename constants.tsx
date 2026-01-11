
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
    title: '波上宮 (Naminoue Shrine)',
    description: '波上宮座落於珊瑚礁岩之上，是沖繩八大神社之首。神社建築莊嚴，緊鄰波之上海灘。是祈求航海安全及身體健康的重要勝地。',
    trivia: '波上宮是沖繩唯一的「海灘神社」，站在海灘上可以看到神社屹立在崖邊。',
    osmCoords: '26.2208,127.6711',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: '沖繩美麗海水族館',
    description: '世界前三大的水族館之一。震撼的「黑潮之海」巨型水槽，容納了巨大的鯨鯊與鬼蝠魟。',
    trivia: '鯨鯊每天 15:00 的餵食秀會「站著吃」，景象非常壯觀。',
    osmCoords: '26.6944,127.8779',
    imageUrl: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: '玉泉洞 (Okinawa World)',
    description: '東南亞最大的鐘乳石洞窟，全長五公里，洞內超過一百萬支鐘乳石，景象極其震撼。',
    trivia: '玉泉洞內的溫度長年保持在 21 度，冬暖夏涼非常舒服。',
    osmCoords: '26.1397,127.7503',
    imageUrl: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&q=80&w=1000'
  }
];
