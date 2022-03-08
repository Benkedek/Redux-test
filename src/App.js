import React from 'react';
import './style.css';
import { createStore } from 'redux';
const valami = createStore(
  (state, action) => {
    console.log(state, action);
    return { actionType: 'test' };
  },
  { actionType: 'def' }
);
export default function App() {
  return <div>Test</div>;
}
