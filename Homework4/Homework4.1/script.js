console.log('test')

let header = document.getElementById("myTitle");
header.innerText = "It's a cool page but i'll change the header!"

// let firstDiv = document.getElementById("first");
// let firstParagraph = firstDiv.Child;
// console.log(firstDiv)
// firstParagraph.innerText = "Yea now i see it's easy"
// console.log(firstParagraph)

let firstParagraph = header.nextElementSibling;
firstParagraph.innerText = "Yea now i see it's easy"

let secondParagraph = document.querySelector('.second');
secondParagraph.innerText = "Really, i know its easy!!!"

let textElement = secondParagraph.nextElementSibling;
textElement.innerText = "I have no idea what to write in this element..."