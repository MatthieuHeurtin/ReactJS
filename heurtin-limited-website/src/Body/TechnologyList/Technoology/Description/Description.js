import React, { Component } from 'react';
import './Description.css'

import CSHarpContent from './C#/CSHarpContent'


class Description extends Component {
    constructor(props){
        super(props)
        this.state = {key : props.name}
        this.getDescription = this.getDescription.bind(this);
        this.getImage = this.getImage.bind(this);
    }


    getDescription(){
        switch(this.state.key) {
            case 'C-Sharp':
              return <CSHarpContent/>
        }
    }

    getImage(){
        switch(this.state.key) {
            case 'C-Sharp':
              return <img id='logo' src={require('./C#/C#.png')}/>
        }
    }

    render(){
        return   <div className='Description'>
        <div id='left'>{this.getImage()}</div>
        <div id='right'> {this.getDescription()}</div>
    </div>
    }
}


export default Description;