/*jshint esversion:6*/
import React from 'react';
import Book from '../../components/Book.js';

const BookList = ({ books }) =>
  <div>
    {
      books.map((books, i) =>
        <Book
          title={ books.title }
          author={ books. author }
          key={ i }
        />)
    }
  </div>

export default BookList;