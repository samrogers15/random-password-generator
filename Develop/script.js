// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Here are the different arrays for the password criteria
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericValue = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

//Below is the function code to generate the random password.
function generatePassword () {
  
  // This variable prompts the user to enter a number of characters for the password between 8 and 128.
  var confirmLength = prompt('How many characters would you like your password to contain? Please enter a minimum of 8 and a maximum of 128.');

  //The below while loop ensures that the user entered a number that is at least 8 and no more than 128. If the user enters a number outside that range, they will be prompted to re-enter a number inside that range and will not be able to continue until they enter a number inside the range.
  while (confirmLength < 8 || confirmLength > 128) {
    alert('Password characters must be at least 8 and at most 128. Please try again.');
    var confirmLength = prompt('How many characters would you like your password to contain? Please enter a minimum of 8 and a maximum of 128.');
  }

  // This alert lets the user know how long their password will be.
  alert('Your password will be ' + confirmLength + ' characters long.');

  // The below variables prompt the user to confirm what criteria (lower case characters, upper case characters, numeric values, and/or special charactrers) they want their password to have.
  var confirmLowerCase = confirm('Do you want your password to contain lower case characters? If yes, click OK. If no, click Cancel.');
  var confirmUpperCase = confirm('Do you want your password to contain upper case characters? If yes, click OK. If no, click Cancel.');
  var confirmNumericValue = confirm('Do you want your password to contain numbers? If yes, click OK. If no, click Cancel.');
  var confirmSpecialCharacters = confirm('Do you want your password to contain special characters? If yes, click OK. If no, click Cancel.');

  // The below while loop ensures that the user selected at least one of the criteria to include in their password. If user did not select any criteria, they will be alerted that they need to select at least one criteria and they will again be prompted to confirm what criteria they want their password to have.
  while (!confirmLowerCase && !confirmUpperCase && !confirmNumericValue && !confirmSpecialCharacters) {
    alert('You must choose at least one criteria to include in your password. Please try again.');
    var confirmLowerCase = confirm('Do you want your password to contain lower case characters? If yes, click OK. If no, click Cancel.');
    var confirmUpperCase = confirm('Do you want your password to contain upper case characters? If yes, click OK. If no, click Cancel.');
    var confirmNumericValue = confirm('Do you want your password to contain numbers? If yes, click OK. If no, click Cancel.');
    var confirmSpecialCharacters = confirm('Do you want your password to contain special characters? If yes, click OK. If no, click Cancel.');
  }
  // The below variable sets the master password array.
  var passwordMaster = []

  // This if statement concatenates the lowerCase variable established on row 17 into the PasswordMaster array if the user has indicated that they want their password to include lower case characters.
  if (confirmLowerCase) {
    passwordMaster = passwordMaster.concat(lowerCase);
  }

  // This if statement concatenates the upperCase variable established on row 18 into the PasswordMaster array if the user has indicated that they want their password to include upper case characters.
  if (confirmUpperCase) {
    passwordMaster = passwordMaster.concat(upperCase);
  }

  // This if statement concatenates the numericValue variable established on row 19 into the PasswordMaster array if the user has indicated that they want their password to include numeric values.
  if (confirmNumericValue) {
    passwordMaster = passwordMaster.concat(numericValue);
  }

   // This if statement concatenates the specialCharacters variable established on row 20 into the PasswordMaster array if the user has indicated that they want their password to include special characters.
  if (confirmSpecialCharacters) {
    passwordMaster = passwordMaster.concat(specialCharacters);
  }

  // This variable sets an empty string that the randomized password will fill based on the below loop.
  var randomPassword = "";

  // This for loop creates the randomized password based on the length of the password that the user requested and the criteria that the user requested that was concatenated into the master password array.
  for (var i = 0; i<confirmLength; i++) {
    randomPassword = randomPassword + passwordMaster[Math.floor(Math.random() * passwordMaster.length)]
  }
  
  return (randomPassword);
}