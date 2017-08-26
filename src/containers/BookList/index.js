/*jshint esversion:6*/
import React, { Component } from 'react';
import Book from '../../components/Book.js';

class BookList extends Component {
  render() {
    const { books, searchBooks } = this.props;

    return (
      <div>
        {books
          .filter(book => {
            return (
              searchBooks === '' || book.title.toLowerCase().indexOf(searchBooks.toLowerCase()) >= 0 || book.author.toLowerCase().indexOf(searchBooks.toLowerCase()) >= 0
              );
          })
          .map( (book, i) =>
            <Book
              title={ book.title }
              author={ book.author }
              key={ i }
            />)
        }
      </div>
      )
    }
  }

export default BookList;