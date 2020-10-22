import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer,10);
    
    return (
        <div>
            <br/>
            <h1>Child 2</h1>
            <br/>
            <p>Initial value of Reducer is: {state}</p>
            <br/>
            <button onClick={() => dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    );
}

export default Child2;