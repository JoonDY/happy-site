export const showContent = (event) => {
  let id = event.target.id;

  if (id === 'btn-jokes') {
    showJoke();
  } else if (id === 'btn-quotes') {
    showQuotes();
  } else if (id === 'btn-advice') {
    showAdvice();
  }
};

const jokes = document.getElementById('show-joke');
const quotes = document.getElementById('show-quote');
const advice = document.getElementById('show-advice');
const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');

const showJoke = () => {
  jokes.classList.remove('hide');
  quotes.classList.add('hide');
  advice.classList.add('hide');

}

const showAdvice = () => {
  jokes.classList.add('hide');
  quotes.classList.add('hide');
  advice.classList.remove('hide');

}

const showQuotes = () => {
  jokes.classList.add('hide');
  quotes.classList.remove('hide');
  advice.classList.add('hide');

}

export const updateDOM = (element, type, data) => {
  if (type === 'img') {
      element.src = data;
    } else {
    element.innerText = data;
  }
};

