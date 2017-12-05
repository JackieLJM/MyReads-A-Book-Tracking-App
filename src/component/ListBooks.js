import React from 'react';
import {Link} from 'react-router-dom';
// import * as BooksAPI from '../utils/BooksAPI';
import Book from './CreateBook.js';
// import localBooks from '../utils/BooksData';

class ListBooks extends React.Component {
  render() {
    const remoteBooks = this.props.books;
    const current=(datas)=>(datas.filter((data)=>(data.shelf==='currentlyReading')));
    const wantTo=(datas)=>(datas.filter((data)=>(data.shelf==='wantToRead')));
    const read=(datas)=>(datas.filter((data)=>(data.shelf==='read')));
    

    let Books = [].concat(remoteBooks);    
    localStorage.setItem('books',JSON.stringify(Books));
    let storageBooks=JSON.parse(localStorage.books);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {current(storageBooks).map((data)=><Book key={data.id} changeShelf={this.props.changeShelf} book={data}/>)}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantTo(storageBooks).map((data)=><Book key={data.id} changeShelf={this.props.changeShelf} book={data}/>)}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read(storageBooks).map((data)=><Book key={data.id} changeShelf={this.props.changeShelf} book={data}/>)}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/Search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;