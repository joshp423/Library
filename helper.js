const myLibrary = [];
const bookCards = document.getElementById("bookCards");
let formActive = false;

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
        const div = document.createElement("div");
        const title = document.createElement("h1");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        const removeButton = document.createElement("button");
        const readStatusButton = document.createElement("button");
        const buttonDiv = document.createElement("div");

        div.id =`${myLibrary[books].title}`;
        readStatusButton.classList.add("readStatusButton");
        readStatusButton.innerText = "Read Status Toggle";
        readStatusButton.dataset.parent = `${myLibrary[books].title}`
        removeButton.classList.add("removeButton");
        removeButton.innerText = "Remove From Library";
        removeButton.dataset.parent = `${myLibrary[books].title}`
        title.innerText = myLibrary[books].title;
        author.innerText = `Author: ${myLibrary[books].author}`;
        pages.innerText = `Pages: ${myLibrary[books].pages}`;
        read.innerText = myLibrary[books].read;
        read.classList.add("readStatus")
        bookCards.appendChild(div);
        div.append(title, author, pages, read, buttonDiv);
        buttonDiv.append(removeButton,readStatusButton);
    }
    removeButtons()
    readStatusToggle()
}

const addButton = document.getElementById("addBookButton");
addButton.addEventListener('click', function() {
    console.log(formActive);

    if (formActive === true) {
        return;
    }

    formActive = true;
    const sidebarform = document.getElementById("sidebarForm");
    const formContainer = document.getElementById("formContainer");
    const existingCheck = document.getElementById("sidebarForm").childElementCount;
    const submitButton = document.createElement("button");
    console.log(existingCheck)
    if (existingCheck === 5) {
        formContainer.style.display = "grid";
        sidebarform.style.border = "2px solid #7F6A93";
        sidebarform.style.display = "grid";
        submitButton.addEventListener('click', addBook);
        return;
    }

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("titleDiv");
    const title = document.createElement("label");
    title.innerText = "Title";
    title.htmlFor = "titleInput";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "titleInput";

    const authorDiv = document.createElement("div");
    authorDiv.classList.add("authorDiv");
    const author = document.createElement("label");
    author.innerText = "Author";
    author.htmlFor = "authorInput";
    const authorInput = document.createElement("input");
    authorInput.id = "authorInput";
    authorInput.type = "text";


    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pagesDiv");
    const pages = document.createElement("label");
    pages.innerText = "Number of Pages";
    pages.htmlFor = "pageInput";
    const pageInput = document.createElement("input");
    pageInput.id = "pageInput";
    pageInput.type = "number";

    const readDiv = document.createElement("div");
    readDiv.classList.add("readDiv")
    const readStatus = document.createElement("select");
    readStatus.id = "readStatus";
    const isRead = document.createElement("option");
    isRead.value = "Read";
    isRead.innerText = "Read";
    const notRead = document.createElement("option");
    notRead.innerText = "Not Read";
    notRead.value = "Not Read";

    submitButton.innerText = "Submit";
    submitButton.type = "Submit";
    submitButton.id = "submitButton";
    
    sidebarform.appendChild(titleDiv);
    titleDiv.append(title, titleInput);

    sidebarform.appendChild(authorDiv);
    authorDiv.append(author, authorInput);

    sidebarform.appendChild(pagesDiv);
    pagesDiv.append(pages, pageInput);

    sidebarform.appendChild(readDiv);
    readDiv.appendChild(readStatus);
    readStatus.append(isRead, notRead);
    sidebarform.appendChild(submitButton);

    formContainer.style.display = "grid";
    sidebarform.style.border = "2px solid #7F6A93";
    sidebarform.style.display = "grid";

    submitButton.addEventListener('click', addBook);

});

function addBook(event) {
    event.preventDefault();
    const title = document.getElementById("titleInput");
    const author = document.getElementById("authorInput");
    const pages = document.getElementById("pageInput");
    const read = document.getElementById("readStatus");
    if (title.value === ""){
        alert("Please enter a title");
        return;
    }
    console.log(title.value, author.value, pages.value, read.value);
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    const existingBooks = document.getElementById("bookCards").childElementCount;
    const bookSection = document.getElementById("bookCards");
    let counter = 0;
    console.log(existingBooks);
    while (counter < existingBooks) {
        bookSection.removeChild(bookSection.firstChild);
        counter ++;
    }
    const form = document.getElementById("sidebarForm");
    form.style.display = "none";
    console.log(myLibrary);
    displayLibrary(myLibrary);
    formActive = false;
    title.value = "";
    author.value = "";
    pages.value = "";
}

addBookToLibrary("Big Willy's Boys", "Big Willy", 240, "Not read");
addBookToLibrary("Willy Wonka", "Roald Dahl", 100, "Read");
addBookToLibrary("Lord of the Rings: The Return of the King", "J.R.R Tolkien", 416, "Not read");
displayLibrary(myLibrary);

function removeButtons() {
    const removeButtons = document.querySelectorAll(".removeButton");
    removeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const remove = document.getElementById(button.dataset.parent);
            const parent = remove.parentNode;
            parent.removeChild(remove);
            let indexDelete = myLibrary.findIndex(book => book.title === remove.id);
            console.log(remove.id);
            if (indexDelete !== -1) {
                myLibrary.splice(indexDelete, 1);
            }
            console.log(myLibrary);
        });
    });
};

function readStatusToggle() {
    const toggleButtons = document.querySelectorAll(".readStatusButton");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const parentData = document.getElementById(button.dataset.parent);
            const parent = parentData.parentNode;
            let readValue = parentData.querySelector(".readStatus");
            console.log(readValue.innerText, parent, parentData);
            if  (readValue.innerText === "Read") {
                readValue.innerText = "Not Read";
            }
            else {
                readValue.innerText = "Read";
            }
        });
    });
};


