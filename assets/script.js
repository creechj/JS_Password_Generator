// Assignment Code
var generateBtn = document.querySelector("#generate");

// generateBtn prompts user for inputs:
// length of password (8-128)
// password character types (lower, upper, numeric, spec. char.) at least one
// write password to textarea

// function for password length user prompt - uses if logic to check for correct length range and loops until correct
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
    console.log(passwordCharacters);
}

passwordLength();

// function for character type inclusions - uses if logic to check that at least one option is confirmed and loops until true
var passwordLower;
var passwordUpper;
var passwordSpecial;
function passwordInclusions() {
  passwordLower = window.confirm("Would you like to include lowercase characters in your password? Ok for Yes or Cancel for No");
  console.log(passwordLower);
  passwordUpper = window.confirm("Would you like to include uppercase characters in your password? Ok for Yes or Cancel for No");
  console.log(passwordUpper);
  passwordSpecial = window.confirm("Would you like to include special characters in your password? Ok for Yes or Cancel for No");
  console.log(passwordSpecial);
  if(!passwordLower && !passwordUpper && !passwordSpecial){
    window.alert("Please select at least on character type to include.");
    passwordInclusions();
  }
}

passwordInclusions();

// function to collect user parameters and calculate password - randomly selects array values and pushes to password-storing array with length equal to user selection
// password array variable will be populated in this function before being written via writePassword below
var password = [];
function generatePassword(len,low,upr,spl){
  var specChars = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}",",","~","\\"," "];
  var alphaBet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var randChar
  
  // function to randomize selections
  // compiles variables that randomly select an index for each character type array and store in a new index
  // an index for this array is selected at random and the result is pushed to the password array
  var randomCharacter = function(){
    var randomSpecial = specChars[Math.floor(Math.random() * specChars.length)];
    var randomUpper = alphaBet[Math.floor(Math.random() * alphaBet.length)];
    var randomLower = alphaBet[Math.floor(Math.random() * alphaBet.length)].toLowerCase();
    var randomNumber = Math.floor(Math.random() * 10);
    var characterSelection = [randomSpecial, randomUpper, randomLower, randomNumber];
    randChar = characterSelection[Math.floor(Math.random() * 4)];
    password.push(randChar)
  }

  // if logic checks character type responses from user and adjusts characterSelection array to meet specified criteria
  if (low && upr && !spl){
    characterSelection.splice(0,1);
    while(password.length < len){
      randomCharacter();
    }
    console.log(password);
  } else if (!low && upr && spl){
    characterSelection.splice(2,1);
    while(password.length < len){
      randomCharacter();
    }
    console.log(password);
  } else if (low && !upr && spl){
    characterSelection.splice(1,1);
    while(password.length < len){
      randomCharacter();
    }
    console.log(password);
  } else if (low && !upr && !spl){
    characterSelection.splice(0,2);
    while(password.length < len){
      randomCharacter();
    }
    console.log(password);
  } else if (!low && !upr && spl){
    characterSelection.splice(1,2);
    while(password.length < len){
      randomCharacter();
    }
    console.log(password);
  } else if (!low && upr && !spl){
    characterSelection.splice(2,1);
    characterSelection.splice(0,1);
    while(password.length < len){
      randomCharacter();
    }
    console.log(password);
  } else {
    while(password.length < len){
      randomCharacter();
    }
    console.log(password);
  }
}

generatePassword(passwordCharacters,passwordLower,passwordUpper,passwordSpecial)

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);