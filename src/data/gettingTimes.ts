import axios from "axios";
import { curHour, curMins, monthToArabic } from "./data";

export function gettingPrayerTimes(thisIso: string, thisArabic: string): void {
  axios
    .get(`http://api.aladhan.com/v1/timingsByCity`, {
      params: {
        country: "EG",
        city: thisIso,
      },
    })
    .then((res) => {
      displayDateAndLocation(thisArabic, res.data.data.date);

      const timingsData = res.data.data.timings;

      const fajrTime = timingsData.Fajr.split(":", 2);
      const [fajrHours, fajrMiniuts]: [number | string, string] = fajrTime;

      const dhuhrTime = timingsData.Dhuhr.split(":", 2);
      const [dhuhrHours, dhuhrMiniuts]: [number | string, string] = dhuhrTime;

      const asrTime = timingsData.Asr.split(":", 2);
      const [asrHours, asrMiniuts]: [number | string, string] = asrTime;

      const maghribTime = timingsData.Maghrib.split(":", 2);
      const [maghribHours, maghribMiniuts]: [number | string, string] =
        maghribTime;

      const ishaTime = timingsData.Isha.split(":", 2);
      const [ishaHours, ishaMiniuts]: [number | string, string] = ishaTime;

      // times array
      const arrOfHours: number[] = [
        +fajrHours,
        +dhuhrHours,
        +asrHours,
        +maghribHours,
        +ishaHours,
      ];

      // setting next prayer

      const arrOfMins: number[] = [
        +fajrMiniuts,
        +dhuhrMiniuts,
        +asrMiniuts,
        +maghribMiniuts,
        +ishaMiniuts,
      ];

      var prayerIndex = getNextPrayerIndex(arrOfHours, arrOfMins);
      setNextPrayer(prayerIndex);

      // Display Times On The Page
      for (let i = 0; i < 5; i++) {
        switch (i) {
          case 0:
            const fajrSpan = document.getElementById(`${i}`) as HTMLSpanElement;
            fajrSpan.innerHTML = `${fajrHours}:${fajrMiniuts}ص`;
            break;
          case 1:
            const dhuhrSpan = document.getElementById(
              `${i}`
            ) as HTMLSpanElement;
            dhuhrSpan.innerHTML =
              +dhuhrHours >= 12
                ? `${dhuhrHours}:${dhuhrMiniuts}م`
                : `${dhuhrHours}:${dhuhrMiniuts}ص`;
            break;
          case 2:
            const asrSpan = document.getElementById(`${i}`) as HTMLSpanElement;
            asrSpan.innerHTML = `${toTwelve(+asrHours)}:${asrMiniuts}م`;
            break;
          case 3:
            const maghribSpan = document.getElementById(
              `${i}`
            ) as HTMLSpanElement;
            maghribSpan.innerHTML = `${toTwelve(
              +maghribHours
            )}:${maghribMiniuts}م`;
            break;
          case 4:
            const ishaSpan = document.getElementById(`${i}`) as HTMLSpanElement;
            ishaSpan.innerHTML = `${toTwelve(+ishaHours)}:${ishaMiniuts}م`;
            break;
        }
      }
    });
}

function toTwelve(hours: number): string {
  if (hours > 12) {
    hours -= 12;
  }
  return `0${hours}`;
}

// Display date and location function

const dateLocationSec = document.getElementById(
  "date-location"
) as HTMLDivElement;

function displayDateAndLocation(name: string, resDate: any): void {
  dateLocationSec.innerHTML = `<span class="location">
                              <span class="material-symbols-outlined">location_on</span>${name}</span>
                              <span class="day">${
                                resDate.hijri.weekday.ar
                              }</span>
                              <span class="date" id="date-day">${
                                resDate.gregorian.day
                              }</span>
                              <span class="date" id="date-month">${monthToArabic(
                                resDate.gregorian.month.number
                              )}</span>
                              <span class="date" id="date-year">${
                                resDate.gregorian.year
                              }</span>`;
}

// getting the index of the next array
function getNextPrayerIndex(hours: number[], mins: number[]): number {
  for (let i = 0; i < 5; i++) {
    if (hours[i] > curHour || (hours[i] == curHour && mins[i] >= curMins))
      return i;
  }
  return 0;
}

// set class "next" for the matching id and index
function setNextPrayer(j: number): void {
  for (let i = 0; i < 5; i++) {
    const timeLi = document.getElementById(`time-${i}`) as HTMLLIElement;

    if (i == j) timeLi.setAttribute("class", "next");
    else timeLi.removeAttribute("class");
  }
}
