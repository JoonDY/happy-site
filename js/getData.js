import { updateDOM } from "./changeContent.js";

export const fetchAll = () => {
  fetchJoke();
  fetchQuote();
  fetchDogImg();
  fetchCatImg();
}

const jokes = document.getElementById('jokes');
const quotes = document.getElementById('quotes');
const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');

const fetchSettings = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }};

const fetchJoke = () => {
  fetch('https://icanhazdadjoke.com/', fetchSettings)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    updateDOM(jokes, 'text', data.joke);
});
};


const fetchQuote = () => {
  fetch('https://api.quotable.io/random', fetchSettings)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    updateDOM(quotes, 'text', data.content);
});
};

const fetchDogImg = () => {
  fetch('https://random.dog/woof.json?filter=mp4', fetchSettings)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    updateDOM(dogImg, 'img', data.url);
});
};

const fetchCatImg = () => {
  fetch('https://aws.random.cat/meow', fetchSettings)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    updateDOM(catImg, 'img', data.file);
});
};

