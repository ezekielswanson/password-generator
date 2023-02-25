



let generator = document.querySelector('.password-generator');
let input = document.querySelector('.main-display__password-block-input');
let display = document.querySelector('.main-display__password-block-password-display');


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//generates a random password

let passwordLength = 15;

function randomCharacters() {
    let randomPassword = Math.floor( Math.random() * characters.legnth )
    return characters[randomPassword];
    
}




/*
//Getting random password on click
generator.addEventListner('click', function() {
    for (let i=0; i < characters.length; i++ ) {
      let character = "";
      randomCharacters();
       
    }

})
*/





