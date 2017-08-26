/*jshint esversion:6*/
import React, { Component } from 'react';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js';
import AppTitle from '../../components/BookListAppTitle.js';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm/index.js';
import BookFilterInput from '../../components/BookFilterInput.js';

class App extends Component {
  constructor() {
    super();

    this.title = 'React Book List';
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    getBooksFromFakeXHR()
      .then(books => {
        this.setState({
          books: books
        });
      });
    }

  render() {
    return (
      <div>
      <AppTitle title={ this.title } />
      <BookList books={ this.state.books } />
      </div>
      );
  }
}

export default App;