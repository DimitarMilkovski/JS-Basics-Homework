console.log('Homework 3.2')


let argumentsArray = [];
let br = 0;

while (br<=4){
    let inputNumber = parseInt(prompt('Please enter five numbers one by one'));
   
    if(Number.isInteger(inputNumber)=== true){
        argumentsArray [br] = inputNumber;
        br++;
    }
    else{
        alert('Wrong entry! Please enter a number');
    }

    

}
console.log(argumentsArray);

function sumOfFiveNumbers(inputArray){
    let arraySum = 0;
    for(let i=0; i<= 4; i++){
        arraySum += inputArray[i];
    }
    return(`The sum of the five numbers is: ${arraySum}.`);
    
}


alert(sumOfFiveNumbers(argumentsArray));
console.log(sumOfFiveNumbers(argumentsArray));