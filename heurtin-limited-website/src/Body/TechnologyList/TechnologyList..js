import React, { Component } from 'react';
import './TechnologyList..css'

import Technology from './Technoology/Technology'


class TechnologyList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return   <div className='TechnologyList'>
        <Technology name='C-Sharp'/>
        <Technology name='SQL'/>
        </div>
    }
}


export default TechnologyList;