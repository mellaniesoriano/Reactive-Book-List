/*jshint esversion:6*/
import React from 'react';

const Book = ({ title, author }) =>
  <div>
    <h3>{ title }</h3>
    <p>{ author }</p>
  </div>;

export default Book;