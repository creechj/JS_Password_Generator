// Assignment Code
var generateBtn = document.querySelector("#generate");

// generateBtn prompts user for inputs:
// length of password (8-128)
// password character types (lower, upper, numeric, spec. char.) at least one
// write password to textarea

// passwordParameters function for user prompts
function passwordParameters(){
  
  // need this to check length, provide feedback, ask for input again; until correct
  var passwordLength = window.prompt("How long would you like your password to be? Please choose a number from 8 to 128");
  console.log(passwordLength);
  

  
  var passwordLower = window.confirm("Would you like to include lowercase characters in your password? Ok for Yes or Cancel for No");
  console.log(passwordLower);
}

passwordParameters();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);