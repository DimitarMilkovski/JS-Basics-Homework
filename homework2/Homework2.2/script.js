function celsiusFahrenheitConverter(celsiusValue) {
    fahrenheitConvertedValue = celsiusValue*1.8+32;
    console.log(`${celsiusValue} degrees Celsius is equal to ${fahrenheitConvertedValue} degrees Fahrenheit.`);
    document.getElementById("celsiusToFahrenheit").innerHTML = `${celsiusValue} degrees Celsius is equal to ${fahrenheitConvertedValue} degrees Fahrenheit.`;
}

let inputCelsius = parseInt(prompt('Please enter the Celsius value that you want to be converted:'));
celsiusFahrenheitConverter(inputCelsius);

// -------Vice Versa---------

// function FahrenheitCelsiusConverter(fahrenheitValue) {
//     celsiusConvertedValue = (fahrenheitValue-32)*(5/9); //formula for converting fahrenheit to celsius degrees
//     console.log(`${fahrenheitValue} degrees Fahrenheit is equal to ${celsiusConvertedValue} degrees Celsius.`);
//     document.getElementById("celsiusToFahrenheit").innerHTML =(`${fahrenheitValue} degrees Fahrenheit is equal to ${celsiusConvertedValue} degrees Celsius.`);
// }

// let inputFahrenheit = parseInt(prompt('Please enter the Fahrenheit value that you want to be converted:'));
// FahrenheitCelsiusConverter(inputCelsius);