import React, { Component } from 'react'
import styles from './styles.module.css'
import { RxCross1 } from "react-icons/rx";

export default class RenderNote extends Component {

  deleteBtn(){
    this.props.deletenoteHandler(this.props.id)
    
  }

  render() {
    return (
      <div className={`${styles.noteDiv} ${styles[this.props.backGround]} noteContainer`}>
        <button onClick={this.deleteBtn.bind(this)} className={styles.closeButton}><RxCross1 /></button>
        <h5 className={styles.noteText}>{this.props.note}</h5>
      </div>
    )
  }
}