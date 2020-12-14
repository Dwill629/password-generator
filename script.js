// Assignment Code
var generateBtn = document.querySelector("#generate");


  var upperCaseArray = ["A”, “B”, “C”, “D”, “E”, “F”, “G”, “H”, “I”, “J”, “K”, “L”, “M”, “N”, “O”, “P”, “Q”, “R”, “S”, “T”, “U”, “V”, “W”, “X”, “Y”, “Z" ];

  var lowerCaseArray = ["a”, “b”, “c”, “d”, “e”, “f”, “g”, “h”, “i”, “j”, “k”, “l”, “m”, “n”, “o”, “p”, “q”, “r”, “s”, “t”, “u”, “v”, “w”, “x”, “y”, “z" ];

  var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=" ];



// Write password to the #password input
function writePassword() {

  var pwLength = parseInt( prompt("choose your desired password length between 8 and 128 characters.")); 
  if (isNaN(pwLength) === true){
    alert ("The password length must be provided as a number.");
    return;
  } 

  if (pwLength < 8) {
    alert ("The password must contain at least 8 characters");
  }
  
  if (pwLength > 128) {
    alert ("You have selected too many characters");
  }

  // if(pwLength >=== 8 && pwlength <=== 128) {
  //   alert("Your password will be " + pwLength + "characters long.");
  // } else if (isNaN(pwLength) === true) {
  //   alert ("The password length must be provided as a number.");
  // } else {
  //   alert ("That is not a valid password length");
  // }

  var hasUpperCase = confirm ("would you like to include an uppercase character?")
  var hasLowerCase = confirm ("would you like to include a lowercase character?")
  var hasNum = confirm ("would you like to include a number?")
  var hasChar = confirm ("would you like to include a special character?")

if (hasUpperCase === false &&
  hasLowerCase === false &&
  hasNum === false &&
  hasChar === false) {
    alert ("You must select at least one type of character.")
  }

  var pwInput = {
    hasUpperCase : hasUpperCase,
    hasLowerCase : hasLowerCase,
    hasNum : hasNum,
    hasChar : hasChar
  };

  return pwInput;
}

// Function to get random character from an array

function getRandom (arr) {
  var randIndex = Math.floor (Math.random() * arr.length);
  var randElement = arr[randIndex];
  
  return randElement;
}




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
