import React from 'react'
import NoteHeader from './NoteHeader';
import Notes from './Notes';
import "../../assets/css/Noteapp.css"
import NavBar from '../NavBar/NavBar';

function NoteApp() {
  return (
    <div className="noteapp-container">
    <div className="main">
      <NoteHeader />
      <Notes />
    </div>
    </div>
  )
}

export default NoteApp;