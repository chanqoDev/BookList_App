 // book class : represents a book
 class Book {
     constructor(title, author, isbn) {
         this.title = title;
         this.author = author;
         this.isbn = isbn; 
     }
 }

 //UI Class:  Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Think N Grow Rich",
                author: 'Napoleon Hill',
                isbn: '151660'
            },
            {
                title: "Think Like a Monk",
                author: 'Jay Shetty',
                isbn: '9823489'
            }
        ]; 
        const books = StoredBooks; 

        books.forEach((book) => UI.addBookToList(book)); 
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list'); 

        const row = document.createElement('tr'); 

        row.innerHTML = `
        <td>${book.title}</td> 
        <td>${book.author}</td> 
        <td>${book.isbn}</td> 
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td> 
        `;
        list.appendChild(row); 
    } 
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove(); 
        }
    }

// creating a div that will validate the form if its empty any input is left unfilled
static showAlert(message, className) {
const div = document.createElement('div'); 
div.className = `alert alert-${className}`; 
div.appendChild(document.createTextNode(message)); 
const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
container.insertBefore(div, form);  
// Vanish in 3 seconds
setTimeout(() => document.querySelector('.alert').remove(), 3000)
}



    // clears the fields after we submit 
    static clearFields() {
        document.querySelector('#title').value = ''; 
        document.querySelector('#author').value = ''; 
        document.querySelector('#isbn').value = ''; 

    }
}
 // Store Class : Handles Storage

 // Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks); 
 // Event : add Book

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    // get form values
    const title = document.querySelector('#title').value; 
    const author = document.querySelector('#author').value; 
    const isbn = document.querySelector('#isbn').value; 
//validate 
if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please, fill in all fields', 'danger'); 
}else {
    // instantiate book
    const book = new Book(title, author, isbn);
    // add book to UI
    UI.addBookToList(book); 
    
    // clear fields
    UI.clearFields(); 
}
});

 // Event : remove a book // event propogration
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target); 
})
