const message = 'Hello world' // Try edit me
let alphabetWithDigits = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "^", ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const pd2= Math.floor(Math.random() * alphabetWithDigits.length);
const pd3= Math.floor(Math.random() * alphabetWithDigits.length);
const pd1= Math.floor(Math.random() * alphabetWithDigits.length);


const pd4= Math.floor(Math.random() * alphabetWithDigits.length);
const pd5= Math.floor(Math.random() * alphabetWithDigits.length);
const pd6= Math.floor(Math.random() * alphabetWithDigits.length);
const pd7= Math.floor(Math.random() * alphabetWithDigits.length);
const pd8= Math.floor(Math.random() * alphabetWithDigits.length);
const pd9= Math.floor(Math.random() * alphabetWithDigits.length);

// Update header text
document.querySelector('#header').innerHTML = message
const pswdgen= document.querySelector('#header').innerHTML = alphabetWithDigits[pd1]+alphabetWithDigits[pd2]+alphabetWithDigits[pd3]+alphabetWithDigits[pd4]+alphabetWithDigits[pd5]+alphabetWithDigits[pd6]+alphabetWithDigits[pd7]+alphabetWithDigits[pd8]+alphabetWithDigits[pd9]+alphabetWithDigits[pd1];


// Log to console
console.log(message)
console.log(pswdgen)
S