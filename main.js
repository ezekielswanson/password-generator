



let generator = document.querySelector('.password-generator');
let passwordDisplayOne = document.querySelector('.main-display__password-block-input');
let passwordDisplayTwo = document.querySelector('.main-display__password-block-password-display');
let password = " ";


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//generates a random password

function randomCharacters() {
    let randomPassword = Math.floor( Math.random() * characters.length)
    return characters[randomPassword];
    
}



//Setting var to gen. random passwords and length to 15
// set to empty string here as well
let passwordOne = "";
let passwordTwo = "";
let passwordLength = 15;


function generatePassword() {
  passwordOne = "";
  passwordTwo = "";
  //clear before 
  // emptying string before looping through essentially setting to 0

  for (let i=0; i < passwordLength; i++ ) {
    passwordOne += randomCharacters();
    passwordTwo += randomCharacters();

    //Placing random password into two display buttons
    passwordDisplayOne.textContent = passwordOne;
    passwordDisplayTwo.textContent =  passwordTwo;
     
  }

}

//need to reset the password and reformat back in input


//Getting random password on click
//call function 
generator.addEventListener('click', function() {
  generatePassword()

});



/*Generates password on On load if needed 
document.addEventListener("DOMContentLoaded", function() {
  generatePassword()

})
*/


















