// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passOpt = {};

  let length = prompt("How long should the password be?");
  if (length > 7 && length < 129) {
    let lowercase = confirm("Do you want lowercase letters?");
    let uppercase = confirm("Do you want uppercase letters");
    let numbers = confirm("Do you want numbers?");
    let specChar = confirm("Do you want special characters?");

    passOpt = {
      length: length,
      lowercase: lowercase,
      uppercase: uppercase,
      numbers: numbers,
      specChar: specChar,

    };

    console.log(passOpt);

  } else {
    alert("Your password must be between 8 and 128 characters long");
    getPasswordOptions();
  }



  return passOpt;

}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random * arr.length);
}

// Function to generate password with user input
function generatePassword(specialCharacters, lowerCasedCharacters, upperCasedCharacters, numericCharacters) {
  let options = getPasswordOptions();
  let pass = '';
  console.log(pass, options);

  for (i = 0; i < options.length; i++) {
    let whichType = [specialCharacters, numericCharacters, upperCasedCharacters, lowerCasedCharacters];
    console.log(whichType);

    if (passOpt.specChar == false) {
      const index = whichType.indexOf(specialCharacters);
      whichType.splice(index, 1);
    } else if (passOpt.numbers == false) {
      const index = whichType.indexOf(numericCharacters);
      whichType.splice(index, 1);
    } else if (passOpt.lowercase == false) {
      const index = whichType.indexOf(lowerCasedCharacters);
      whichType.splice(index, 1);
    } else if (passOpt.uppercase == false) {
      const index = whichType.indexOf(upperCasedCharacters);
      whichType.splice(index, 1);
    }

    let choice = Math.floor(Math.random() * whichType.length)
    pass.concat(whichType[choice][getRandom(whichType[choice])]);
    console.log(pass);
  }

  return pass;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
    specialCharacters,
    lowerCasedCharacters,
    upperCasedCharacters,
    numericCharacters
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
