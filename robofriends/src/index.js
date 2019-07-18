import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';


//Think about what are the componenets you want to build

//Virtual DOM
ReactDOM.render(
<div>
  <Card id ={robots[0].id} name={robots[0].name}/>
  <Card id = {robots[1].id} name={robots[1].name}/>
  <Card id = {robots[2].id} name={robots[2].name}/>
</div>, document.getElementById('root')); //greet is a property, now we have access to greeting

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
