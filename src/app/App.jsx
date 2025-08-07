import { useState } from 'react'
import reactLogo from '../assets/images/sun.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-bold'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          안녕하세요
        </p>
        <div className='font-big font-bold text-[24px]'>큰 글씨</div>
        <div className='font-small font-light text-gray-400 text-[13px]'>작은 글씨</div>
        <div className='font-logo text-yellow text-[33px]'>로고 글씨</div>
      </div>
      <p className="read-the-docs font-bold">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
