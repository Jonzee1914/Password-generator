// Assignment code here
// generator functions
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
  var symbols = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\ ";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);