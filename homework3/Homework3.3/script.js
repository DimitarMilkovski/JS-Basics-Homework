
let givenArray = ['Hello', 'there', 'students', 'of', 'SEDC', '!'];

function stringFromArray (anyArray){
    let numberOfItems = anyArray.length;
    let bigString = "";
    for(i=0; i<numberOfItems; i++){
        bigString += `${anyArray[i]} `;
    }

    return(bigString);

}

console.log(stringFromArray(givenArray));