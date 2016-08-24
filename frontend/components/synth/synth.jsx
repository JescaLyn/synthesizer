import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import { NoteKey } from './note_key';
import { keyMap } from '../../reducers/notes_reducer';

class Synth extends React.Component{
  constructor() {
    super();
    this.notes = [];
    NOTE_NAMES.forEach( (noteName) => {
      this.notes.push(new Note(TONES[noteName], noteName));
    });
  }

  componentDidMount() {
    $(document).on('keydown', event => this.onKeyDown(event));
    $(document).on('keyup', event => this.onKeyUp(event));
  }

  onKeyDown(event) {
    let key = String.fromCharCode(event.keyCode).toLowerCase();
    this.props.keyPressed(key);
    $(`#${keyMap[key]}`).addClass("play");
  }

  onKeyUp(event) {
    let key = String.fromCharCode(event.keyCode).toLowerCase();
    this.props.keyReleased(key);
    $(`#${keyMap[key]}`).removeClass("play");
  }

  playNotes() {
    this.notes.forEach ( note => {
      if (this.props.notes.includes(note.noteName)) {
        note.stop();
        note.start();
      } else {
        note.stop();
      }
    });
  }

  render() {
    this.playNotes();

    const noteKeys = this.notes.map(note => (
      <div className="key" key={note.noteName} id={note.noteName}>{note.noteName}</div>
    ));

    return <div className="keyboard">{noteKeys}</div>;
  }
}

export default Synth;
