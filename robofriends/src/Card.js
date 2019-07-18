import React, { Component } from 'react';
//we have to import React as we are writing JSX below, not HTML....


class Card extends Component {
  render(){
  return(
     <div className = 'bg-light-green dib br3 pa3 ma2 grow shadow-5'>
      <div>
        <h1>can only return 1 thing</h1>
      </div>
      <img alt = 'robots' src={'https://robohash.org/${this.props.id}?200x200'} />
      <div>
        <h2>{this.props.id}</h2>
        <p>{this.props.name}</p>
      </div>
    </div>

  )
}
}
//All JS expressions have to wrapped in {}, this is a JSX thing
export default Card;
