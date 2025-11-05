import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

const anotherElement = (
  <a href="http://goggle.com" target='_blank'>visit goggle</a>
)

const anotherUser  = " chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'http://goggle.com' , target: '_blank'},
  'click me to visit goggle',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
