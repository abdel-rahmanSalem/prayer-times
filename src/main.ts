import "./css/style.css";
import { arr_citiesList } from "./data/data";
import { gettingPrayerTimes } from "./data/gettingTimes";

gettingPrayerTimes("Al Qāhirah", "القاهرة");

// Display Cities List
const citiesUl = document.querySelector(".cities") as HTMLElement;
for (let i = 0; i < arr_citiesList.length; i++) {
  citiesUl.innerHTML += `<li class="city${i}"><span class="material-symbols-outlined">ads_click</span>${arr_citiesList[i].arName}</li>`;
}

// Getting Wanted City Name And Calling It's Data
for (let j = 0; j < arr_citiesList.length; j++) {
  const cityLi = document.querySelector(`.city${j}`) as HTMLLIElement;
  cityLi.addEventListener("click", () => {
    // scroll to times section
    let cityAr: string = "";
    let cityIso: string = "";

    for (let i = 0; i < arr_citiesList.length; i++) {
      if (arr_citiesList[i].arName == arr_citiesList[j].arName) {
        cityAr = arr_citiesList[i].arName;
        cityIso = arr_citiesList[i].isoName;

        // fetching the api and display it's data
        gettingPrayerTimes(cityIso, cityAr);
        scrollTo(timesSecPos);
      }
    }
  });
}

//scroll to specific section

const timesSec = document.querySelector(".times-section") as HTMLElement;
const timesSecPos = timesSec.getBoundingClientRect().top + window.scrollY;

const citiesSec = document.querySelector(".cities-section") as HTMLElement;
const citiesSecPos = citiesSec.getBoundingClientRect().top + window.scrollY;

const footerSec = document.querySelector(".footer-section") as HTMLElement;
const footerSecPos = footerSec.getBoundingClientRect().top + window.scrollY;

const timesBtn = document.querySelector(".times-btn") as HTMLLIElement;
const landingTimesBtn = document.getElementById(
  "landing-times"
) as HTMLLIElement;
const citiesBtn = document.querySelector(".cities-btn") as HTMLLIElement;
const footerBtn = document.querySelector(".footer-btn") as HTMLLIElement;

scrollToEventer(timesBtn, timesSecPos);
scrollToEventer(landingTimesBtn, timesSecPos);
scrollToEventer(citiesBtn, citiesSecPos);
scrollToEventer(footerBtn, footerSecPos);

// Scroll To Functions
function scrollToEventer(btn: HTMLElement, pos: number): void {
  btn.addEventListener("click", () => {
    scrollTo(pos);
  });
}

function scrollTo(pos: number): void {
  window.scrollTo({
    top: pos,
    left: 0,
    behavior: "smooth",
  });
}
