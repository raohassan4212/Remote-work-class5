import React, {useState} from 'react';
import './App.css';
import HeadLind from './headLine';
import Parent from './parent';
import CounterContext from './counterContext';




function App() {

  let [count, setCount] = useState(0);
  let [day, setDay] = useState(false);
  let countState = useState(0);

  return (
    <CounterContext.Provider value={countState}>
     <div className={`box ${day ? 'light' : ''}`}>
       <HeadLind counts={count}/>
       <br/>
       <button onClick={() => setCount(count + 1)}>Update Counter</button>
       <br/>
       <button onClick={() => setDay(!day)}>Change Day</button>
       <br/>
       <Parent/>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
