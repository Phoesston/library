const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author){
    return myLibrary.push(new Book(title, author))

}