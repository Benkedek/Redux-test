import React from 'react';
import './style.css';
import { createStore, combineReducers } from 'redux';

let initState = {
  myStateProp: 'def',
};
const reducer = (state, action) => {
  console.log(state, action);
  return { actionType: 'test' };
};
const reducer2 = (state, action) => {
  console.log(state, action);
  return { actionType: 'test2' };
};
const combinedReducer = combineReducers({ reducer, reducer2 });
const valami = createStore(combinedReducer);
export default function App() {
  return <div>Test</div>;
}
