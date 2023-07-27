const API_KEY = "";

console.log("EXERCISE 1:\n==========\n");
let searchButton = document.getElementById("submitSearch");
let inputText = document.getElementById("searchWord");
let feedbackPara = document.getElementById("feedback");
let image = document.getElementById("img");

console.log("EXERCISE 2:\n==========\n");
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  getGif();
});

function getGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=azS1HJ1Agk3MG3ifpVR3gnddkMNgOX7G&" +
      searchWord.value
  )
    .then((response) => response.json())
    .then((res) => {
      feedbackPara.textContent = "";
      img.src = res.data.images.original.url;
      searchInput.value = "";
    })
    .catch((err) => {
      console.error(err);
      feedbackPara.textContent = err.message;
    });

  //   )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
}
console.log("EXERCISE 3:\n==========\n");

console.log("EXERCISE 4:\n==========\n");
