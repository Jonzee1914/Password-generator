// Assignment code here
// User input variables: 
var enter;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
 
// Characters for password
symbol =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", '"'];
// Numbers
number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Lowercase
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase
uppercase =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

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
      // Continues once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmSymbol = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // Else if for 4 negative options
  if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {
      choices = symbol.concat(number, lowercase, uppercase);
  }
  // Else if for 3 positive options
  else if (confirmSymbol && confirmNumber && confirmUppercase) {
      choices = symbol.concat(number, uppercase);
  }
  else if (confirmSymbol && confirmNumber && confirmLowercase) {
      choices = symbol.concat(number, lowercase);
  }
  else if (confirmSymbol && confirmLowercase && confirmUppercase) {
      choices = symbol.concat(lowercase, uppercase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(lowercase, uppercase);
  }
  // Else if for 2 positive options 
  else if (confirmSymbol && confirmNumber) {
      choices = symbol.concat(number);

  } else if (confirmSymbol && confirmLowercase) {
      choices = symbol.concat(lowercase);

  } else if (confirmSymbol && confirmUppercase) {
      choices = symbol.concat(uppercase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowercase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowercase.concat(uppercase);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(uppercase);
  }
  // Else if for 1 positive option
  else if (confirmSymbol) {
      choices = symbol;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = lowercase;
  }
  else if (confirmUppercase) {
      choices = uppercase.concat(uppercase);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  // Worked with a tutor to incorporate this option
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
// Write password to the #password input
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

function writePassword() {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


