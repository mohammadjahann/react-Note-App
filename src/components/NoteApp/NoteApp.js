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
        this.deletenoteHandler = this.deletenoteHandler.bind(this)
    }

    addNoteHandler(value ,color){
        let updateNotes = this.state.notes
        let newNoteObj = {
            id : Date.now() ,
            note : value ,
            backGround : color
        }
        updateNotes.push(newNoteObj)
        this.setState({
            notes : updateNotes
        })  
    }

    deletenoteHandler(id){
      console.log(id);
      this.setState(prevState=>{
        return {notes : prevState.notes.filter(note=>{
          return note.id !== id
        })}
      })
      
    }

  render() {
    return (
      <div className={styles.noteAppContainer}>
        <h1>Note App</h1>
        <NoteInput addNoteHandler={this.addNoteHandler}/>
        <div className={styles.noteContainer}>
            {this.state.notes.length > 0 && this.state.notes.map(note=>{
                return <RenderNote key={note.id} {...note} deletenoteHandler={this.deletenoteHandler}/>
                })}
        </div>
      </div>
    );
  }
}
