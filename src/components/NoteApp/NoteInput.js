import React, { Component } from 'react'
import styles from './styles.module.css'
import Color from './color'


export default class NoteInput extends Component {
    constructor(props){
        super(props)
        this.state ={
            choosedColer:'white',
            colors : ['green','yellow','blue','white'],
            inpuValue : ''
        }
        this.chooseColor = this.chooseColor.bind(this)
    }

    chooseColor(color){
        this.setState({
            choosedColer : color
        })
        
    }

    putValue(event){
        this.setState({
            inpuValue : event.target.value 
        })
    }

    addNoteBtn(){
        if(this.state.inpuValue.length > 0) {
            this.props.addNoteHandler(this.state.inpuValue , this.state.choosedColer)
            this.setState({
                inpuValue : ''
            })
        }
        
    }

  render() {
    return (
      <div className={styles.noteINputContainer}>
        <input value={this.state.inpuValue} className={`${styles.noteInput} ${styles[this.state.choosedColer]}`} type="text" onChange={this.putValue.bind(this)}/>
        <div className={styles.inputOptions}>
            <div className={styles.colorsContainer}>
            {this.state.colors.map(color=>{
                return <Color key={color} coler={color} chooseColor={this.chooseColor}/>
            })}
            </div>
            <button onClick={this.addNoteBtn.bind(this)}>Add Note</button>
        </div>
        
      </div>
    )
  }
}
