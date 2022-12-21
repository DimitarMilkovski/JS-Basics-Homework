let numbersArray = [];
let br = 0;

while (br<=4){
    let inputNumber = parseInt(prompt('Please enter five numbers one by one'));
   
    if(Number.isInteger(inputNumber)=== true){
        numbersArray [br] = inputNumber;
        br++;
    }
    else{
        alert('Wrong entry! Please enter a number');
    }

}

function sumOfList (list){
    let sum = 0;
    
    for(let i = 0; i<list.length; i++){
        sum += list[i];
        
        
    }
    return sum;
}
 

let myList = document.getElementById('myList');
for (let elements of numbersArray) {
    myList.innerHTML += `<li>${elements}</li>`
}


let displaySumOfTheList = document.getElementById('displayParagraph');

displaySumOfTheList.innerHTML = `The sum of this list is: ${sumOfList(numbersArray)}`;


let sumEquation = ''
for(let i = 0; i<numbersArray.length; i++){
    
    if (i===(numbersArray.length-1)){
        sumEquation+= `${numbersArray[i]} =`;
    }
    else{
        sumEquation += `${numbersArray[i]} + `;
    }
    
}
 
let mathEquation = `${sumEquation} ${sumOfList(numbersArray)}`

let displayMathEquation = document.getElementById('mathEquation')
displayMathEquation.innerHTML = mathEquation;

// za prikazuvanje na listata kako i drugite elemnti na nova strana, ne uspeav da napravam.
// kodot mi se izvrshuva i na 2te strani, neznam kako da podelam odreden del od JS kodot da se izvrshuva na poseben HTML fille. )
