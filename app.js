const API_KEY = "";

let searchButton = document.getElementById("submitSearch");
let inputText = document.getElementById("searchWord");
let feedbackPara = document.getElementById("feedback");
let img = document.querySelector("img");

searchButton.addEventListener("click", (event) => {
  // event.preventDefault();
  getGif();
});

function getGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=azS1HJ1Agk3MG3ifpVR3gnddkMNgOX7G&s=" +
      inputText.value
    // { mode: "cors" }
  )
    .then((response) => response.json())
    .then((res) => {
      feedbackPara.textContent = "";
      img.src = res.data.images.original.url;
      inputText.value = "";
    })
    .catch((err) => {
      console.error(err);
      feedbackPara.textContent = err.message;
    });
}
// let searchBtn = document.getElementById("submitSearch");
// let searchInput = document.getElementById("searchWord");
// let feedbackEle = document.getElementById("feedback");
// let img = document.querySelector("img");

// searchBtn.addEventListener("click", () => {
//   fetch(
//     "https://api.giphy.com/v1/gifs/translate?api_key=54f0MhTKuI2nxwD9nhEvN4ifNwephcpz&s=" +
//       searchInput.value,
//     { mode: "cors" }
//   )
//     .then((response) => response.json())
//     .then((res) => {
//       feedbackEle.textContent = "";
//       img.src = res.data.images.original.url;
//       searchInput.value = "";
//     })
//     .catch((err) => {
//       console.error(err);
//       feedbackEle.textContent = err.message;
//     });
// });
