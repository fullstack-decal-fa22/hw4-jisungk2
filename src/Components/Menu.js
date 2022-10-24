import React, { useState } from 'react';
import Color from './Color'
/* Add any imports you think you might need here! */

const Menu = () => { 

    return (
      <div className="colorOptions">
          <Color color="red" />
          <Color color="pink" />
          <Color color="blue" />
          <Color color="green" />
      </div>
    );
}

export default Menu;