import React, { Component } from 'react';
import Email from './Email';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      value: ''
    }
    this.increment = this.increment.bind(this); //Binding means, inside of increment function, the this keyword is the component
    this.decrement = this.decrement.bind(this);
    this.valueChange = this.valueChange.bind(this);
  }
  increment(){
    this.setState({count: this.state.count + this.state.value});
  }
  decrement(){
    this.setState({count: this.state.count - this.state.value});
  }
  valueChange(e){
    this.setState({value: +e.target.value});
  }
  render() {
    return (
     <div>
        <div className="form-group">
          <input className="form-control" type="number" onChange={this.valueChange} value={this.state.value}/>
        </div>
        <button className="btn btn-large btn-primary" onClick={this.increment}>+</button>
        <button className="btn btn-large btn-primary" onClick={this.decrement}>-</button>
        <h1>{this.state.count}</h1>
        <button className="btn btn-large btn-primary" onClick={() => this.setState({count: 0})}>RESET MUTHALUVA</button>
        <Email />
     </div>
    );
  }
}

export default App;
