/*jshint esversion:6*/
import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor() {
    super();

    this.state = {
      newTitle: '',
      newAuthor: ''
    };
  }

  handleNewTitle(evt) {
    this.setState({
      newTitle: evt.target.value
    });
  }

  handleNewAuthor(evt) {
    this.setState({
      newAuthor: evt.target.value
    });
  }

  handleSubmit() {
    this.props.addBook({
      title: this.state.newTitle,
      author: this.state.newAuthor
    });
    this.setState({
      newTitle: '',
      newAuthor: ''
    });
  }

  render() {
    return (
      <div className="new-book-form-container">
        <div>
          <input
            type="text"
            placeholder="Book Title"
            onChange={ this.handleNewTitle.bind(this) }
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Author"
            onChange={ this.handleNewAuthor.bind(this) }
          />
        </div>

        <div>
          <button onClick={this.handleSubmit.bind(this) }>Add Book</button>
        </div>
      </div>
    )
  }
}

export default NewBookForm;