import React from "react";
import "./Counter.css";

export default class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
  }

  componentWillUnmount(){
    console.log('ComponentWillUnmount');
  }

  render(){
    return(
      <div className='button_cointainer'>
        <button className='button_style' onClick={this.props.increment}>+</button>
        <button className='button_style' onClick={this.props.decrement}>-</button>
      </div> 
    )
  }
}