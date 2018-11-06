    import React, { Component } from 'react';
    import './Body.css'
    import DefaultContent from './Contents/DefaultContent'
    import PresentationContent from './Contents/PresentationContent'
    import TableOfContent from './Contents/TableOfContent'

    class Body extends Component{

    

    constructor(props){
        super(props)
        this.state = { steps: ["defaultContent","presentationContent", "tableOfContent"], i:0 };
        this.nextContent = this.nextContent.bind(this);
        this.getContent = this.getContent.bind(this);

    }


    nextContent(event){
        this.setState({ i:  parseInt(this.state.i) +1 }); 
        this.render()
    }

    getContent(index){
        switch(this.state.steps[this.state.i]) {
            case "defaultContent":
              return <DefaultContent/>
            case "presentationContent":
              return <PresentationContent/> 
            case "tableOfContent":
               return <TableOfContent/>
          }

    
    }

    render() {
        return (
            <div className='Body'>
                {this.getContent(this.state.i)}
                <button id="nextButton" onClick={this.nextContent}>Next</button>
            </div>
        );
    }


    }




    export default Body;