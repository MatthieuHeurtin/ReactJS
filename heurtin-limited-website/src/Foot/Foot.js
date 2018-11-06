import React, { Component } from 'react';
import './Foot.css'

class Foot extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='Foot'>
            First release : 5 Novembre 2018 <br/>
            Last release : 6 Novembre 2018
            </div>
        )
    }
}

export default Foot;