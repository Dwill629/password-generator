// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];



// Write password to the #password input
// Funtion to prompt user for pw type selection
function createPassword() {

  //Variable to store the the number of characters from user input
  var pwLength = parseInt(prompt("choose your desired password length between 8 and 128 characters."));
  if (isNaN(pwLength) === true) {
    alert("The password length must be provided as a number.");
    return;
  }

  //conditional to make sure pw is longer than 8 characters
  if (pwLength < 8) {
    alert("The password must contain at least 8 characters"); return;
  }

  //conditional to make sure pw is not more than 128 characters 
  if (pwLength > 128) {
    alert("You have selected too many characters");
    return;
  }


  //variables to store boolean on which characters to include 
  var hasUpperCase = confirm("would you like to include an uppercase character?");
  var hasLowerCase = confirm("would you like to include a lowercase character?");
  var hasNum = confirm("would you like to include a number?");
  var hasSpecialChar = confirm("would you like to include a special character?");

  //conditional statement to make sure the user selects at least one character type
  if (hasUpperCase === false &&
    hasLowerCase === false &&
    hasNum === false &&
    hasSpecialChar === false) {
    alert("You must select at least one type of character."); return;
  }

  //object to store user input
  var pwInput = {
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNum: hasNum,
    hasSpecialChar: hasSpecialChar,
    pwLength: pwLength
  };

  return pwInput;
}

// Function to get random character from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//function to generate pw with user input
function generatePassword() {

  var pwTypeChoice = createPassword();
  //variable to store password as it's being concatenated
  var finalPassword = [];

  //Array to store types of characters to include
  var possibleCharacters = [];

  //Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedChar = [];

  //conditional statement that adds array of uppercase into array of possible characters based on user input
  if (pwTypeChoice.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCaseArray);
    guaranteedChar.push(getRandom(upperCaseArray));
  }

  //conditional statement that adds array of lowercase into array of possible characters based on user input
  if (pwTypeChoice.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseArray);
    guaranteedChar.push(getRandom(lowerCaseArray));
  }

  //conditional statement that adds array of numbers into array of possible characters based on user input
  if (pwTypeChoice.hasNum) {
    possibleCharacters = possibleCharacters.concat(numArray);
    guaranteedChar.push(getRandom(numArray));
  }

  //conditional statement that adds array of special characters into array of possible characters based on user input
  if (pwTypeChoice.hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialCharArray);
    guaranteedChar.push(getRandom(specialCharArray));
  }

  //for loop to pull random characters of the remaining password length using possibleCharacters array and putting into possibleChar variable.
  for (var i = 0; i < pwTypeChoice.pwLength - guaranteedChar.length; i++) {
    var possibleChar = getRandom(possibleCharacters);

    console.log(possibleChar);
    //to push random characters into final password for the remaining password length amount.
    finalPassword.push(possibleChar);
  }

  //concatenates the guarenteedChar array with the final password pushing all needed characters into the lastPassword variable
  var lastPassword = finalPassword.concat(guaranteedChar);

  //transform the final password into a string and pass into writePassword
  return lastPassword.join("");

}

//Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

//link Password to the #password element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
