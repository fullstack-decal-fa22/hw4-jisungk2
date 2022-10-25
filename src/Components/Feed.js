import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';
import Color from './Color';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [curr, setCurr] = useState([]);
    const [color, changeColor] = useState("none")

    /* Use the map() function to render multiple Blocks! */
    const posts = curr.map((c) => {
        return (
            <div>
                <Block color={c}/>
            </div>
        )
    }
    ); // TODO: edit this variable

    function onClick(c){
        setCurr(curr => [...curr, c]) 
        console.log(curr)
    }

    return (
        <div>
            <Menu>
            </Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;