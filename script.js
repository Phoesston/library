const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author){
    return myLibrary.push(new Book(title, author))

}

const addBookButton = document.querySelector(".add-book button"); // Select the button inside .add-book
const formBlock = document.getElementById("add-book-form");
const formDialog = document.querySelector(".form-dialog")

addBookButton.addEventListener("click", function () {
   formDialog.showModal();
});

const closeButton = document.querySelector(".dialog-close-button");
closeButton.addEventListener("click", function () {
   formDialog.close();
});