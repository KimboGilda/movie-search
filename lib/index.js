const omdbapiUrl = "http://www.omdbapi.com/";
// const apiKey = "adf1f2d7";
// const apiKey = "8691812a";
const apiKey = "48727053";

const searchButton = document.querySelector(
  'input[type="submit"][value="Search"]'
);
const movieCardsContainer = document.getElementById("movie-cards");
// Your turn to code!
// const urlData = `${omdbapiUrl}?apikey=[${apiKey}]&`;

// add eventlistener to the search area
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const movieSearch = document.getElementById("movie-name");
  const movieTitle = movieSearch.value;
  const url = `${omdbapiUrl}?s=${movieTitle}&apikey=${apiKey}`;
  console.log(url);
  // make a fetch and display the results
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const title = data.Search[0].Title;
      const poster = data.Search[0].Poster;
      const year = data.Search[0].Year;
      const newContent = `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card mb-2">
        <img src="${poster}"class="card-img-top" alt="">
        <div class="card-body">
        <span class="badge bg-primary mb-2">2009</span>
        <h5 class="card-title">${title}</h5>
        </div>`;
      movieCardsContainer.insertAdjacentHTML("beforeend", newContent);
    });
});
