import React, { Component } from 'react'
import styles from './styles.module.css'

export default class RenderNote extends Component {
  render() {
    return (
      <div className={`${styles.noteDiv} ${styles[this.props.backGround]}`}>
        <h5>{this.props.note}</h5>
      </div>
    )
  }
}
