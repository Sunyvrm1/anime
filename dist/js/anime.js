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

const storeId = localStorage.getItem("getId");
console.log(storeId);

fetch("slider.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const matchId = data.anime.find(
      (ani) => ani.anime_id.toString() === storeId
    );

    if (matchId) {
      console.log("correct");
      const animeBG = document.querySelector(".animeBG");
      const animeImage = document.querySelector(".animeImage");
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
      const animeStud = document.querySelector(".animeStud");
      const animeProd = document.querySelector(".animeProd");
      const animeGenre = document.querySelectorAll(".animeGenre li");

      animeBG.src = matchId.images;
      animeImage.src = matchId.images;
      animePlatform.innerHTML = matchId.type;
      animeName.innerHTML = matchId.title_english;
      animeTitle.innerHTML = matchId.title_english;
      animeEpisode.innerHTML = matchId.episodes;
      animeDuration.innerHTML = matchId.duration;
      playButton.href = matchId.trailer.url;
      listBtn.href = matchId.url;
      animePlot.innerHTML = matchId.synopsis;
      japTitle.innerHTML = matchId.title_japanese;
      Syn.innerHTML = matchId.Synonyms;
      animeDate.innerHTML = matchId.aired.string;
      animeSeason.innerHTML = matchId.season;
      animeYear.innerHTML = matchId.year;
      animeDur.innerHTML = matchId.duration;
      animeAir.innerHTML = matchId.status;
      animeScore.innerHTML = matchId.score;
      //genre
      matchId.genres.forEach((genre) => {
        const animeGenre1 = document.querySelector(".animeGenre");
        animeGenre1.insertAdjacentHTML(
          "beforeend",
          `<li><a href="${genre.url}" target="_blank">${genre.name}</a></li>`
        );
      });
      //studio
      animeStud.innerHTML = `<a href="${matchId.studios[0].url}" target="_blank">${matchId.studios[0].name}</a>`;
      //Producers
      matchId.producers.forEach((prod, index) => {
        const animeProd1 = document.querySelector(".animeProd");
        const comma = index < matchId.producers.length - 1 ? ", " : "";
        animeProd1.insertAdjacentHTML(
          "beforeend",
          `<a href="${prod.url}" target="_blank">${prod.name}</a>${comma}`
        );
      });
    }
  });
