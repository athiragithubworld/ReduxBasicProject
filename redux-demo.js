const redux = require("redux");
// just install @redux/toolkit -->configureStore in the place of createstore

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENTBY2") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "DECREMENTBY2") {
    return {
      counter: state.counter - 2,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubcribtion = () => {
  const lateststate = store.getState();
  console.log(lateststate);
};

store.subscribe(counterSubcribtion);

// //  increasing the counter 5
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });

// decreasing the value and the value is decrementing by -1
store.dispatch({ type: "INCREMENTBY2" });
store.dispatch({ type: "DECREMENTBY2" });
