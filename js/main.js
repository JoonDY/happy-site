document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp()
  }
})

const btnJokes = document.getElementById('btn-jokes');
const btnQuotes = document.getElementById('btn-quotes');
const btnAdvice = document.getElementById('btn-advice');
const jokes = document.getElementById('jokes');
const quotes = document.getElementById('quotes');
const advice = document.getElementById('advice');
const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');
const dogFact = document.getElementById('dog-fact');
const catFact = document.getElementById('cat-fact');

const initApp = () => {
  fetchAll()
}

const fetchAll = () => {
  fetchJoke('https://icanhazdadjoke.com/')
  fetchAdvice('https://api.adviceslip.com/advice')
}

const fetchSettings = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }};

const fetchJoke = (url) => {
  fetch(url, fetchSettings)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    updateDOM(jokes, 'text', data.joke);
});
};

const fetchAdvice = (url) => {
  fetch(url, fetchSettings)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    updateDOM(advice, 'text', data.slip.advice);
});
};

const updateDOM = (element, type, data) => {
  if (type === 'img') {
    if(data.includes('.mp4'))
    element.src = data;
  } else {
    let p = document.createElement('p');
    p.innerText = data;
    element.append(p);
  }
} 