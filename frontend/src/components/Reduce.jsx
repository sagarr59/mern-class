import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'decrement_age': {
        return {
          name: state.name,
          age: state.age - 1
        };
      }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'SAGAR', age: 10};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }
  function handleDecrementClick() {
    dispatch({ type: 'decrement_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    <>
    <div className='p-3'>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <button onClick={handleDecrementClick}>
        Decrement age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
      </div>
    </>
  );
}