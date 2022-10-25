import React, {useState} from 'react';
import Color from './Color';
import Block from './Block';
/* Add any imports you think you might need here! */

function Menu() {

  const [color, changeColor] = useState("none")

  const clicked = (c) => {
    return (
      <div>
        <Block color={c}/>
      </div>
    )
  }

    return (
      <div className="colorOptions">
        <Color color="red" handleClick={() => changeColor("red")}/>
        <Color color="pink" handleClick={() => changeColor("pink")}/>
        <Color color="blue" handleClick={() => changeColor("blue")}/>
        <Color color="green" handleClick={() => changeColor("green")}/>
        {color == "red" && clicked("red")}
        {color == "pink" && clicked("pink")}
        {color == "blue" && clicked("blue")}
        {color == "green" && clicked("green")}
      </div>
    );
}

export default Menu;