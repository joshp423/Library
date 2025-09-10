const myLibrary = [];
const bookCards = document.getElementById("bookCards");

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
        title.innerText = myLibrary[books].title;
        author.innerText = myLibrary[books].author;
        pages.innerText = myLibrary[books].pages;
        read.innerText = myLibrary[books].read;
        bookCards.appendChild(div);
        div.append(title, author, pages, read);
        console.log(books.title)
    }
}

