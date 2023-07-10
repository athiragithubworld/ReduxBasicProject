const redux = require("redux");
// just install @redux/toolkit -->configureStore in the place of createstore

const counterReducer = (state = { counter: 3 }, action) => {
  return {
    counter: state.counter - 1,
  };
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

store.dispatch({ type: "decrement" });
