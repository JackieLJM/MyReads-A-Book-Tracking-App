import React from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks.js';
import SearchBooks from './SearchBooks.js'
// import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ListBooks}/>
        <Route path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp;
