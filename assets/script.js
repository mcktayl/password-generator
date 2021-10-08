// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "?", "-", "+"];
var retVal = [];
var userChoice;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    //Asks user to confirm length -- if they do not choose a valid length, prompts them once again
    var confirmLength = prompt("Please choose a length between 8 and 128 characters.");
    
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Please choose a valid length.");
      confirmLength = prompt("Please choose a length between 8 and 128 characters.");
    }
    
    //Asks user what criteria to include in password
    var confirmLowerCase = confirm("Would you like to include lowercase letters?");
    var confirmUpperCase = confirm("Would you like to include uppercase letters?");
    var confirmNumbers = confirm("Would you like to include numbers?");
    var confirmSpecialChar = confirm("Would you like to include special characters?");


    //If all criteria confirmed
    if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecialChar) {
      userChoice = lowerCase.concat(upperCase, numbers, specialChar);

    //If no criteria confirmed
    } else if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmLowerCase) {
      alert("Please select some criteria.");
      
    //If 3 criteria confirmed
    } else if (confirmLowerCase && confirmUpperCase && confirmNumbers && !confirmSpecialChar) {
      userChoice = lowerCase.concat(upperCase, numbers);
    
    } else if (confirmLowerCase && confirmUpperCase && !confirmNumbers && confirmSpecialChar) {
      userChoice = lowerCase.concat(upperCase, specialChar);

    } else if (confirmLowerCase && !confirmUpperCase && confirmNumbers && confirmSpecialChar) {
      userChoice = lowerCase.concat(numbers, specialChar);
    
    } else if (!confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecialChar) {
      userChoice = upperCase.concat(numbers, specialChar);
    
    //If 2 criteria confirmed
    } else if (confirmLowerCase && confirmUpperCase && !confirmNumbers && !confirmSpecialChar) {
      userChoice = lowerCase.concat(upperCase);
    
    } else if (confirmLowerCase && !confirmUpperCase && confirmNumbers && !confirmSpecialChar) {
      userChoice = lowerCase.concat(numbers);
    
    } else if (!confirmLowerCase && confirmUpperCase && confirmNumbers && !confirmSpecialChar) {
      userChoice = upperCase.concat(numbers);
    }
    //Password generating loop
    for (var i = 0; i < confirmLength; i++) {
        retVal.push (userChoice[Math.floor(Math.random() * userChoice.length)])
      }
      return retVal.join("");
    }
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
