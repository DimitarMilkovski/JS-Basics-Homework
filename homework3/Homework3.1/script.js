console.log('Homework 3.1')


let argumentsArray = [];

for (let i=0; i<=2; i++){
    argumentsArray [i] = prompt('Please enter: First time "Name", second time "Mood", third time "Activity"');

}

function tellStory (argumentsArray){   
    let storyString = `This is ${argumentsArray[0]}. ${argumentsArray[0]} is a nice person. Today they are ${argumentsArray[1]}. They are ${argumentsArray[2]} all day. The end. ` ;

    return (storyString)
}

console.log(tellStory(argumentsArray));
alert(tellStory(argumentsArray));
