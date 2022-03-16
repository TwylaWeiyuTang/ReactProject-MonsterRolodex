import React from 'react';
import './cardListStyle.css';
import CardComponent from '../card/CardComponent';

const CardListComponent = (props) => {
  return (
    <div className='card-list'>{
        props.monsters.map(monster => (
        <CardComponent key={monster.id} monster={monster}/> ))
        // we are passing monster to define the monster that is going to be used as a prop in CardComponent file
        // key helps react to know which one in the monster state needs to be updated, so it
        // won't rerender all the data stored on the states except the part that is changed
      }</div>
  )
}

export default CardListComponent

// this file is for what should be included in the cardlist