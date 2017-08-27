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

  handleSubmit(evt) {
    this.props.addBook({
      title: this.state.newTitle,
      author: this.state.newAuthor
    });
    evt.preventDefault();
    this.setState({
      newTitle: '',
      newAuthor: ''
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <div>
          <input
            type="text"
            placeholder="Book Title"
            value={ this.state.newTitle }
            onChange={ this.handleNewTitle.bind(this) }
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Author"
            value={ this.state.newAuthor }
            onChange={ this.handleNewAuthor.bind(this) }
          />
        </div>

        <div>
          <button>Add Book</button>
        </div>
      </form>
    )
  }
}

export default NewBookForm;