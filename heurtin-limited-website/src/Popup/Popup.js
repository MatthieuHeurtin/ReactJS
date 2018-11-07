import React, { Component } from 'react';
import './Popup.css';

class Popup extends React.Component {



    render() {
      return (
        <div className='popup'>
           <div className='popup_inner'>
           <p>Hello, before starting, please note that this website has been designed using React JS, 
  and has bben optimized for <span class="red">Mozilla firefox.</span> 
  <br/>Now let's start.
</p>



          <button onClick={this.props.closePopup}>Ok, Got it</button>
          </div>
          </div>
      );
    }
  }

  export default Popup;