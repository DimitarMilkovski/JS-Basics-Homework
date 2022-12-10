
let birthYear = parseInt(prompt('Please enter the year you were born in:'));

let zodiacCalculationValue = (birthYear-4)%12;

switch(zodiacCalculationValue){
    case 0:
        console.log('Your Chinese Zodiac is Rat.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Rat.'
        break;
    case 1:
        console.log('Your Chinese Zodiac is Ox.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Ox.'
        break;
    case 2:
        console.log('Your Chinese Zodiac is Tiger.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Tiger.'
        break;
    case 3:
        console.log('Your Chinese Zodiac is Rabbit.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Rabbit.'
        break;
    case 4:
        console.log('Your Chinese Zodiac is Dragon.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Dragon.'
        break;
    case 5:
        console.log('Your Chinese Zodiac is Snake.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Snake.'
        break;
    case 6:
        console.log('Your Chinese Zodiac is Horse.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Horse.'
        break;
    case 7:
        console.log('Your Chinese Zodiac is Goat.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Goat.'
        break;
    case 8:
        console.log('Your Chinese Zodiac is Monkey.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Monkey.'
        break;
    case 9:
        console.log('Your Chinese Zodiac is Rooster.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Rooster.'
        break;
    case 10:
        console.log('Your Chinese Zodiac is Dog.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Dog.'
        break;
    case 11:
        console.log('Your Chinese Zodiac is Pig.')
        document.getElementById("sign").innerHTML = 'Your Chinese Zodiac is Pig.'
        break;
    default:
        console.log('Please enter correcrt year.')
        document.getElementById("sign").innerHTML = 'Please enter correcrt year.'
        break;
}