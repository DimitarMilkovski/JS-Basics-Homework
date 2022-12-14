

let randomArray = [3,5,6,8,1,'name', true, null, undefined, 34, -2, '', 8];
let max = -Infinity;
let min = Infinity;
let sum;


function sumMaxMin (anyArray){

    for (let element of anyArray) {
        if (typeof(element)==="string" || typeof(element)==="boolean" || typeof(element)==="null" || typeof(element)==="undefined"){
            continue;
        }
        if(element>max){
            max = element;
        }
        if(element<min){
            min = element;
        }
    }
    console.log(`max is ${max}`)
    console.log(`min is ${min}`)
    return max+min;
}

sum = sumMaxMin(randomArray)
console.log(`The sum of maximium and minimum number in the array is: ${sum}`);