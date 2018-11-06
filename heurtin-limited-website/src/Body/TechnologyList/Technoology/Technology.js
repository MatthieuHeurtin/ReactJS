import React, { Component } from 'react';
import './Technology.css'

import Description from './Description/Description'

class Technology extends Component {
    constructor(props){
        super(props)
        this.state = {name : props.name, visible : false, logoName : props.logoPath }
        this.expand = this.expand.bind(this);
        this.getDescription = this.getDescription.bind(this);
    }

    expand(event){
       this.setState( {visible : !this.state.visible})
    }
    
    getDescription(){
        switch(this.state.name) {
            case "C-Sharp":
                return <Description/>
        }
    }

    render(){
        return   <div className='Technology'>
        <button id='expandButton'   onClick={this.expand}>
             {this.state.name} 
        </button>
            <div>{
          this.state.visible
            ? this.getDescription()
            : null
            }</div>
    </div>
    }
}


export default Technology;