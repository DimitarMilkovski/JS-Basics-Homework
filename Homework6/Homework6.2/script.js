
let nameOfTheBook = document.getElementById ('bookName'); 
let authorOfTheBook = document.getElementById ('bookAuthor');
let statusOfTheBook = document.getElementById ('bookStatus');

let submitButton = document.getElementById ('submitBtn');
let divToDisplay = document.getElementById ('displayDiv');






function Book (bookName, bookAuthor, bookStatus){
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookStatus = bookStatus;

    this.returnStatusOfTheBook = function (){
        if (this.bookStatus === 'read'){
            return `You have already read the book:${this.bookName} by ${this.bookAuthor}`
        }
        else if (this.bookStatus==='stillreading'){
            return`You are still reading: ${this.bookName} by ${this.bookAuthor}`
        }
        else{
            return `you still need to read: ${this.bookName} by ${this.bookAuthor}`
        }
    }
}



submitButton.addEventListener ('click', function(){
    let newBook = new Book (nameOfTheBook.value, authorOfTheBook.value, statusOfTheBook.value);
    let  statusToDisplay = newBook.returnStatusOfTheBook();

   divToDisplay.innerHTML += `<p>${statusToDisplay} </p>`

   nameOfTheBook.value = '';
   authorOfTheBook.value = '';
   statusOfTheBook.value ='';

})