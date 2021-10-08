// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Variables for character sets
  var numbers = "1234567890";

  function generatePassword() {
    var confirmLength = prompt("Please choose a length between 8 and 128 characters.");
    
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Please choose a valid length.");
    
    } else {
    alpha = "abcdefghijklmnopqrstuvwxyz",
    retVal = "";

    for (var i = 0, n = alpha.length; i < confirmLength; i++) {
      retVal += alpha.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
