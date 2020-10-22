import React from 'react';

const HeadLind = (props) => {
    return(
        <div>
            <h1>Simple Counter</h1>
            <br/>
            The value of counter is: {props.counts}
        </div>
    );
}

export default HeadLind;