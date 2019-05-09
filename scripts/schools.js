// Description:
//   Looks up school names by school code, or school codes by school name
//
// Commands:
//   hubot find school 1234 - lookup by school code
//   hubot find school Example Primary - lookup by school name
//   hubot find school EPS - lookup by school initials
//
//

const schools = {
  1744: 'ADMIRALTY PRIMARY SCHOOL',
  3072: 'ADMIRALTY SECONDARY SCHOOL',
  1738: 'AHMAD IBRAHIM PRIMARY SCHOOL',
  3201: 'AHMAD IBRAHIM SECONDARY SCHOOL',
  5625: 'AI TONG SCHOOL',
  1266: 'ALEXANDRA PRIMARY SCHOOL',
  1254: 'ANCHOR GREEN PRIMARY SCHOOL',
  1766: 'ANDERSON PRIMARY SCHOOL',
  3001: 'ANDERSON SECONDARY SCHOOL',
  '0715': 'ANDERSON SERANGOON JUNIOR COLLEGE',
  1150: 'ANG MO KIO PRIMARY SCHOOL',
  3026: 'ANG MO KIO SECONDARY SCHOOL',
  7101: 'ANGLICAN HIGH SCHOOL',
  '0803': 'ANGLO-CHINESE JUNIOR COLLEGE',
  7032: 'ANGLO-CHINESE SCHOOL (BARKER ROAD)',
  7001: 'ANGLO-CHINESE SCHOOL (INDEPENDENT)',
  5001: 'ANGLO-CHINESE SCHOOL (JUNIOR)',
  5638: 'ANGLO-CHINESE SCHOOL (PRIMARY)',
  1268: 'ANGSANA PRIMARY SCHOOL',
  7002: 'ASSUMPTION ENGLISH SCHOOL',
  7804: 'ASSUMPTION PATHWAY SCHOOL',
  3002: 'BARTLEY SECONDARY SCHOOL',
  1249: 'BEACON PRIMARY SCHOOL',
  3003: 'BEATTY SECONDARY SCHOOL',
  1230: 'BEDOK GREEN PRIMARY SCHOOL',
  3069: 'BEDOK GREEN SECONDARY SCHOOL',
  3027: 'BEDOK SOUTH SECONDARY SCHOOL',
  3225: 'BEDOK VIEW SECONDARY SCHOOL',
  1129: 'BENDEMEER PRIMARY SCHOOL',
  3021: 'BENDEMEER SECONDARY SCHOOL',
  1145: 'BLANGAH RISE PRIMARY SCHOOL',
  1640: 'BOON LAY GARDEN PRIMARY SCHOOL',
  3224: 'BOON LAY SECONDARY SCHOOL',
  3043: 'BOWEN SECONDARY SCHOOL',
  3202: 'BROADRICK SECONDARY SCHOOL',
  3044: 'BUKIT BATOK SECONDARY SCHOOL',
  3203: 'BUKIT MERAH SECONDARY SCHOOL',
  3204: 'BUKIT PANJANG GOVT. HIGH SCHOOL',
  1020: 'BUKIT PANJANG PRIMARY SCHOOL',
  1247: 'BUKIT TIMAH PRIMARY SCHOOL',
  1209: 'BUKIT VIEW PRIMARY SCHOOL',
  3040: 'BUKIT VIEW SECONDARY SCHOOL',
  1751: 'CANBERRA PRIMARY SCHOOL',
  3621: 'CANBERRA SECONDARY SCHOOL',
  5029: 'CANOSSA CATHOLIC PRIMARY SCHOOL',
  1256: 'CANTONMENT PRIMARY SCHOOL',
  1771: 'CASUARINA PRIMARY SCHOOL',
  7102: 'CATHOLIC HIGH SCHOOL',
  '0802': 'CATHOLIC JUNIOR COLLEGE',
  3004: 'CEDAR GIRLS\' SECONDARY SCHOOL',
  1211: 'CEDAR PRIMARY SCHOOL',
  3402: 'CHANGKAT CHANGI SECONDARY SCHOOL',
  1239: 'CHANGKAT PRIMARY SCHOOL',
  5637: 'CHIJ (KATONG) PRIMARY',
  5005: 'CHIJ (KELLOCK)',
  7008: 'CHIJ KATONG CONVENT',
  5017: 'CHIJ OUR LADY OF GOOD COUNSEL',
  5007: 'CHIJ OUR LADY OF THE NATIVITY',
  5019: 'CHIJ OUR LADY QUEEN OF PEACE',
  5004: 'CHIJ PRIMARY (TOA PAYOH)',
  7004: 'CHIJ SECONDARY (TOA PAYOH)',
  7019: 'CHIJ ST. JOSEPH\'S CONVENT',
  7118: 'CHIJ ST. NICHOLAS GIRLS\' SCHOOL',
  7023: 'CHIJ ST. THERESA\'S CONVENT',
  5636: 'CHONGFU SCHOOL',
  1203: 'CHONGZHENG PRIMARY SCHOOL',
  7025: 'CHRIST CHURCH SECONDARY SCHOOL',
  1244: 'CHUA CHU KANG PRIMARY SCHOOL',
  3055: 'CHUA CHU KANG SECONDARY SCHOOL',
  7104: 'CHUNG CHENG HIGH SCHOOL (MAIN)',
  7105: 'CHUNG CHENG HIGH SCHOOL (YISHUN)',
  1772: 'CLEMENTI PRIMARY SCHOOL',
  3029: 'CLEMENTI TOWN SECONDARY SCHOOL',
  3012: 'COMMONWEALTH SECONDARY SCHOOL',
  1757: 'COMPASSVALE PRIMARY SCHOOL',
  3622: 'COMPASSVALE SECONDARY SCHOOL',
  1760: 'CONCORD PRIMARY SCHOOL',
  1132: 'CORPORATION PRIMARY SCHOOL',
  3005: 'CRESCENT GIRLS\' SCHOOL',
  7806: 'CREST SECONDARY SCHOOL',
  1102: 'DAMAI PRIMARY SCHOOL',
  3056: 'DAMAI SECONDARY SCHOOL',
  1229: 'DAZHONG PRIMARY SCHOOL',
  5008: 'DE LA SALLE SCHOOL',
  3228: 'DEYI SECONDARY SCHOOL',
  3503: 'DUNEARN SECONDARY SCHOOL',
  3101: 'DUNMAN HIGH SCHOOL',
  3207: 'DUNMAN SECONDARY SCHOOL',
  1755: 'EAST SPRING PRIMARY SCHOOL',
  3609: 'EAST SPRING SECONDARY SCHOOL',
  1769: 'EDGEFIELD PRIMARY SCHOOL',
  3075: 'EDGEFIELD SECONDARY SCHOOL',
  1737: 'ELIAS PARK PRIMARY SCHOOL',
  1252: 'ENDEAVOUR PRIMARY SCHOOL',
  '0714': 'EUNOIA JUNIOR COLLEGE',
  1119: 'EUNOS PRIMARY SCHOOL',
  1756: 'EVERGREEN PRIMARY SCHOOL',
  3623: 'EVERGREEN SECONDARY SCHOOL',
  5020: 'FAIRFIELD METHODIST SCHOOL (PRIMARY)',
  7309: 'FAIRFIELD METHODIST SCHOOL (SECONDARY)',
  3064: 'FAJAR SECONDARY SCHOOL',
  1246: 'FARRER PARK PRIMARY SCHOOL',
  1657: 'FENGSHAN PRIMARY SCHOOL',
  1272: 'FERN GREEN PRIMARY SCHOOL',
  1177: 'FERNVALE PRIMARY SCHOOL',
  1610: 'FIRST TOA PAYOH PRIMARY SCHOOL',
  1257: 'FRONTIER PRIMARY SCHOOL',
  1208: 'FUCHUN PRIMARY SCHOOL',
  3024: 'FUCHUN SECONDARY SCHOOL',
  1107: 'FUHUA PRIMARY SCHOOL',
  3614: 'FUHUA SECONDARY SCHOOL',
  1221: 'GAN ENG SENG PRIMARY SCHOOL',
  3006: 'GAN ENG SENG SCHOOL',
  5022: 'GEYLANG METHODIST SCHOOL (PRIMARY)',
  7005: 'GEYLANG METHODIST SCHOOL (SECONDARY)',
  1222: 'GONGSHANG PRIMARY SCHOOL',
  1251: 'GREENDALE PRIMARY SCHOOL',
  3074: 'GREENDALE SECONDARY SCHOOL',
  1245: 'GREENRIDGE PRIMARY SCHOOL',
  3051: 'GREENRIDGE SECONDARY SCHOOL',
  1765: 'GREENWOOD PRIMARY SCHOOL',
  1735: 'GUANGYANG PRIMARY SCHOOL',
  3238: 'GUANGYANG SECONDARY SCHOOL',
  7031: 'HAI SING CATHOLIC SCHOOL',
  1038: 'HAIG GIRLS\' SCHOOL',
  1121: 'HENRY PARK PRIMARY SCHOOL',
  3048: 'HILLGROVE SECONDARY SCHOOL',
  7108: 'HOLY INNOCENTS\' HIGH SCHOOL',
  5634: 'HOLY INNOCENTS\' PRIMARY SCHOOL',
  5626: 'HONG WEN SCHOOL',
  1255: 'HORIZON PRIMARY SCHOOL',
  1763: 'HOUGANG PRIMARY SCHOOL',
  3046: 'HOUGANG SECONDARY SCHOOL',
  3226: 'HUA YI SECONDARY SCHOOL',
  1223: 'HUAMIN PRIMARY SCHOOL',
  '0806': 'HWA CHONG INSTITUTION',
  1250: 'INNOVA PRIMARY SCHOOL',
  1207: 'JIEMIN PRIMARY SCHOOL',
  1166: 'JING SHAN PRIMARY SCHOOL',
  1727: 'JUNYUAN PRIMARY SCHOOL',
  3608: 'JUNYUAN SECONDARY SCHOOL',
  '0718': 'JURONG PIONEER JUNIOR COLLEGE',
  1045: 'JURONG PRIMARY SCHOOL',
  3211: 'JURONG SECONDARY SCHOOL',
  1753: 'JURONG WEST PRIMARY SCHOOL',
  3068: 'JURONG WEST SECONDARY SCHOOL',
  3063: 'JURONGVILLE SECONDARY SCHOOL',
  1726: 'JUYING PRIMARY SCHOOL',
  3066: 'JUYING SECONDARY SCHOOL',
  1238: 'KEMING PRIMARY SCHOOL',
  3619: 'KENT RIDGE SECONDARY SCHOOL',
  5608: 'KHENG CHENG SCHOOL',
  5168: 'KONG HWA SCHOOL',
  1745: 'KRANJI PRIMARY SCHOOL',
  3065: 'KRANJI SECONDARY SCHOOL',
  5024: 'KUO CHUAN PRESBYTERIAN PRIMARY SCHOOL',
  7028: 'KUO CHUAN PRESBYTERIAN SECONDARY SCHOOL',
  1248: 'LAKESIDE PRIMARY SCHOOL',
  1232: 'LIANHUA PRIMARY SCHOOL',
  3077: 'LOYANG VIEW SECONDARY SCHOOL',
  5601: 'MAHA BODHI SCHOOL',
  7307: 'MANJUSRI SECONDARY SCHOOL',
  7111: 'MARIS STELLA HIGH SCHOOL',
  1645: 'MARSILING PRIMARY SCHOOL',
  3615: 'MARSILING SECONDARY SCHOOL',
  7301: 'MARYMOUNT CONVENT SCHOOL',
  1151: 'MAYFLOWER PRIMARY SCHOOL',
  3031: 'MAYFLOWER SECONDARY SCHOOL',
  5183: 'MEE TOH SCHOOL',
  1764: 'MERIDIAN PRIMARY SCHOOL',
  3076: 'MERIDIAN SECONDARY SCHOOL',
  5027: 'METHODIST GIRLS\' SCHOOL (PRIMARY)',
  7030: 'METHODIST GIRLS\' SCHOOL (SECONDARY)',
  '0908': 'MILLENNIA INSTITUTE',
  6120: 'MOE KINDERGARTEN @ ANCHOR GREEN',
  6100: 'MOE KINDERGARTEN @ BLANGAH RISE',
  6101: 'MOE KINDERGARTEN @ DAZHONG',
  6102: 'MOE KINDERGARTEN @ FARRER PARK',
  6114: 'MOE KINDERGARTEN @ FERN GREEN',
  6121: 'MOE KINDERGARTEN @ FERNVALE',
  6122: 'MOE KINDERGARTEN @ FIRST TOA PAYOH',
  6108: 'MOE KINDERGARTEN @ FRONTIER',
  6124: 'MOE KINDERGARTEN @ HORIZON',
  6125: 'MOE KINDERGARTEN @ HUAMIN',
  6118: 'MOE KINDERGARTEN @ KRANJI',
  6126: 'MOE KINDERGARTEN @ NAVAL BASE',
  6127: 'MOE KINDERGARTEN @ NORTH VISTA',
  6113: 'MOE KINDERGARTEN @ NORTHOAKS',
  6128: 'MOE KINDERGARTEN @ NORTHSHORE',
  6115: 'MOE KINDERGARTEN @ OASIS',
  6123: 'MOE KINDERGARTEN @ PEI TONG',
  6116: 'MOE KINDERGARTEN @ PUNGGOL COVE',
  6105: 'MOE KINDERGARTEN @ PUNGGOL GREEN',
  6103: 'MOE KINDERGARTEN @ PUNGGOL VIEW',
  6111: 'MOE KINDERGARTEN @ RIVERSIDE',
  6106: 'MOE KINDERGARTEN @ SENGKANG GREEN',
  6110: 'MOE KINDERGARTEN @ SPRINGDALE',
  6104: 'MOE KINDERGARTEN @ TAMPINES',
  6129: 'MOE KINDERGARTEN @ VALOUR',
  6117: 'MOE KINDERGARTEN @ WATERWAY',
  6119: 'MOE KINDERGARTEN @ WELLINGTON',
  6107: 'MOE KINDERGARTEN @ WEST SPRING',
  6112: 'MOE KINDERGARTEN @ WESTWOOD',
  6109: 'MOE KINDERGARTEN @ YISHUN',
  5018: 'MONTFORT JUNIOR SCHOOL',
  7011: 'MONTFORT SECONDARY SCHOOL',
  7112: 'NAN CHIAU HIGH SCHOOL',
  5028: 'NAN CHIAU PRIMARY SCHOOL',
  3047: 'NAN HUA HIGH SCHOOL',
  5622: 'NAN HUA PRIMARY SCHOOL',
  7114: 'NANYANG GIRLS\' HIGH SCHOOL',
  '0805': 'NANYANG JUNIOR COLLEGE',
  5258: 'NANYANG PRIMARY SCHOOL',
  '0701': 'NATIONAL JUNIOR COLLEGE',
  1730: 'NAVAL BASE PRIMARY SCHOOL',
  3214: 'NAVAL BASE SECONDARY SCHOOL',
  1621: 'NEW TOWN PRIMARY SCHOOL',
  3507: 'NEW TOWN SECONDARY SCHOOL',
  5197: 'NGEE ANN PRIMARY SCHOOL',
  7310: 'NGEE ANN SECONDARY SCHOOL',
  1761: 'NORTH SPRING PRIMARY SCHOOL',
  1740: 'NORTH VIEW PRIMARY SCHOOL',
  1253: 'NORTH VISTA PRIMARY SCHOOL',
  3071: 'NORTH VISTA SECONDARY SCHOOL',
  3612: 'NORTHBROOKS SECONDARY SCHOOL',
  1729: 'NORTHLAND PRIMARY SCHOOL',
  3058: 'NORTHLAND SECONDARY SCHOOL',
  7803: 'NORTHLIGHT SCHOOL',
  1267: 'NORTHOAKS PRIMARY SCHOOL',
  1274: 'NORTHSHORE PRIMARY SCHOOL',
  7801: 'NUS HIGH SCHOOL OF MATHEMATICS AND SCIENCE',
  1270: 'OASIS PRIMARY SCHOOL',
  1212: 'OPERA ESTATE PRIMARY SCHOOL',
  3605: 'ORCHID PARK SECONDARY SCHOOL',
  3215: 'OUTRAM SECONDARY SCHOOL',
  1263: 'PALM VIEW PRIMARY SCHOOL',
  1743: 'PARK VIEW PRIMARY SCHOOL',
  3613: 'PASIR RIS CREST SECONDARY SCHOOL',
  1243: 'PASIR RIS PRIMARY SCHOOL',
  3235: 'PASIR RIS SECONDARY SCHOOL',
  5635: 'PAYA LEBAR METHODIST GIRLS\' SCHOOL (PRIMARY)',
  7026: 'PAYA LEBAR METHODIST GIRLS\' SCHOOL (SECONDARY)',
  5602: 'PEI CHUN PUBLIC SCHOOL',
  5623: 'PEI HWA PRESBYTERIAN PRIMARY SCHOOL',
  3073: 'PEI HWA SECONDARY SCHOOL',
  1650: 'PEI TONG PRIMARY SCHOOL',
  3232: 'PEICAI SECONDARY SCHOOL',
  3061: 'PEIRCE SECONDARY SCHOOL',
  1236: 'PEIYING PRIMARY SCHOOL',
  3231: 'PING YI SECONDARY SCHOOL',
  1741: 'PIONEER PRIMARY SCHOOL',
  5603: 'POI CHING SCHOOL',
  7308: 'PRESBYTERIAN HIGH SCHOOL',
  1228: 'PRINCESS ELIZABETH PRIMARY SCHOOL',
  1269: 'PUNGGOL COVE PRIMARY SCHOOL',
  1259: 'PUNGGOL GREEN PRIMARY SCHOOL',
  1742: 'PUNGGOL PRIMARY SCHOOL',
  3070: 'PUNGGOL SECONDARY SCHOOL',
  1260: 'PUNGGOL VIEW PRIMARY SCHOOL',
  1197: 'QIFA PRIMARY SCHOOL',
  1734: 'QIHUA PRIMARY SCHOOL',
  1071: 'QUEENSTOWN PRIMARY SCHOOL',
  3508: 'QUEENSTOWN SECONDARY SCHOOL',
  3007: 'QUEENSWAY SECONDARY SCHOOL',
  1072: 'RADIN MAS PRIMARY SCHOOL',
  1073: 'RAFFLES GIRLS\' PRIMARY SCHOOL',
  3008: 'RAFFLES GIRLS\' SCHOOL (SECONDARY)',
  3009: 'RAFFLES INSTITUTION',
  5214: 'RED SWASTIKA SCHOOL',
  3618: 'REGENT SECONDARY SCHOOL',
  3103: 'RIVER VALLEY HIGH SCHOOL',
  1217: 'RIVER VALLEY PRIMARY SCHOOL',
  1264: 'RIVERSIDE PRIMARY SCHOOL',
  3239: 'RIVERSIDE SECONDARY SCHOOL',
  1752: 'RIVERVALE PRIMARY SCHOOL',
  1077: 'ROSYTH SCHOOL',
  1195: 'RULANG PRIMARY SCHOOL',
  7805: 'SCHOOL OF SCIENCE AND TECHNOLOGY, SINGAPORE',
  7802: 'SCHOOL OF THE ARTS, SINGAPORE',
  1759: 'SEMBAWANG PRIMARY SCHOOL',
  3606: 'SEMBAWANG SECONDARY SCHOOL',
  1746: 'SENG KANG PRIMARY SCHOOL',
  3607: 'SENG KANG SECONDARY SCHOOL',
  1261: 'SENGKANG GREEN PRIMARY SCHOOL',
  3509: 'SERANGOON GARDEN SECONDARY SCHOOL',
  3010: 'SERANGOON SECONDARY SCHOOL',
  1220: 'SHUQUN PRIMARY SCHOOL',
  1161: 'SI LING PRIMARY SCHOOL',
  5026: 'SINGAPORE CHINESE GIRLS\' PRIMARY SCHOOL',
  7014: 'SINGAPORE CHINESE GIRLS\' SCHOOL',
  7800: 'SINGAPORE SPORTS SCHOOL',
  1241: 'SOUTH VIEW PRIMARY SCHOOL',
  7807: 'SPECTRA SECONDARY SCHOOL',
  1262: 'SPRINGDALE PRIMARY SCHOOL',
  3053: 'SPRINGFIELD SECONDARY SCHOOL',
  '0804': 'ST. ANDREW\'S JUNIOR COLLEGE',
  5009: 'ST. ANDREW\'S JUNIOR SCHOOL',
  7015: 'ST. ANDREW\'S SECONDARY SCHOOL',
  5011: 'ST. ANTHONY\'S CANOSSIAN PRIMARY SCHOOL',
  7016: 'ST. ANTHONY\'S CANOSSIAN SECONDARY SCHOOL',
  5259: 'ST. ANTHONY\'S PRIMARY SCHOOL',
  5012: 'ST. GABRIEL\'S PRIMARY SCHOOL',
  7017: 'ST. GABRIEL\'S SECONDARY SCHOOL',
  5025: 'ST. HILDA\'S PRIMARY SCHOOL',
  7029: 'ST. HILDA\'S SECONDARY SCHOOL',
  7020: 'ST. JOSEPH\'S INSTITUTION',
  5014: 'ST. JOSEPH\'S INSTITUTION JUNIOR',
  5013: 'ST. MARGARET\'S PRIMARY SCHOOL',
  7021: 'ST. MARGARET\'S SECONDARY SCHOOL',
  7022: 'ST. PATRICK\'S SCHOOL',
  5015: 'ST. STEPHEN\'S SCHOOL',
  1174: 'STAMFORD PRIMARY SCHOOL',
  3304: 'SWISS COTTAGE SECONDARY SCHOOL',
  '0717': 'TAMPINES MERIDIAN JUNIOR COLLEGE',
  1736: 'TAMPINES NORTH PRIMARY SCHOOL',
  1201: 'TAMPINES PRIMARY SCHOOL',
  3037: 'TAMPINES SECONDARY SCHOOL',
  3511: 'TANGLIN SECONDARY SCHOOL',
  3013: 'TANJONG KATONG GIRLS\' SCHOOL',
  1773: 'TANJONG KATONG PRIMARY SCHOOL',
  3512: 'TANJONG KATONG SECONDARY SCHOOL',
  5240: 'TAO NAN SCHOOL',
  1158: 'TECK GHEE PRIMARY SCHOOL',
  1043: 'TECK WHYE PRIMARY SCHOOL',
  3403: 'TECK WHYE SECONDARY SCHOOL',
  1218: 'TELOK KURAU PRIMARY SCHOOL',
  '0702': 'TEMASEK JUNIOR COLLEGE',
  1160: 'TEMASEK PRIMARY SCHOOL',
  3030: 'TEMASEK SECONDARY SCHOOL',
  1189: 'TOWNSVILLE PRIMARY SCHOOL',
  1750: 'UNITY PRIMARY SCHOOL',
  3611: 'UNITY SECONDARY SCHOOL',
  1273: 'VALOUR PRIMARY SCHOOL',
  '0706': 'VICTORIA JUNIOR COLLEGE',
  3014: 'VICTORIA SCHOOL',
  1271: 'WATERWAY PRIMARY SCHOOL',
  1767: 'WELLINGTON PRIMARY SCHOOL',
  1770: 'WEST GROVE PRIMARY SCHOOL',
  1265: 'WEST SPRING PRIMARY SCHOOL',
  3067: 'WEST SPRING SECONDARY SCHOOL',
  1748: 'WEST VIEW PRIMARY SCHOOL',
  1258: 'WESTWOOD PRIMARY SCHOOL',
  3620: 'WESTWOOD SECONDARY SCHOOL',
  1749: 'WHITE SANDS PRIMARY SCHOOL',
  3015: 'WHITLEY SECONDARY SCHOOL',
  1758: 'WOODGROVE PRIMARY SCHOOL',
  3616: 'WOODGROVE SECONDARY SCHOOL',
  1114: 'WOODLANDS PRIMARY SCHOOL',
  1747: 'WOODLANDS RING PRIMARY SCHOOL',
  3604: 'WOODLANDS RING SECONDARY SCHOOL',
  3041: 'WOODLANDS SECONDARY SCHOOL',
  1205: 'XINGHUA PRIMARY SCHOOL',
  1731: 'XINGNAN PRIMARY SCHOOL',
  1724: 'XINMIN PRIMARY SCHOOL',
  3050: 'XINMIN SECONDARY SCHOOL',
  1227: 'XISHAN PRIMARY SCHOOL',
  1725: 'YANGZHENG PRIMARY SCHOOL',
  1762: 'YEW TEE PRIMARY SCHOOL',
  1143: 'YIO CHU KANG PRIMARY SCHOOL',
  3222: 'YIO CHU KANG SECONDARY SCHOOL',
  '0716': 'YISHUN INNOVA JUNIOR COLLEGE',
  1172: 'YISHUN PRIMARY SCHOOL',
  3020: 'YISHUN SECONDARY SCHOOL',
  3045: 'YISHUN TOWN SECONDARY SCHOOL',
  1658: 'YU NENG PRIMARY SCHOOL',
  3223: 'YUAN CHING SECONDARY SCHOOL',
  1656: 'YUHUA PRIMARY SCHOOL',
  3019: 'YUHUA SECONDARY SCHOOL',
  1219: 'YUMIN PRIMARY SCHOOL',
  3307: 'YUSOF ISHAK SECONDARY SCHOOL',
  7027: 'YUYING SECONDARY SCHOOL',
  1199: 'ZHANGDE PRIMARY SCHOOL',
  1240: 'ZHENGHUA PRIMARY SCHOOL',
  3617: 'ZHENGHUA SECONDARY SCHOOL',
  1235: 'ZHONGHUA PRIMARY SCHOOL',
  3240: 'ZHONGHUA SECONDARY SCHOOL',
};

function getAcronym(schoolName) {
  return schoolName.split(/-|\W/g).map(w => w[0]).join('');
}

module.exports = (robot) => {
  robot.respond(/find school (\d{4})/i, (res) => {
    const schoolCode = res.match[1];
    const schoolName = schools[schoolCode];

    if (!schoolName) {
      res.send(`No school found with code ${schoolCode}.`);
    } else {
      res.send(`School Code ${schoolCode}: ${schoolName}`);
    }
  });

  robot.respond(/find school (?!\d{4})(.*)/i, (res) => {
    const query = res.match[1].toUpperCase();

    const results = Object.entries(schools)
      .filter(s => s[1].includes(query) || getAcronym(s[1]) === query)
      .map(s => `${s[0]} ${s[1]}`);
    if (results.length > 10) {
      res.send('There are too many results. Please try a more specific query.');
    } else {
      res.send(`${results.length} school(s) found:\n*Code* *Name*\n${results.join('\n')}`);
    }
  });
};
