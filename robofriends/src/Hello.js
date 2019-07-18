import React, { Component } from 'react'; //destructuring, can call Component directly now


class Hello extends Component{ //this is really just a function in JS. the only arguments it recieves are 'props'
//React is.. we are just creating these functions that take properties and render them

  render(){

    return (
    <div className= 'f1 tc'  //Class name is JSX. Class is JS. Reacts lets you ride this html like thing to Javascript (this is the virtual DOM). Reacts uses JSX to create virtual DOM, and compare it to the real DOM (Which is why React is fast)
      ><h1>Hello World</h1>
      <p> Welcome to my first React attempt lol </p>
      <p>{this.props.greeting}</p> //now we have whatever property from the Hello component
      </div>
    );
  }
}

export default Hello;
