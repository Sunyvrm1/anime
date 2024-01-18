//shrinking header
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrollHeader");
  } else {
    header.classList.remove("scrollHeader");
  }
});

//banner slider

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

//slider event

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
            <img src="${suny.images}" alt="${suny.anime_id}" class="trentImageImg">
          </div>
        </div>`
      );
    });

    //slider Button code

    const slide = document.querySelectorAll(".slideTrend");
    const left = document.querySelector(".sliderleft");
    const right = document.querySelector(".sliderright");
    let curSlide = 0;
    const maxSlide = slide.length;

    const gotoSlide = function (gotoSlide) {
      slide.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - gotoSlide)}%)`;
      });
    };

    gotoSlide(0);

    const next = function () {
      if (curSlide == maxSlide - 7) {
      } else {
        curSlide++;
      }
      gotoSlide(curSlide);
    };

    const prev = function () {
      if (curSlide == 0) {
      } else {
        curSlide--;
      }
      gotoSlide(curSlide);
    };

    right.addEventListener("click", next);
    left.addEventListener("click", prev);

    //slider next page code

    const trentImageImg = document.querySelectorAll(".trentImageImg");
    trentImageImg.forEach((img) => {
      img.addEventListener("click", () => {
        const getId = img.getAttribute("alt");
        localStorage.setItem("getId", getId);
        window.location.href = "anime.html";
      });
    });
  });

//category API

const displayValue = function (value) {
  return value !== null ? value : "?";
};

function createCategory(category, categoryData) {
  categoryData.map((suny) => {
    category.insertAdjacentHTML(
      "beforeend",
      `<div class="categoryItem">
            <img src="${suny.images.jpg.large_image_url}" alt="${
        suny.mal_id
      }" class="animeCatImage">
            <div class="animeCat">
              <button class="btnFoot" id="${suny.mal_id}">${suny.title}</button>
              <p class="animeCatEpisode">${displayValue(suny.episodes)}</p>
            </div>
          </div>`
    );
    const catBtn = document.querySelectorAll(".btnFoot");
    catBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const getId = btn.getAttribute("id");
        localStorage.setItem("getId", getId);
        window.location.href = "anime.html";
      });
    });
  });
}

fetch("https://api.jikan.moe/v4/anime")
  .then((res) => res.json())
  .then((cate) => {
    const category1 = document.querySelector(".category1");
    const category2 = document.querySelector(".category2");
    const category3 = document.querySelector(".category3");
    const category4 = document.querySelector(".category4");

    createCategory(category1, cate.data.slice(0, 5));
    createCategory(category2, cate.data.slice(5, 10));
    createCategory(category3, cate.data.slice(10, 15));
    createCategory(category4, cate.data.slice(15, 20));
  });

//footer

//Top 10

const gotoAnime = function (anime) {
  const getId = anime.getAttribute("id");
  localStorage.setItem("getId", getId);
  window.location.href = "anime.html";
};

const top10 = document.querySelector(".top10");
fetch("slider.json")
  .then((res) => res.json())
  .then((top) => {
    top.anime.map((suny, index) => {
      const v1 = 1 + index;
      const zero = v1 < 10 ? `0${v1}` : `${v1}`;
      top10.insertAdjacentHTML(
        "beforeend",
        `<div class="top10Item">
            <p class="top10Serial">${zero}</p>
            <div class="borderBottom">
            <img
              src="${suny.images}"
              alt="${suny.anime_id}"
              class="top10ItemImage"
            />
            <div class="animetop10">
              <button class="btnFoot" id="${suny.anime_id}">${suny.title_english}</button>
              <p class="top10ItemEpisode">${suny.episodes}</p>
            </div>
            </div>
          </div>`
      );
    });
    const btnFoot = document.querySelectorAll(".btnFoot");
    btnFoot.forEach((suny) => {
      suny.addEventListener("click", () => gotoAnime(suny));
    });
  });

// //Top Upcoming

const upcoming = document.querySelector(".upcoming");
fetch("https://api.jikan.moe/v4/seasons/upcoming")
  .then((res) => res.json())
  .then((top) => {
    const animeTwenty = top.data.slice(0, 24);
    animeTwenty.map((suny) => {
      upcoming.insertAdjacentHTML(
        "beforeend",
        `<div class="upAnime">
            <img
              src="${suny.images.jpg.large_image_url}"
              alt="${suny.mal_id}"
              class = "upAnimeImages"
            />
            <p class="upAnimeName threeLines1">${suny.title}</p>
          </div>`
      );
    });
    const upAnimeImages = document.querySelectorAll(".upAnimeImages");
    upAnimeImages.forEach((image) => {
      image.addEventListener("click", () => {
        const getId = image.getAttribute("alt");
        localStorage.setItem("getId", getId);
        window.location.href = "anime.html";
      });
    });
  });
