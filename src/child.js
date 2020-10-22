import React, { useContext } from 'react';
import CounterContext from './counterContext';

const Child = () => {

    let counterValue = useContext(CounterContext);
    return (
        <div>
            <br/>
            <h1>Context API Counter</h1>
            This is child: {counterValue[0]}
            <br/>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Add</button>
        </div>
    );
}

export default Child;