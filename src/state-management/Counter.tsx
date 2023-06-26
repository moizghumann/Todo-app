import { useReducer, useState } from 'react';
import counterReducer from './reducers/counterReducer';

const Counter = () => {

  // const [value, setValue] = useState(0)

  // The first parameter of useReducer is a reducer function (counterReducer here) that takes in the current state and an action and returns a new state
  // The second parameter of useReducer is the initial state value (0 here). It represents the initial value of the state before any actions are dispatched
  const [value, dispatch] = useReducer(counterReducer, 0)

  return (
    <div>
      Counter ({value})
      <button
        // dispatch function takes an action object and triggers reducer function (counterReducer here)
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
