import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minesCount, plusCount, resetCount } from './reducers/countSlice'
const App = () => {
  const state=useSelector(state=>state.count)
  const dispatch=useDispatch()
  console.log(state);
  return (
    <div>App

      <h1>counter {state}</h1>
      <button onClick={()=>dispatch(plusCount())}>plus </button>
      <button onClick={()=>dispatch(minesCount())}>mines</button>
      <button onClick={()=>dispatch(resetCount())}>reset</button>
    </div>
  )
}

export default App