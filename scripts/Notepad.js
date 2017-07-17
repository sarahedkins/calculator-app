import React, { Component } from 'react';

export default class Notepad extends Component {

  constructor(props) {
    super(props);
    const notepad = this.getNotepad();
    const initialNote = 'Write your notes here - We\'ll save it for offline!';
    this.state = {
      note: notepad || initialNote,
    };
  }

  setNotepad = (val) => {
    localStorage.notepad = val;
  };

  getNotepad = () => localStorage.notepad;

  saveText = (e) => {
    e.preventDefault();
    this.setNotepad(this.state.note);
  }

  updateTextArea = (e) => {
    this.setState({
      note: e.target.value,
    });
  }

  render() {
    return (
      <div className="border">
        <h2 className="header">
          Notepad
        </h2>
        <br />
        <form onSubmit={this.saveText}>
          <label htmlFor="notepad-textbox">
            <input
              id="notepad-textbox"
              type="text"
              value={this.state.note}
              onChange={this.updateTextArea}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
