import { useReducer } from 'react';
import counterReducer from './counterReducer';
import useCounterStore from './store';

const Counter = () => {

  // const [value, setValue] = useState(0)

  // The first parameter of useReducer is a reducer function (counterReducer here) that takes in the current state and an action and returns a new state
  // The second parameter of useReducer is the initial state value (0 here). It represents the initial value of the state before any actions are dispatched
  const { counter, increment, decrement, reset } = useCounterStore()

  return (
    <div>
      Counter ({counter})
      <button
        // dispatch function takes an action object and triggers reducer function (counterReducer here)
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => decrement()}
        className="btn btn-primary mx-1"
      >
        Decrement
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
