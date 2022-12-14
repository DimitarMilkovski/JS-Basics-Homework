let firstNames = ['Bob', 'Frank','Johnny'];
let lastNames = ['Saget', 'Zappa','Cash'];

function studentsFullNames (firstNamesArray, lastNamesArray){

    let fullName;
    let fullNamesArray = []
    for(let i = 0; i<firstNamesArray.length; i++){
        fullName = `${i+1}. ${firstNamesArray[i]} ${lastNamesArray[i]}`;
        fullNamesArray[i] = fullName;
    }
    return (fullNamesArray);
}

let fullNamesArray = studentsFullNames(firstNames, lastNames);
console.log(fullNamesArray);