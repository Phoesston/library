const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author,pages,read){
    return myLibrary.push(new Book(title, author,pages, read))

}

function displayBooks(){
    const mainContainer = document.getElementById("books-container")
    mainContainer.innerHTML = ""

    myLibrary.forEach((book, index) =>{
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not Read Yet"}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleReadStatus(${index})">${book.read ? "Mark as Unread" : "Mark as Read"}</button>
        `;

        mainContainer.appendChild(card);
    
    });
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index){
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

const addBookButton = document.querySelector(".add-book button"); // Select the button inside .add-book
const formBlock = document.getElementById("book-form");
const formDialog = document.querySelector(".form-dialog")

addBookButton.addEventListener("click", function () {
   formDialog.showModal();
});

const closeButton = document.querySelector(".dialog-close-button");
closeButton.addEventListener("click", function () {
   formDialog.close();
});

formBlock.addEventListener("submit", (e) =>{
    e.preventDefault(); //prevents default form submission to the backend
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title,author,pages,read);
    formBlock.reset();
    formDialog.close();
    displayBooks();
    console.log(myLibrary);
});

