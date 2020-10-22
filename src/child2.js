import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer,10);
    console.log(state);
    return (
        <div>
            <br/>
            <h1>Child 2</h1>
        </div>
    );
}

export default Child2;