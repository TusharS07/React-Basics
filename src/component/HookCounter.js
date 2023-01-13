import React, { useEffect, useState } from 'react'
import Hello from '../Hello'

function HookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
      document.title = `${count}`
    })

    function handleClick () {
      localStorage.setItem("count", 25)
      console.log(localStorage.getItem("count"))
    }


    return isLogin? (
      <div>
      <button onClick={handleClick}></button>
      <h1>Hello Tushar</h1>
      </div>
    ): (
      <h1>please login first</h1>
    )

  /*if (isLogin) {
    return (
      <h1>Hello Tushar</h1>
    )
  } else {
    return (
      <h1>please login first</h1>
    )
  }*/
  /*return (
    <div>
      <h1>{count}</h1>
        <button  onClick={() => {
           setCount((previousCount) => previousCount + 1)
           setCount((previousCount) => previousCount + 1)}}
        >click{count}</button>
    </div>
  )*/
}

export default HookCounter