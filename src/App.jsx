import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './Component/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InputForm/>
     </>

  )
}

export default App
