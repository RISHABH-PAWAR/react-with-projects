import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() =>setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{backgroundColor: "red"}}>
              red
            </button>
            <button
            onClick={() =>setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{backgroundColor: "green"}}>
              green
            </button>
            <button
            onClick={() =>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{backgroundColor: "blue"}}>
              blue
            </button>
            <button
            onClick={() =>setColor("olive")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{backgroundColor: "olive"}}>
              olive
            </button>
            <button
            onClick={() =>setColor("gray")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{backgroundColor: "gray"}}>
              gray
            </button>
            <button
            onClick={() =>setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{backgroundColor: "yellow"}}>
              yellow
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
