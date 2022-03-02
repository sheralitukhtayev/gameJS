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

  humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoise] + "' style = ' box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv)

  botDiv.innerHTML = "img src='" + imagesDataBase[botImageChoise] + "'> "
  document.getElementById('flex-box-rps-div').appendChild(botDiv)
}