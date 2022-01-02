const addNewBtn = document.getElementById('addNewBook');
const form = document.getElementById('form');

let myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

//Fake books to test the display function:
let book1 = new Book('First Title', 'First Author', '283', 'read');
let book2 = new Book('Second Title', 'Second Author', '375', 'not read');
let book3 = new Book('Third Title', 'Third Author', '413', 'read');
myLibrary.push(book1, book2, book3);


function addBookToLibrary(book) {
     myLibrary.push(book);
     return;
}

function addNewBook() {
    form.innerHTML = '';
    addNewTitle();
    addNewAuthor();
    addNumberOfPages();
    addRead();
    let confirm = document.createElement('button');
    confirm.textContent = 'Confirm';
    form.appendChild(confirm);
    confirm.addEventListener('click', function () {
        let book1 = new Book(title.value, author.value, numberOfPages.value, read.value);
        addBookToLibrary(book1);
    });
}


function addNewTitle() {
    let p = document.createElement('p');
    p.textContent = 'Title: ';
    let title = document.createElement('input');
    title.id = 'title';
    form.appendChild(p);
    form.appendChild(title);
}

function addNewAuthor() {
    let p = document.createElement('p');
    p.textContent = 'Author: ';
    let author = document.createElement('input');
    author.id = 'author';
    form.appendChild(p);
    form.appendChild(author);
}

function addNumberOfPages() {
    let p = document.createElement('p');
    p.textContent = 'Number of pages: ';
    let numberOfPages = document.createElement('input');
    numberOfPages.id = 'numberOfPages';
    form.appendChild(p);
    form.appendChild(numberOfPages);
}

function addRead() {
    let p = document.createElement('p');
    p.textContent = 'Did you read the book yet? ';
    let read = document.createElement('input');
    read.id = 'read';
    form.appendChild(p);
    form.appendChild(read);
}

addNewBtn.addEventListener('click', addNewBook);



const loopBtn = document.getElementById('loop');

loopBtn.onclick = function() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.table(myLibrary[i]);
    }
}

const clear = document.getElementById('clear');

clear.onclick = function() {
    form.innerHTML = '';
}

const display = document.getElementById('display');

display.onclick = function() {
    // Create the table:
    let table = document.createElement('table');
    table.id = 'table';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    // Create the heading:
    let firstRow = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Title';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Author';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Number of pages';
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Read';
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Delete';
    firstRow.appendChild(heading_1);
    firstRow.appendChild(heading_2);
    firstRow.appendChild(heading_3);
    firstRow.appendChild(heading_4);
    firstRow.appendChild(heading_5);
    thead.appendChild(firstRow);
    // Automatically create and fill in the rows for each book:
        for (let i = 0; i < myLibrary.length; i++) {
            let row_i = document.createElement('tr');
            let row_i_data_1 = document.createElement('td');
            row_i_data_1.innerHTML = myLibrary[i].title;
            let row_i_data_2 = document.createElement('td');
            row_i_data_2.innerHTML = myLibrary[i].author;
            let row_i_data_3 = document.createElement('td');
            row_i_data_3.innerHTML = myLibrary[i].numberOfPages;
            let row_i_data_4 = document.createElement('td');
            row_i_data_4.innerHTML = myLibrary[i].read;
            let row_i_data_5 = document.createElement('td');
            let row_i_data_5_btn = document.createElement('button');
            row_i_data_5_btn.textContent = 'Delete';
            row_i_data_5_btn.className = 'deleteBtn';
            row_i_data_5_btn.dataset.deleteId = `${i}`;
            row_i_data_5.appendChild(row_i_data_5_btn);
            row_i.appendChild(row_i_data_1);
            row_i.appendChild(row_i_data_2);
            row_i.appendChild(row_i_data_3);
            row_i.appendChild(row_i_data_4);
            row_i.appendChild(row_i_data_5);
            tbody.appendChild(row_i);
        }
    form.appendChild(table);
}


// let table = document.createElement('table');
// table.id = 'table';
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');
// table.appendChild(thead);
// table.appendChild(tbody);
// // Create the heading:
// let firstRow = document.createElement('tr');
// let heading_1 = document.createElement('th');
// heading_1.innerHTML = 'Title';
// let heading_2 = document.createElement('th');
// heading_2.innerHTML = 'Author';
// let heading_3 = document.createElement('th');
// heading_3.innerHTML = 'Number of pages';
// let heading_4 = document.createElement('th');
// heading_4.innerHTML = 'Read';
// let heading_5 = document.createElement('th');
// heading_5.innerHTML = 'Delete';
// firstRow.appendChild(heading_1);
// firstRow.appendChild(heading_2);
// firstRow.appendChild(heading_3);
// firstRow.appendChild(heading_4);
// firstRow.appendChild(heading_5);
// thead.appendChild(firstRow);
// form.appendChild(table);