const leftBoxes = document.getElementsByClassName('left');
const rightBoxes = document.getElementsByClassName('right');
const firstBoxes = document.getElementsByClassName('first');
const secondBoxes = document.getElementsByClassName('second');
const thirdBoxes = document.getElementsByClassName('third');
const myBoxes = document.getElementsByClassName('block');

//Left Fortune Boxes
function loopThroughLeft() {

  const fortuneTransition = () => this.classList.toggle('scale-down-center');
  const fortuneTransitionTwo = () => this.classList.toggle('slide-left')

  for(let i = 0; i < this.textContent.length * 2; i++) {
    if([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33].indexOf(i) > -1) {
      setTimeout(fortuneTransition, i * 500);
    } else {
      setTimeout(fortuneTransitionTwo, i * 500);
    }
  };
};

  //Right Fortune Boxes
function loopThroughRight() {

  const fortuneTransitionThree = () => this.classList.toggle('scale-down-center');
  const fortuneTransitionFour = () => this.classList.toggle('slide-right')

  for(let i = 0; i < this.textContent.length * 2; i++) {
    if([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33].indexOf(i) > -1) {
      setTimeout(fortuneTransitionThree, i * 500);
    } else {
      setTimeout(fortuneTransitionFour, i * 500);
    }
  };
};

//box change
function boxChange() {
  const change = () => {
    for (let i = 0; i < leftBoxes.length; i++) {
      firstBoxes[i].classList.add('hide');
      secondBoxes[i].classList.remove('hide');
    }
  };
  setTimeout(change, this.textContent.length * 1000);
};

function boxChangeTwo() {
  const changeTwo = () => {
    for (let i = 0; i < myBoxes.length; i++) {
      secondBoxes[i].classList.add('hide');
      thirdBoxes[i].classList.remove('hide');
    }
  };
  setTimeout(changeTwo, this.textContent.length * 1000);
};

//Event Listeners

for (let i = 0; i < firstBoxes.length; i++) {
  firstBoxes[i].addEventListener('click', boxChange);
};

for (let i = 0; i < secondBoxes.length; i++) {
  secondBoxes[i].addEventListener('click', boxChangeTwo);
};

for(let i = 0; i < leftBoxes.length; i++) {
  leftBoxes[i].addEventListener('click', loopThroughLeft);
};

for(let i = 0; i < rightBoxes.length; i++) {
  rightBoxes[i].addEventListener('click', loopThroughRight);
};

//Fortunes
const messageWrapper = document.getElementById('fortune');

const messageItems = ['You are on the super Naughty List',
  'You are getting nothing but coal',
  'You are getting nothing for Xmas',
  'You have been super Nice',
  'You are getting all the items on your list',
  'Santa forgot what you want',
  'You are on the Nice List',
  'Rudolph told Santa your the BEST!'
];

const messageSection = document.querySelector('section.hide');

const getRandomMessage = function () {
  messageItems.sort(() => 0.5 - Math.random());
  return messageItems[0];
};

function displayMessage() {
  messageWrapper.innerHTML = getRandomMessage();
  messageSection.classList.remove('hide');
  messageSection.classList.add('message');
}

for (let i = 0; i < thirdBoxes.length; i++) {
  thirdBoxes[i].addEventListener('click', displayMessage);
};
