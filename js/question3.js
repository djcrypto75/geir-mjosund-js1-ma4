const gameDetails = `https://api.rawg.io/api/games/4200`;

fetch(gameDetails)
   .then(function(response) {
      return response.json();
   })
   .then(function(json) {
      createGameDetails(json);
   })
   .catch(function() {
      console.dir(error);
   });

function createGameDetails(json) {
   console.dir(json);

   const name = document.querySelector("h1");
   name.innerHTML = json.name;

   const image = document.querySelector(".image");
   image.style.backgroundImage = "url('https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg')";

   const description = document.querySelector(".description");
   description.innerHTML = json.description;
}
