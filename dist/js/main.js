const slide = document.querySelectorAll(".slide");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let curSlide = 0;
const maxSlide = slide.length;

slide.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

const gotoSlide = function (gotoSlide) {
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - gotoSlide)}%)`;
  });
};

const next = function(){
    if (curSlide == maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      gotoSlide(curSlide);
}

const prev = function(){
    if (curSlide == 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      gotoSlide(curSlide);
}

right.addEventListener("click", next);
left.addEventListener("click", prev);
