// get current time >> hours and mins
const curTime = new Date();
export const curHour = curTime.getHours();
export const curMins = curTime.getMinutes();

interface sample_citiesList {
  arName: string;
  isoName: string;
}

export const arr_citiesList: sample_citiesList[] = [
  {
    arName: "أسوان",
    isoName: "Aswān",
  },
  {
    arName: "أسيوط",
    isoName: "Asyūţ",
  },
  {
    arName: "الأسكندرية",
    isoName: "Al Iskandarīyah",
  },
  {
    arName: "الأقصر",
    isoName: "Al Uqşur",
  },
  {
    arName: "الجيزة",
    isoName: "Al Jīzah",
  },
  {
    arName: "السويس",
    isoName: "As Suways",
  },
  {
    arName: "الشرقية",
    isoName: "Ash Sharqīyah",
  },
  {
    arName: "القاهرة",
    isoName: "Al Qāhirah",
  },
  {
    arName: "القليوبية",
    isoName: "Al Qalyūbīyah",
  },
  {
    arName: "المنوفية",
    isoName: "Al Minūfīyah",
  },
  {
    arName: "المنيا",
    isoName: "Al Minyā",
  },
  {
    arName: "بني سويف",
    isoName: "Banī Suwayf",
  },
  {
    arName: "بور سعيد",
    isoName: "Būr Sa‘īd",
  },
  {
    arName: "دمياط",
    isoName: "Dumyāţ",
  },
  {
    arName: "سوهاج",
    isoName: "Sūhāj",
  },
  {
    arName: "قنا",
    isoName: "Qinā",
  },
  {
    arName: "كفر الشيخ",
    isoName: "Kafr ash Shaykh",
  },
  {
    arName: "مطروح",
    isoName: "Maţrūḩ",
  },
];

export function monthToArabic(monthNum: number) {
  switch (monthNum) {
    case 1:
      return "يناير";

    case 2:
      return "فبراير";

    case 3:
      return "مارس";

    case 4:
      return "أبريل";

    case 5:
      return "مايو";

    case 6:
      return "يونيو";

    case 7:
      return "يوليو";

    case 8:
      return "أغسطس";

    case 9:
      return "سبتمبر";

    case 10:
      return "أكتوبر";

    case 11:
      return "نوفبمر";

    case 12:
      return "ديسمبر";
  }
}
