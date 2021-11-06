// Assignment code here
// User input variables: 
var enter;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
 
// Characters for password
var symbol =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", " ", '"'];
// Numbers
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Lowercase
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase
var uppercase =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userPasswordChoices;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Start function to generate password
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters long would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Character variable prompts
      confirmNumber = confirm("Would you like to include numbers?");
      confirmSymbol = confirm("Would you like to include special characters?");
      confirmUppercase = confirm("Would you like to include Uppercase letters?");
      confirmLowercase = confirm("Would you like to include Lowercase letters?");
  };

  // Else if for 4 negative options
  if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      userPasswordChoices = alert("You must choose a criteria!");

  }
  // If statements based on user prompt input
  // Else if for 4 positive options
  else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {
      userPasswordChoices = symbol.concat(number, lowercase, uppercase);
  }
  // Else if for 3 positive options
  else if (confirmSymbol && confirmNumber && confirmUppercase) {
      userPasswordChoices = symbol.concat(number, uppercase);
  }
  else if (confirmSymbol && confirmNumber && confirmLowercase) {
      userPasswordChoices = symbol.concat(number, lowercase);
  }
  else if (confirmSymbol && confirmLowercase && confirmUppercase) {
      userPasswordChoices = symbol.concat(lowercase, uppercase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      userPasswordChoices = number.concat(lowercase, uppercase);
  }
  // Else if for 2 positive options 
  else if (confirmSymbol && confirmNumber) {
      userPasswordChoices = symbol.concat(number);

  } else if (confirmSymbol && confirmLowercase) {
      userPasswordChoices = symbol.concat(lowercase);

  } else if (confirmSymbol && confirmUppercase) {
      userPasswordChoices = symbol.concat(uppercase);
  }
  else if (confirmLowercase && confirmNumber) {
      userPasswordChoices = lowercase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      userPasswordChoices = lowercase.concat(uppercase);

  } else if (confirmNumber && confirmUppercase) {
      userPasswordChoices = number.concat(uppercase);
  }
  // Else if for 1 positive option
  else if (confirmSymbol) {
      userPasswordChoices = symbol;
  }
  else if (confirmNumber) {
      userPasswordChoices = number;
  }
  else if (confirmLowercase) {
      userPasswordChoices = lowercase;
  }
  else if (confirmUppercase) {
      userPasswordChoices = uppercase.concat(uppercase);
  };

  // password as array placeholder for length selected
  var password = [];

  // Random selection variables:
  for (var i = 0; i < enter; i++) {
      var pickChoices = userPasswordChoices[Math.floor(Math.random() * userPasswordChoices.length)];
      password.push(pickChoices);
  }
  // Join array then convert to string
  password = password.join("");
  return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


