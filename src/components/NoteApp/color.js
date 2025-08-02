import React, { Component } from 'react'
import styles from './styles.module.css'


export default class Color extends Component {

    colorHandler(event){
        this.props.chooseColor(this.props.coler)
        
    }

  render() {
    return (
      <>
      <div className={`${styles[this.props.coler]} ${styles.clorDiv}`} onClick={this.colorHandler.bind(this)}>

      </div>
      
      </>
    )
  }
}
