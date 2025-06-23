import React, { useReducer } from "react";

// Define reducer function before useReducer
let reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    case "Reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  let [state, dispatch] = useReducer(reducer, { count: 5 });

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">{state.count}</h1>

      <button
        className="mx-5 px-5 py-2 bg-green-500 text-white rounded w-[200px]"
        onClick={() => dispatch({ type: "Increment" })}
      >
        +
      </button>

      <button
        className="mx-5 px-5 py-2 bg-red-500 text-white rounded w-[200px]"
        onClick={() => dispatch({ type: "Decrement" })}
      >
        -
      </button>

      <button
        className="mx-5 px-5 py-2 bg-blue-500 text-white rounded w-[200px]"
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
