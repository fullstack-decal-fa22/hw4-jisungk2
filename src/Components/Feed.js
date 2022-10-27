import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [curr, setCurr] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = curr.map((c, i) => {
        return (
            <Block color={c} caption={c} key={i}/>
        )
    }
    ); // TODO: edit this variable

    const handleClick = (c) => {
        setCurr(curr => [...curr, c]);
    }

    return (
        <div>
            <Menu onClick={(c) => handleClick(c)}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;
