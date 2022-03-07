//Challenge 1: Age in days
function ageInDays() {
  // console.log('It is working');
  var ageResult = prompt('What year were you born?');
  var ageInDay = (2022  - ageResult) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = ('You are ' + ageInDay + ' days old');
  document.getElementById('flex-box-result').innerHTML = textAnswer;
}

function Reset() {
  document.getElementById('flex-box-result').remove();
}

//Challenge 2: Generate Image
function generateImg() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-generator');
  image.src = 'https://picsum.photos/200';
  div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(YourChoise) {
  console.log('Human Choise: ' ,YourChoise.id);
  var humanChoise, botChoise;
  humanChoise = YourChoise.id;

  botChoise = numberToChoise(randToRpsInt());
  console.log('Computer Choise: ',botChoise);

  result = decideWinner(humanChoise, botChoise) //[1, 0] human win | bot lost
  console.log(result);

  message = finalMessage(result); //{message: 'You win!', 'color': 'green'}
  console.log(message);

  rpsFrontEnd(YourChoise.id, botChoise, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoise(number) {
  return['rock','paper','scissors'][number];
}

function decideWinner(YourChoise, botChoise) {
  var rpsDataBase = {
    'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
    'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1}
  };

  var yourScore = rpsDataBase[YourChoise][botChoise];
  var computerScore = rpsDataBase[botChoise][YourChoise];

  return[yourScore, computerScore];
}

function finalMessage([yourscore, computerScore]) {
  if(yourscore === 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if (yourscore === 0.5){
    return {'message': 'You draw!', 'color': 'yellow'};
  } else {
    return {'message': 'You win!', 'color': 'green'}
  }
}

function rpsFrontEnd(humanImageChoise, botImageChoise, finalMessage) {
  var imagesDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }
   //Remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoise] + "' hieght = 150 width= 150 style = ' box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
  messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; height = 150 width = 150 text-align = center font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoise] + "' hieght = 150 width= 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)' >"

  document.getElementById('flex-box-container-3').appendChild(humanDiv);
  document.getElementById('flex-box-container-3').appendChild(messageDiv);
  document.getElementById('flex-box-container-3').appendChild(botDiv);
}

//Challenge 4: Change colors of buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
  if(buttonThingy.value === 'red') {
    buttonsRed();
  } else if(buttonThingy.value === 'green') {
    buttonsGreen();
  } else if(buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random') {
    randomColors();
  }
}
function buttonsGreen() {
  for (let i=0; i <all_buttons.length ; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonsRed() {
  for (let i=0; i <all_buttons.length ; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
    }
  }


function buttonColorReset() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  let choise = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for(let i=0; i < all_buttons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choise[randomNumber]);
  }
}

//Challenge 5: Blackjacks
let blackjackGame = {
  'you': {'scoreSpan': '#your-result', 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0},
  'cards': ['3', '4', '5', '6', '7', '8', '9', 'Queen', 'King', 'Poker'],
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/hit.wav');

document.querySelector('#button-hit').addEventListener('click', blackjackHit);

document.querySelector('#button-deal').addEventListener('click', blackjackDeal);

const dealSound = new Audio('')

function blackjackHit() {
  let card = randomCard();
  console.log(card);
  showCard(card, YOU);
  showCard(card, DEALER);
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 10);
  return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
  let image = document.createElement('img');
  image.src = `static/images/${card}.png`;
  document.querySelector(activePlayer['div']).appendChild(image);
  hitSound.play();
}

function blackjackDeal() {
  let yourImages = document.querySelector('#your-box').querySelectorAll('img');
  let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

  for (i = 0 ; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  for (i = 0 ; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
}
