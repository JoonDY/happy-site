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
  const btnAdvice = document.getElementById('btn-advice');
  const btnRefresh = document.getElementById('btn-refresh');

  [btnJokes, btnQuotes, btnAdvice].forEach((btn) => {
    btn.addEventListener('click', showContent);
  });

  btnRefresh.addEventListener('click', fetchAll);
};










