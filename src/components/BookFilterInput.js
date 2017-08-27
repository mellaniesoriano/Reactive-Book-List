/*jshint esversion:6*/
import React from 'react';

const BookFilterInput = ({ handleFilterChange }) =>
  <input
    id="book-filter"
    type="text"
    placeholder="Search for book"
    onChange={ handleFilterChange }
  />;

export default BookFilterInput;