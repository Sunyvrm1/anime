//Top 10

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
              <button class="btn1" id="${suny.anime_id}">${suny.title_english}</button>
              <p class="top10ItemEpisode">${suny.episodes}</p>
            </div>
            </div>
          </div>`
      );

      const detailButton = document.getElementById(suny.anime_id);
      detailButton.addEventListener("click", () => {
        const getId = detailButton.getAttribute("id");
        localStorage.setItem("getId", getId);
        window.location.href = "anime.html";
      });
    });
  });

//Top Upcoming

const upcoming = document.querySelector(".upcoming");
fetch("https://api.jikan.moe/v4/seasons/upcoming")
  .then((res) => res.json())
  .then((top) => {
    top.data.map((suny) => {
      upcoming.insertAdjacentHTML(
        "beforeend",
        `<div class="upAnime">
            <img
              src="${suny.images.jpg.large_image_url}"
              alt="${suny.mal_id}"
            />
            <p class="upAnimeName">${suny.title_english}</p>
          </div>`
      );

      //   const detailButton = document.getElementById(suny.anime_id);
      //   detailButton.addEventListener("click", () => {
      //     const getId = detailButton.getAttribute("id");
      //     localStorage.setItem("getId", getId);
      //     window.location.href = "anime.html";
      //   });
    });
  });
