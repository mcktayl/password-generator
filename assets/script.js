// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    
    var confirmLength = prompt("Please choose a length between 8 and 128 characters.");
    
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Please choose a valid length.");
      confirmLength = prompt("Please choose a length between 8 and 128 characters.");
      // Fix this -- needs to show prompt again when this fails
    }

    var confirmUpperCase = confirm("Would you like to include uppercase letters?");

    var confirmNumbers = confirm("Would you like to include numbers?");

    if (confirmNumbers && confirmUpperCase) {
      console.log("it worked!");
      numbers = "1234567890",
      alpha = "abcdefghijklmnopqrstuvwxyz",
      uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
      symbols = "!#$%&'()*+,-./:;<=>?@[]",
      userChoice = alpha.concat(numbers+uppers);
      retVal = "";

      for (var i = 0; i < confirmLength; i++) {
        retVal += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
      }
      return retVal;
    }

    else if (!confirmNumbers && confirmUpperCase) {
      console.log("it worked!");
      numbers = "1234567890",
      alpha = "abcdefghijklmnopqrstuvwxyz",
      uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
      symbols = "!#$%&'()*+,-./:;<=>?@[]",
      userChoice = alpha.concat(uppers);
      retVal = "";

      for (var i = 0; i < confirmLength; i++) {
        retVal += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
      }
      return retVal;
    }
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// alpha = "abcdefghijklmnopqrstuvwxyz",
    // retVal = "";

    // for (var i = 0, n = alpha.length; i < confirmLength; i++) {
    //   retVal += alpha.charAt(Math.floor(Math.random() * n));