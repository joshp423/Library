const myLibrary = [];
const bookCards = document.getElementById("bookCards");
let clicked = false;

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

addButton.addEventListener('click', function(clicked) {
    if (clicked === true) {
        return;
    }
    clicked = true;
    const sidebarform = document.getElementById("sidebarForm");
    const formContainer = document.getElementById("formContainer")

    const titleDiv = document.createElement("div")
    titleDiv.classList.add("titleDiv");
    const title = document.createElement("label");
    title.innerText = "Title";
    const titleInput = document.createElement("input");
    titleInput.id = "titleInput";

    const authorDiv = document.createElement("div");
    authorDiv.classList.add("authorDiv");
    const author = document.createElement("label");
    author.innerText = "Author";
    const authorInput = document.createElement("input");
    authorInput.id = "authorInput";

    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pagesDiv");
    const pages = document.createElement("label");
    pages.innerText = "Number of Pages";
    const pageInput = document.createElement("input");
    pageInput.id = "pageInput";

    const readDiv = document.createElement("div")
    readDiv.classList.add("readDiv")
    const readStatus = document.createElement("select");
    readStatus.id = "readStatus";
    const isRead = document.createElement("option");
    isRead.value = "Read";
    isRead.innerText = "Read";
    const notRead = document.createElement("option");
    notRead.innerText = "Not Read";
    notRead.value = "Not Read";

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit"
    submitButton.type = "Submit"
    submitButton.id = "submitButton"
    
    sidebarform.appendChild(titleDiv);
    titleDiv.append(title, titleInput);

    sidebarform.appendChild(authorDiv);
    authorDiv.append(author, authorInput);

    sidebarform.appendChild(pagesDiv);
    pagesDiv.append(pages, pageInput);

    sidebarform.appendChild(readDiv);
    readDiv.appendChild(readStatus);
    readStatus.append(isRead, notRead);
    sidebarform.appendChild(submitButton)

    formContainer.style.display = "grid"

});



addBookToLibrary("Big Willy's Boys", "Big Willy", 240, "Not read");
addBookToLibrary("Willy Wonka", "Rold Dahl", 100, "read");

displayLibrary(myLibrary);