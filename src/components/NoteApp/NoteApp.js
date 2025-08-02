import React, { Component } from 'react';
import styles from './styles.module.css'
import NoteInput from './NoteInput'
import RenderNote from './RenderNote'

export default class NoteApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes:[]
        }
        
        this.addNoteHandler = this.addNoteHandler.bind(this)
    }
    addNoteHandler(value ,color){
        console.log(value , color);
        let updateNotes = this.state.notes
        let newNoteObj = {
            id : this.state.notes.length ,
            note : value ,
            backGround : color
        }
        updateNotes.push(newNoteObj)
        this.setState({
            notes : updateNotes
        })
        
    }
  render() {
    return (
      <div className={styles.noteAppContainer}>
        <h1>Note App</h1>
        <NoteInput addNoteHandler={this.addNoteHandler}/>
        <div className={styles.noteContainer}>
            {this.state.notes.length > 0 && this.state.notes.map(note=>{
                return <RenderNote key={note.id} {...note}/>
                })}
        </div>
      </div>
    );
  }
}
