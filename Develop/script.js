// Assignment code here
var generateBtn = document.querySelector("#generate");

// global var
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","<",">","?","-","_","=","+","[","{","]","}"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function
function generatePassword () {
    var numberPrompt = parseInt (window.prompt ("How many character would you like ? Min 8 - Max 128"));
    console.log("password length" + numberPrompt );

    if (!numberPrompt) {
        alert ("Value required");
        // generatePassword ();
        return null;

    } else if ( numberPrompt <8 || numberPrompt > 128) {
        alert ("Invalid");
        // generatePassword ();
        return null;
 
    } else {
        var lowerCaseprompt = confirm("Would you like lower case letters ?");
        console.log ("lowercase" + lowerCaseprompt);
        var upperCaseprompt = confirm("Would you like upper case letters ?");
        console.log ("uppercase" + upperCaseprompt);
        var numbersConfirm = confirm("Would you like numbers ?");
        console.log ("numbers" + numbersConfirm);
        var specialCharprompt = confirm("Would you like special characters ?");
        console.log ("special characters" + specialCharprompt);
    };

    // Empty variable for the password lenght and new password
    var passwordLength = [];
    var newPassword = [];

    if (!lowerCaseprompt && !upperCaseprompt && !specialCharprompt && !numbersConfirm) {
        alert ("value required");
        return null;
    }

    if (lowerCaseprompt) {
        passwordLength = passwordLength.concat(lowerCase);
        console.log(passwordLength);
    }

    if (upperCaseprompt) {
        passwordLength = passwordLength.concat(upperCase);
        console.log(passwordLength);
    }

    if (numbersConfirm) {
        passwordLength = passwordLength.concat(number);
        console.log(passwordLength);
    }

    if (specialCharprompt) {
        passwordLength = passwordLength.concat(specialChar);
        console.log(passwordLength);
    }
  
    // for Loop for chosen length random selection
    for (var i = 0; i < numberPrompt; i++) {
        var randomLetter = passwordLength[Math.floor(Math.random() * passwordLength.length)];
        newPassword.push(randomLetter);
    }
    // console.log(passwordLength);

  // console log result and return new password
  console.log("Your Pasword is: " + newPassword);
  return newPassword.join("");
  
}