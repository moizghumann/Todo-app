
// Actions are plain JavaScript objects that describe the type of state update you want to perform.
interface Action {
    type: 'INCREMENT' | 'RESET';
}

// counterReducer is a reducer function that takes in the current state and an action and returns a new state. 
// It follows the signature (state, action) => newState. 
// The reducer function is responsible for updating the state based on the action type.
// The purpose of the action argument is to provide a way to communicate what change you want to make to the state.
const counterReducer = (state: number, action: Action): number => {
    // Updating the state
    // always return a new state from the reducer function to maintain immutability.
    if (action.type === 'INCREMENT') return state + 1;
    if (action.type === 'RESET') return 0;
    return state;
}

export default counterReducer;