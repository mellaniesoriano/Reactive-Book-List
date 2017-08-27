/*jshint esversion:6*/
import React, { Component } from 'react';
import Book from '../../components/Book.js';

class BookList extends Component {
  render() {
    const { books, bookFilter } = this.props;

    return (
      <div className="book-list-container">
        {books
          .filter(book =>
            bookFilter === '' ||
            book.title.toLowerCase().indexOf(bookFilter.toLowerCase()) > -1 ||
            book.author.toLowerCase().indexOf(bookFilter.toLowerCase()) > -1
            )
          .map(book =>
            <Book
              title={ book.title }
              author={ book.author }
              key={ book._id }
            />)
        }
      </div>
      )
    }
  }

export default BookList;