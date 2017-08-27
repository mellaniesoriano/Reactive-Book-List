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
      books: [],
      bookFilter: ''
    };
  }

  handleFilterChange(evt) {
    this.setState({
      bookFilter: evt.target.value
    });
  }

  addBook(book) {
    addBookToFakeXHR(book)
      .then(book => {
        this.setState({
          books: book
        });
      });
    }

  componentDidMount() {
    getBooksFromFakeXHR()
      .then(getBook => {
        this.setState({
          books: getBook
        });
      });
    }

  render() {
    return (
      <div className="app-container">
        <AppTitle
          title={ this.title }
        />
        <p>Search For Book:</p>
        <BookFilterInput
          handleFilterChange={ this.handleFilterChange.bind(this) }
        />
        <p>Add New Book:</p>
        <NewBookForm
          addBook={ this.addBook.bind(this) }
        />
        <br />
        <BookList
          books={ this.state.books }
          bookFilter={ this.state.bookFilter }
        />
      </div>
    );
  }
}

export default App;