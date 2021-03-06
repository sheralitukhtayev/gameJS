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
  'cards': ['2' ,'3', '4', '5', '6', '7', '8', '9', '10' , 'Jack' , 'Queen', 'King', 'Poker'],
  'cardsMap': {'2':2 ,'3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10 , 'Jack':10 , 'Queen':10, 'King':10, 'Poker': 1},
  'wins' : 0,
  'losses' : 0,
  'drews' : 0,
  'isStand' : false,
  'turnsOver' : false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/hit.wav');

document.querySelector('#button-hit').addEventListener('click', blackjackHit);

document.querySelector('#button-stand').addEventListener('click', dealerLogic  );

document.querySelector('#button-deal').addEventListener('click', blackjackDeal);

function blackjackHit() {
  if(blackjackGame['isStand']=== false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
  if(activePlayer['score']<=21) {
  let image = document.createElement('img');
  image.src = `static/images/${card}.png`;
  document.querySelector(activePlayer['div']).appendChild(image);
  hitSound.play();
  }
}

function blackjackDeal() {
  if(blackjackGame['turnsOver'] === true) {

    blackjackGame['isStand'] = false;

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');


    document.querySelector('#your-result').style.color  = '#ffffff';
    document.querySelector('#dealer-result').style.color  = '#ffffff';

    for (i = 0 ; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    for (i = 0 ; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-result').textContent = 0;
    document.querySelector('#dealer-result').textContent = 0;

    document.querySelector('#your-result').style.color = '#ffffff';
    document.querySelector('#dealer-result').style.color = '#ffffff';

    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'black';

    blackjackGame['turnsOver'] = true;
  }
}

function updateScore(card, activePlayer) {
  if (card === 'A'){
  //If adding 11 keeps me below 21, add 11. Otherwisw, add 1
    if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }

  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function showScore(activePlayer) {
  if(activePlayer['score'] > 21 ) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;

  while(DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000 )
  }
  blackjackGame['turnsOver'] = true;
  let winner = computerWinner();
  showResult(winner);
}

//Computer wins and return who just won
//update the wins,drews,losses
function computerWinner() {
  let winner;

  if(YOU['score'] <= 21) {
    //Condition : higher score than dealer or when dealer busts but you're 21 or under
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
      blackjackGame['wins']++;
      winner = YOU;
    } else if (YOU['score'] < DEALER['score']) {
      blackjackGame['losses']++;
      winner = DEALER;
    } else if (YOU['score'] === DEALER['score']) {
      blackjackGame['drews']++;
    }

    //condition: When you busts but dealer doesn't
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    blackjackGame['losses']++;
    winner = DEALER;

  // condition: when you AND the dealer busts
  } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
    blackjackGame['drews'];
  }

  console.log(blackjackGame);
  return winner;
}

function showResult(winner) {
  let message, messageColor ;

  if(blackjackGame['turnsOver'] === true) {

      if (winner === YOU) {
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = 'You won!';
        messageColor = 'green';
      } else if(winner === DEALER) {
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        message = 'You lost!';
        messageColor = 'red';
      } else {
        document.querySelector('#drews').textContent = blackjackGame['drews'];
        message = 'You drew';
        messageColor = 'black';
      }

      document.querySelector('#blackjack-result').textContent = message;
      document.querySelector('#blackjack-result').style.color = messageColor;

  }
}