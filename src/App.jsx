import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {dec , inc } from "./Createslice"
function App() {
      let c = useSelector((s)=>s.counter.value)
      let dis = useDispatch()
  return (
    <>
    <h1>{c}</h1>

    <button onClick={()=>dis(inc())}>Increase</button>
    <button onClick={()=>dis(dec())}>Decrease</button>
    </>
  )
}

export default App
