// Assignment Code
var generateBtn = document.querySelector("#generate");

// generateBtn prompts user for inputs:
// length of password (8-128)
// password character types (lower, upper, numeric, spec. char.) at least one
// write password to textarea

// function for password length user prompt
// uses if logic to check for correct length range and loops until correct
var passwordCharacters
function passwordLength() {
    passwordCharacters = window.prompt("How long would you like your password to be? Please choose a number from 8 to 128");
    console.log(passwordCharacters);
    if (passwordCharacters < 8) {
      window.alert("Password must be 8-128 characters long.");
      passwordLength();
    } else if (passwordCharacters > 128) {
      window.alert("Password must be 8-128 characters long.");
      passwordLength();
    } else if (passwordCharacters == null){
      window.alert("Password must be 8-128 characters long.");
      passwordLength();
    }
}

passwordLength();

// user confirms for character type inclusions
var passwordLower = window.confirm("Would you like to include lowercase characters in your password? Ok for Yes or Cancel for No");
console.log(passwordLower);

var passwordUpper = window.confirm("Would you like to include uppercase characters in your password? Ok for Yes or Cancel for No");
console.log(passwordUpper);

var passwordSpecial = window.confirm("Would you like to include special characters in your password? Ok for Yes or Cancel for No");
console.log(passwordSpecial);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);