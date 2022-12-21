
let recipeName = document.getElementById('nameOfRecipe');
let numberOfIngredients = document.getElementById('numOfIngredients');
let ingredientsDiv = document.getElementById ('ingredientsDiv');
let listOfIngredients = document.getElementById('myList');
let header = document.getElementById('Header')

function numberOfIngredientsInputs(numOfInputs,displayElement){
    displayElement.innerHTML = '';
    for (let i = 0; i<numOfInputs; i++ ){
        displayElement.innerHTML += `<br>
        <label for="input${i}">Ingredient ${i+1}:</label>
        <input type="text" id = "input${i}">
        <br>`
        if(i === numOfInputs-1){
            displayElement.innerHTML +=`<br>
            <br>
            <button id = "submitBtn">Submit</button>`
        }
    }
    if (numOfInputs=== ''){
        displayElement.innerHTML = '';
    } 
}




numberOfIngredients.addEventListener('input',function(event){
    let numberOfIngredientsValue = event.target.value;
    numberOfIngredientsInputs(numberOfIngredientsValue, ingredientsDiv);  
    if(numberOfIngredients.value!==''){
        let submitButton = document.getElementById('submitBtn');
        submitButton.addEventListener ('click',function(){
           let inputForPrintFunction = (submit(numberOfIngredients.value));
           printFunction(inputForPrintFunction);

        } ) 
    }
})



function submit(numOfInputs){
    let ingredients = [];
    for (let i=0;i<numOfInputs;i++){
         ingredients [i] = document.getElementById(`input${i}`).value;
    }
    return ingredients;
    
}

function printFunction(inputPrintFunction){

    header.innerHTML = ''
    header.innerHTML = `<h3 style="text-align: center;">${recipeName.value}</h3>`
    listOfIngredients.innerHTML = '';
    listOfIngredients.innerText = 'Needed Ingredients:'
    for (let elements of inputPrintFunction) {
        listOfIngredients.innerHTML += `<li> ${elements} </li>`
    }
    
    console.log(listOfIngredients)
    
}


