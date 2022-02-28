// alert('hello');
console.log('hello!');
// prompt('What is your age?');

function Age(){
  console.log('It is working');
  ageResult = prompt('What is your Year?');
  console.log('Your age in days in ' + ((2022- ageResult) * 365));
  document.getElementById('Age').innerHTML = 'Your age in days ' + ((2022 - ageResult) * 365);
}
Age();

function Remove() {
  console.log('it is working');
  document.getElementById('Age').innerHTML = ''
}
Remove();