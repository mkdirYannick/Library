const addNewBtn = document.getElementById('addNewBook');
const form = document.getElementById('form');
const updateBtn = document.getElementById('update');
const tbody = document.getElementById('tableBody');

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
        let book = new Book(title.value, author.value, numberOfPages.value, read.value);
        addBookToLibrary(book);
        updateTable();
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
    p.textContent = 'Have you read the book? ';
    let read = document.createElement('input');
    read.type = 'checkbox';
    read.name = 'read';
    read.id = 'read';
    form.appendChild(p);
    form.appendChild(read);
}

addNewBtn.addEventListener('click', addNewBook);

for (let i = 0; i < myLibrary.length; i++) {
    let row_i = document.createElement('tr');
    let row_i_data_1 = document.createElement('td');
    row_i_data_1.innerHTML = myLibrary[i].title;
    let row_i_data_2 = document.createElement('td');
    row_i_data_2.innerHTML = myLibrary[i].author;
    let row_i_data_3 = document.createElement('td');
    row_i_data_3.innerHTML = myLibrary[i].numberOfPages;
    let row_i_data_4 = document.createElement('td');
    let row_i_data_4_btn = document.createElement('button');
    row_i_data_4_btn.textContent = myLibrary[i].read;
    row_i_data_4.appendChild(row_i_data_4_btn);
    let row_i_data_5 = document.createElement('td');
    let row_i_data_5_btn = document.createElement('button');
    row_i_data_5_btn.textContent = 'Delete';
    row_i_data_5_btn.className = 'deleteBtn';
    row_i_data_5_btn.dataset.deleteId = `${i}`;
    row_i_data_5_btn.addEventListener('click', function() {
        row_i.innerHTML = '';
        myLibrary.splice(i, 1);
    });
    row_i_data_5.appendChild(row_i_data_5_btn);
    row_i.appendChild(row_i_data_1);
    row_i.appendChild(row_i_data_2);
    row_i.appendChild(row_i_data_3);
    row_i.appendChild(row_i_data_4);
    row_i.appendChild(row_i_data_5);
    tbody.appendChild(row_i);
}

function updateTable() {
        let row_i = document.createElement('tr');
        let row_i_data_1 = document.createElement('td');
        row_i_data_1.innerHTML = title.value;
        let row_i_data_2 = document.createElement('td');
        row_i_data_2.innerHTML = author.value;
        let row_i_data_3 = document.createElement('td');
        row_i_data_3.innerHTML = numberOfPages.value;
        let row_i_data_4 = document.createElement('td');
        let row_i_data_4_btn = document.createElement('button');
        row_i_data_4_btn.dataset.readId = `${myLibrary.length-1}`;
        if (read.checked) {
            row_i_data_4_btn.innerText = 'Read';
            myLibrary[row_i_data_4_btn.dataset.readId].read = true;
        } else {
            row_i_data_4_btn.innerText = 'Not read';
            myLibrary[row_i_data_4_btn.dataset.readId].read = false;
        }
        row_i_data_4_btn.addEventListener('click', function() {
            if (myLibrary[row_i_data_4_btn.dataset.readId].read == true) {
                myLibrary[row_i_data_4_btn.dataset.readId].read = false;
                row_i_data_4_btn.innerText = 'Not read';
            } else {
                
                myLibrary[row_i_data_4_btn.dataset.readId].read = true;
                row_i_data_4_btn.innerText = 'Read';
            }
        });
        row_i_data_4.appendChild(row_i_data_4_btn);
        let row_i_data_5 = document.createElement('td');
        let row_i_data_5_btn = document.createElement('button');
        row_i_data_5_btn.textContent = 'Delete';
        // row_i_data_5_btn.className = 'deleteBtn';
        row_i_data_5_btn.dataset.deleteId = `${myLibrary.length-1}`;
        row_i_data_5_btn.addEventListener('click', function() {
            row_i.innerHTML = '';
            myLibrary.splice(this.dataset.deleteId, 1);
            // console.log(this.dataset.deleteId);
        });
        row_i_data_5.appendChild(row_i_data_5_btn);
        row_i.appendChild(row_i_data_1);
        row_i.appendChild(row_i_data_2);
        row_i.appendChild(row_i_data_3);
        row_i.appendChild(row_i_data_4);
        row_i.appendChild(row_i_data_5);
        tbody.appendChild(row_i);
}