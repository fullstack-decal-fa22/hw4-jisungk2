import React, {useState} from 'react';
import Color from './Color';
import Block from './Block';
/* Add any imports you think you might need here! */

const Menu = (props) => {


    return (
      <div className="colorOptions">
        <Color color="red" handleClick={props.onClick}/>
        <Color color="pink" handleClick={props.onClick}/>
        <Color color="blue" handleClick={props.onClick}/>
        <Color color="green" handleClick={props.onClick}/>
      </div>
    );
}

export default Menu;