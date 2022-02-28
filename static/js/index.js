//Challenge 1: Age in days
function Age() {
  // console.log('It is working');
  var ageResult = prompt('What year were you born... Goood friend?');
  // console.log('Your age in days in ' + ((2022- ageResult) * 365));
  document.getElementById('flex-box-result').innerHTML = 'Your age in days ' + ((2022 - ageResult) * 365);
}
Age();

function Remove() {
  // console.log('it is working');
  document.getElementById('flex-box-result').innerHTML = ''
}
Remove();