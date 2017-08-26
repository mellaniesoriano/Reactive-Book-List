/*jshint esversion:6*/
import React from 'react';

const BookFilterInput = ({ searchFilter }) =>
  <input
    type="text"
    placeholder="Search for book"
    onChange={ searchFilter }
  />;

export default BookFilterInput;