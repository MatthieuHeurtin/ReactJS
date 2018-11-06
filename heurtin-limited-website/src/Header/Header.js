import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    constructor(props){
        super(props);
    }


    
    render() {
        return (
            <div className="Header">
              <h1>Matt's website</h1>
              <h6> I want to meet you : <br/>
              <a href="mailto:matthieu.heurtin@gmail.com"><img src={require('./images/gmail.png')}/></a>
                </h6>
            </div>
          );
    }
}

export default Header