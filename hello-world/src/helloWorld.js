import React, { Component } from 'react';
import './helloWorld.css';



class HelloWorld extends Component {
    render() {
        return (
            <div className="HelloWorld">
              {this.state.greeting} {this.props.Name}!

                    <br/>
      <button onClick={this.frenchify}>Frenchify!</button>
            </div>
          );
    }

    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
      }

      frenchify() {

        this.setState({ greeting: 'Bonjour' });
      }
  }

export default HelloWorld;