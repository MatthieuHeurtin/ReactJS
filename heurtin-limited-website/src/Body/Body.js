    import React, { Component } from 'react';
    import './Body.css'
    import DefaultContent from './Contents/DefaultContent'
    import PresentationContent from './Contents/PresentationContent'
    import TechnologyList from './TechnologyList/TechnologyList.';

    class Body extends Component{

    

    constructor(props){
        super(props)
        this.state = { steps: ["defaultContent","presentationContent", "tableOfContent"], i:0 };
        this.nextContent = this.nextContent.bind(this);
        this.getContent = this.getContent.bind(this);

    }


    nextContent(){
        this.setState({ i:  parseInt(this.state.i) +1 }); 
    }

    getContent(){
        switch(this.state.steps[this.state.i]) {
            case "defaultContent":
              return <DefaultContent/>
            case "presentationContent":
              return <PresentationContent/> 
            case "tableOfContent":
               return <TechnologyList/>
    }

    
    }

    render() {
        return (
            <div className='Body'>
                <button id="nextButton" onClick={this.nextContent}>Next</button>
                {this.getContent(this.state.i)}
             
            </div>
        );
    }


    }




    export default Body;