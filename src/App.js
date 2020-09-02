import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount  => previousCount + 1)
  const decrement2 = () => setCount(previousCount  => previousCount - 1)
  const double = () => setCount(previousCount  => previousCount * 2)
  const waru = () => setCount(previousCount  => { 
    if (previousCount % 3 === 0) {
      return previousCount / 3
    } else {
      return previousCount
    }
  })

  const reset = () => setCount(0)
  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={double}>x2</button>
      <button onClick={waru}>/3</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
