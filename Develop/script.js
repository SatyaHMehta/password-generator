// Assignment Code
//Assigned all the variabled to be used in the script. 
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;
// These variables are the assigned random characters, numbers and lowercase letters.
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Variable to hold our array of uppcase letters through the folowing function.
space = [];
// variable and function to turn the lowercase letters to uppercase letters, this was googled and I dont exactly understand the logic behind it.
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
// Event clicker to execute the writePassword function.
generateBtn.addEventListener("click", writePassword);
// The fucktion that executes the prompts/confirms to generate the password.
function writePassword() {
  var password = generatePassword();
  if(password) {
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// function that geenrates the password as a value to be used for var passwordText.
function generatePassword() {
  // prompts/confirms.
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
// conditionals for every type of response. First is if all 4 prompts are false, then if all promps are true, then if 3 prompts are true and 4 versions of those for every variation in them, etc.
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        alert("You must choose a criteria!");
        return;
    } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, lowerCase, upperCase);
    } else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upperCase);
    } else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowerCase);
    } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowerCase, upperCase);
    } else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowerCase, upperCase);
    } else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowerCase);
    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperCase);
    } else if (confirmLowercase && confirmNumber) {
        choices = lowerCase.concat(number);
    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerCase.concat(upperCase);
    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperCase);
    } else if (confirmCharacter) {
        choices = character;
    } else if (confirmNumber) {
        choices = number;
    } else if (confirmLowercase) {
        choices = lowerCase;
    } else if (confirmUppercase) {
        choices = space.concat(upperCase);
    };
// variable to hold our password function.
    var password = [];
// function to execute the random number generator. In this case it grabs a random number, rounds it to the lowest value, multiplies it by choice.length and uses that number to pic the location within the array.
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
  // joins the password array and converts it to a string.
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// puts the password value into the textbox.
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
