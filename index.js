let passwordLength = 10;

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$",
    "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";",
    "<", ">", ".", "?", "/"
];

const genPasswordButton = document.querySelector(".password-btn")

const displayPwButton1 = document.getElementById("display-pw-1")
const displayPwButton2 = document.getElementById("display-pw-2")





//function to generate random number inside 
//characters variable stored in Passwordlength

function genPassword() {
    let passwordArr = ""
    for (let i = 0; i < passwordLength; i++) { //loops the length of the passwordLength variable
        const randomIndex = Math.floor(Math.random() * characters.length); //randomly picks passwordLength size inside characters variable
        passwordArr += characters[randomIndex]; // asign passwordarray value of 10 random characters that randomIndex outputed
        // displayPwButton1.textContent = `${passwordArr}`
    }
    return passwordArr; //returns the resulting passwordArr value.
}

//displays the password inside the button 1 and button 2

function displayedPasswords() {
    displayPwButton1.textContent = `${genPassword()}`
    displayPwButton2.textContent = `${genPassword()}`
}