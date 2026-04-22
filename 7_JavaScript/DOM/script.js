console.log("Hello World");

var number = 5 //in-line comment

var myName = "Liander";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

a = 7;

b = a;

console.log(a)


a = 1
console.log(a)
a = a + 1

console.log(a)



var NomeLength = 0;
var Nome = "Liander";

NomeLength = Nome.length

console.log(Nome ,"tem", NomeLength, "letras")

// setup
var myStr = "Jello World";
console.log(myStr)

// Só muda abaixo dessa linha 

myStr = "Hello World"
console.log(myStr)

// Achar a última letra 
var nome = "Liander";
var ultimaLetraDoNome = nome[nome.length - 1];
console.log(ultimaLetraDoNome)

sobrenome = "nunes";

ultimaLetraDoNome = sobrenome

var ultimaLetraDoSobrenome = sobrenome[sobrenome.length - 1];
console.log(ultimaLetraDoSobrenome)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store " + myAdverb + "."

    // Your code above this line
    return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Exemplo
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Quincy", 1];


function nextInLine(arr, item){
    // Your code here
    // Adiciona o novo item na lista (função, itemnovo)
    arr.push(item)
    // ".shift remove o primeiro item da lista"
    return arr.shift();
}

var testArr = [1,2,3,4,5];

// "JSON.stringify" coloca a lista de uma forma crua
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*
3 == 3 = true
3 == '3' = true
3 === '3' = false
*/

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    if (num < 10) {
        return "Small";
    }
    if (num <= 15) {
        return "Medium";
    }
    if (num < 20) {
        return "Large";
    }
    if (num >= 20) {
        return "Huge";
    }
}

console.log(testSize(15))

// Golf Game

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1){
        return names[0];

    } else if (strokes <= par - 2 ){
        return names[1];

    } else if (strokes <= par - 1  ){
        return names[2];
    
    } else if (strokes == par ){
        return names[3];
    
    } else if (strokes == par + 1 ){
        return names[4];
    
    } else if (strokes == par + 2 ){
        return names[5];
    
    } else if (strokes >= par + 3 ){
        return names[6];
    }
}

// Change these values to test
console.log(golfScore(5, 4));

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"  
*/  

function chaintToSwitch(val) {
   var answer = "";

switch(val) {
    case "samuel":
        answers = "Jackson";
        break;
    case 42:
        answers = "The Answer";
        break;
    case 1:
        answer = "There is no #1";
        break;
    case 99:
        answer = "Missed me by this much!";
        break;
    case 7:
        answer = "Ate Nine";
        break;


    }
}

// counting cards BlackJack

var count = 0 

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    return count + " " + holdbet;

}

var holdbet = 'Hold'
if (count > 0) { 
    holdbet = 'Bet'
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(1))

