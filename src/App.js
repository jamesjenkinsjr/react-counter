import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      value: 0
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
       <input type="number" onChange={this.valueChange} value={this.state.value}/>
       <button onClick={this.increment}>+</button>
       <button onClick={this.decrement}>-</button>
       <h1>{this.state.count}</h1>
       <button onClick={() => this.setState({count: 0})}>RESET MUTHALUVA</button>
     </div>
    );
  }
}

export default App;
