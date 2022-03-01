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
  console.log(YourChoise.id);
  var humanChoise, botChoise;
  // humanChoise = YourChoise.id;
  // botChoise =
  // result = decideWinner(humanChoise, botChoise) //[1, 0] human win | bot lost
  // message = finalMessage[result]; //{message: 'You win!', 'color': 'green'}
  rpsFrontEnd(YourChoise.id, botChoise, message);
}

function randomRpsint() {
  return Math.floor(Math.random() * 3);
}