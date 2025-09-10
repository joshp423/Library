const myLibrary = [];
const bookCards = document.getElementById("bookCards");
let clicked;

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayLibrary(myLibrary) {
    for (books in myLibrary) {
        let div = document.createElement("div");
        const title = document.createElement("h1");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        const removeButton = document.createElement("button");
        const readStatusButton = document.createElement("button");
        const buttonDiv = document.createElement("div");

        readStatusButton.classList.add("readStatusButton");
        readStatusButton.innerText = "Read Status Toggle";
        removeButton.classList.add("removeButton");
        removeButton.innerText = "Remove From Library"
        title.innerText = myLibrary[books].title;
        author.innerText = `Author: ${myLibrary[books].author}`;
        pages.innerText = `Pages: ${myLibrary[books].pages}`;
        read.innerText = myLibrary[books].read;
        bookCards.appendChild(div);
        div.append(title, author, pages, read, buttonDiv);
        buttonDiv.append(removeButton,readStatusButton);
    }
}

const addButton = document.getElementById("addBookButton");
addButton.addEventListener('click', function() {
    let clicked = true;
    const titleInput = document.createElement("input")
    const authorInput = document.createElement("input")
    const pageInput = document.createElement("input")
    const readStatus = document.createElement("select")
    titleInput.id.add("titleInput");
    authorInput.id.add("authorInput");
    pageInput.id.add("pageInput");
    readStatus.id.add("readStatus");
    
});

addBookToLibrary("Big Willy's Boys", "Big Willy", 240, "Not read");
addBookToLibrary("Willy Wonka", "Rold Dahl", 100, "read");

displayLibrary(myLibrary);