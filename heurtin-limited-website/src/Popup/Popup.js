import React, { Component } from 'react';
import './Popup.css'

class Popup extends Component
{
    constructor(props){
        super(props)
    }


    render(){
        if(!this.props.show) {
            return null;
          }

        return (<div className='Popup'>
        <p>Hello, before starting, please note that this website has been designed using React JS, 
  and has been optimized for <span class="red">Mozilla firefox.</span> 
  <br/>Now let's start.
</p>
        <button id='closeButton' onClick={this.props.onClose}>Ok, got it</button>
        </div>
        );
    }


}


export default Popup;