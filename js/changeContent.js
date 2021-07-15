export const showContent = (event) => {
  let id = event.target.id;

  if (id === 'btn-jokes') {
    showJoke();
  } else if (id === 'btn-quotes') {
    showQuotes();
  } else if (id === 'btn-dog') {
    showDog();
  } else if (id === 'btn-cat') {
    showCat();
  } 
};

const jokes = document.getElementById('show-joke');
const quotes = document.getElementById('show-quote');
const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');

const showJoke = () => {
  jokes.classList.remove('hide');
  quotes.classList.add('hide');
  advice.classList.add('hide');

}

const showQuotes = () => {
  jokes.classList.add('hide');
  quotes.classList.remove('hide');
  advice.classList.add('hide');

}

const showDog = () => {
  dogImg.classList.remove('hide');
  catImg.classList.add('hide');
}

const showCat = () => {
  dogImg.classList.add('hide');
  catImg.classList.remove('hide');
}

export const updateDOM = (element, type, data) => {
  if (type === 'img') {
      element.src = data;
    } else {
    element.innerText = data;
  }
};

