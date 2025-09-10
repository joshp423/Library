const myLibrary = [];

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
    const bookCards = document.getElementsByClassName("bookCards");
    for (books in myLibrary) {
        const div = document.createElement("div")
        const title = document.createElement("h1");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        title.innerText = books.title;
        author.innerText = books.author;
        pages.innerText = books.pages;
        read.innerText = books.read;
        bookCards.appendChild(div);
        div.appendChild(title, author, pages, read);
    }
}

