import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component
{
    constructor(props){
        super(props);
        this.state = {id : 'menuButton'}
        this.selectButton = this.selectButton.bind(this);
    }

    selectButton(event)
    {
        var buttonCaller = document.getElementById(event.target.id);
        buttonCaller.className  = "selectedButton"; 
    }

    resetButton(event)
    {
        var buttonCaller = document.getElementById(event.target.id);
        buttonCaller.className  = "menuButton"; 
    }
    render(){
        return (
            <div className='Menu'>

            <button className='menuButton' id='presentation'onMouseOver={this.selectButton} 
            onMouseLeave={this.resetButton} >Presentation</button>

            <button className='menuButton' onMouseOver={this.selectButton} id='cv'
            onMouseLeave={this.resetButton} >CV</button>

            <button className='menuButton' id='projets' onMouseOver={this.selectButton}
             onMouseLeave={this.resetButton}>Projects</button>
             
            <button className='menuButton' id='misc' onMouseOver={this.selectButton}
            onMouseLeave={this.resetButton}>Misc</button>
            </div>
        )
    }
}


export default Menu;