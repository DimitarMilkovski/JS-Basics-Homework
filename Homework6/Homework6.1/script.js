
let dog = {
    name: 'Lassie',
    kind: 'Rough Collie',

    speak: function (text){
        console.log (`Dog says: ${text}!!!`);

    }
}

dog.speak (prompt ('Please enter what the dog says:'));
