import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {PageStatus, Action } from './store/reducers/loadingReducer'

function App() {
  const dispatch = useDispatch();
  const status = useSelector<PageStatus, Action["type"]>((state) => state)
  const setToReady = () => {
    dispatch({type: "READY"})
  }
  const setToLoading = () => {
    dispatch({type: "LOADING"})
  }
  return (
    <>
    <h1>
      hello
    </h1>
    <p>
      `Status is {status}`
    </p>
      <input type='text' name='note' placeholder='Name'/>
      <button onClick={setToReady}>Ready</button>
      <button onClick={setToLoading}>Loading</button>
      <button onClick={() => {console.log(status)}}>Log</button>

    </>
  );
}

export default App;
