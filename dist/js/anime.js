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

// fetch

const displayValue = function (value) {
  return value !== null ? value : "?";
};

const setAnimeValues = function (matchId) {
  const animePlatform = document.querySelector(".animePlatform");
  const animeName = document.querySelector(".animeName");
  const animeTitle = document.querySelector(".animeTitle");
  const animeEpisode = document.querySelector(".animeEpisode");
  const animeDuration = document.querySelector(".animeDuration");
  const playButton = document.querySelector(".trailerBtn");
  const listBtn = document.querySelector(".listBtn");
  const animePlot = document.querySelector(".animePlot");
  const japTitle = document.querySelector(".japTitle");
  const Syn = document.querySelector(".Syn");
  const animeDate = document.querySelector(".animeDate");
  const animeSeason = document.querySelector(".animeSeason");
  const animeYear = document.querySelector(".animeYear");
  const animeDur = document.querySelector(".animeDur");
  const animeAir = document.querySelector(".animeAir");
  const animeScore = document.querySelector(".animeScore");

  animePlatform.innerHTML = displayValue(matchId.type);
  animeName.innerHTML = matchId.title_english || matchId.title;
  animeTitle.innerHTML = matchId.title_english || matchId.title;
  animeEpisode.innerHTML = displayValue(matchId.episodes);
  animeDuration.innerHTML = displayValue(matchId.duration);
  playButton.href = matchId.trailer.url;
  listBtn.href = matchId.url;
  animePlot.innerHTML = matchId.synopsis;
  japTitle.innerHTML = matchId.title_japanese;
  Syn.innerHTML = matchId.title_japanese;
  animeDate.innerHTML = matchId.aired.string;
  animeSeason.innerHTML = displayValue(matchId.season);
  animeYear.innerHTML = matchId.year;
  animeDur.innerHTML = matchId.duration;
  animeAir.innerHTML = matchId.status;
  animeScore.innerHTML = displayValue(matchId.score);

  // Add genres
  matchId.genres.forEach((genre) => {
    const animeGenre1 = document.querySelector(".animeGenre");
    animeGenre1.insertAdjacentHTML(
      "beforeend",
      `<li><a href="${genre.url}" target="_blank">${genre.name}</a></li>`
    );
  });

  // Add studio
  const animeStud1 = document.querySelector(".animeStud");
  if (matchId.studios && matchId.studios.length > 0) {
    animeStud1.innerHTML = `<a href="${matchId.studios[0].url}" target="_blank">${matchId.studios[0].name}</a>`;
  } else {
    animeStud1.innerHTML = "No studio information";
  }

  // Add Producers
  matchId.producers.forEach((prod, index) => {
    const animeProd1 = document.querySelector(".animeProd");
    const comma = index < matchId.producers.length - 1 ? ", " : "";
    animeProd1.insertAdjacentHTML(
      "beforeend",
      `<a href="${prod.url}" target="_blank">${prod.name}</a>${comma}`
    );
  });
};

const storeId = localStorage.getItem("getId");
const animeBG = document.querySelector(".animeBG");
const animeImage = document.querySelector(".animeImage");

fetch("slider.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const matchId = data.anime.find(
      (ani) => ani.anime_id.toString() === storeId
    );

    if (matchId) {
      animeBG.src = matchId.images;
      animeImage.src = matchId.images;
      Syn.innerHTML = matchId.Synonyms;
      setAnimeValues(matchId);
    }
  });

// 2nd api data show

fetch("https://api.jikan.moe/v4/seasons/upcoming")
  .then((res) => res.json())
  .then((upcome) => {
    console.log(upcome);
    const matchId = upcome.data.find(
      (ani) => ani.mal_id.toString() === storeId
    );

    if (matchId) {
      animeBG.src = matchId.images.jpg.large_image_url;
      animeImage.src = matchId.images.jpg.large_image_url;
      Syn.innerHTML = matchId.title_japanese;
      setAnimeValues(matchId);
    }
  });
