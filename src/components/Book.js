/*jshint esversion:6*/
import React from 'react';

const Book = ({ title, author }) =>
  <ul>
    <li>
      <h3>{ title }</h3>
      <p>{ author }</p>
    </li>
  </ul>;

export default Book;