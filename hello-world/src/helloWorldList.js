import React, { Component } from 'react';
import './helloWorldList.css';

import HelloWorld from './helloWorld';
import AddGreeter from './AddGreeter';



class HelloWorldList extends Component {
    render() {
      return (
        <div className="HelloWorldList">
          <AddGreeter addGreeting={this.addGreeting}/>
      {this.renderGreetings()}
        </div>
      );
    }

    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Matt'] };
        this.addGreeting = this.addGreeting.bind(this);
      }

      addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] });
      }

      renderGreetings() {
        return this.state.greetings.map(name => (
          <HelloWorld key={name} Name={name}/>
        ));
      }
  }

  export default HelloWorldList