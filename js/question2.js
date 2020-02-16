const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
   .then(function(response) {
      return response.json();
   })
   .then(function(json) {
      createGames(json);
   })
   .catch(function(error) {
      console.log(error);
   });

function createGames(json) {
   const results = json.results;
   console.dir(results);

   const resultsContainer = document.querySelector(".results");

   let html = "";

   results.forEach(function(result) {
      let imageUrl = "https://via.placeholder.com/250";

      if (result.background_image) {
         imageUrl = result.background_image;
      }

      html += ` <div class="game">
                  <h2>${result.name}</h2>
                  <img src="${imageUrl}" alt="Name of game">
                </div>`;
   });

   resultsContainer.innerHTML = html;
}
