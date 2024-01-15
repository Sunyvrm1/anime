const slide = document.querySelectorAll(".slide");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let curSlide = 0;
const maxSlide = slide.length;

const gotoSlide = function (gotoSlide) {
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - gotoSlide)}%)`;
  });
};

gotoSlide(0);

const next = function () {
  if (curSlide == maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
};

const prev = function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
};

right.addEventListener("click", next);
left.addEventListener("click", prev);

//Navigation

const navIcon = document.querySelector(".navIcon");
const sideNavigation = document.querySelector(".sideNavigation");
const closeBtn = document.querySelector(".closeBtn");
const nav = document.querySelector("nav");

navIcon.addEventListener("click", () => {
  sideNavigation.classList.toggle("activeNav");
  nav.classList.toggle("activeMenu");
});

closeBtn.addEventListener("click", () => {
  sideNavigation.classList.toggle("activeNav");
  nav.classList.toggle("activeMenu");
});

//slide event

const detailButton = document.querySelectorAll(".detailButton");
detailButton.forEach((btn1) => {
  btn1.addEventListener("click", () => {
    const getId = btn1.getAttribute("id");
    localStorage.setItem("getId", getId);
    window.location.href = "anime.html";
  });
});

// 2nd slider content

fetch("slider.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.anime.map((suny, index) => {
      const v1 = 10 - index;
      const zero = v1 < 10 ? `0${v1}` : `${v1}`;
      const SliderTrend = document.querySelector(".sliderOuterCont");
      SliderTrend.insertAdjacentHTML(
        "afterbegin",
        ` <div class="slideTrend">
          <div class="trentTitle">
            <p class="trendCount">${zero}</p>
            <p class="trendName trendNameDots">${suny.title_english}</p>
          </div>
          <div class="trentImage">
            <img src="${suny.images}" alt="${suny.anime_id}">
          </div>
        </div>`
      );
    });
  });

//2nd silder Functionality
