import { fetchAll } from "./getData.js";
import { showContent } from "./changeContent.js"

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp()
  }
})

const initApp = () => {
  fetchAll();

  const btnJokes = document.getElementById('btn-jokes');
  const btnQuotes = document.getElementById('btn-quotes');
  const btnRefresh = document.getElementById('btn-refresh');
  const btnDog = document.getElementById('btn-dog');
  const btnCat = document.getElementById('btn-cat');

  [btnJokes, btnQuotes, btnDog, btnCat].forEach((btn) => {
    btn.addEventListener('click', showContent);
  });

  btnRefresh.addEventListener('click', fetchAll);
};