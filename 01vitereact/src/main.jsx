import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
  <div>
    <h1>Hello I am Amanul</h1>
  </div>
  )
}
/*
const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};
*/


const anotherElement = (
  <a href = "http://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Amanul Haque"
const reactElement = React.createElement(
  "a", 
  {
  href: 'http://google.com', target: '_blank'
  },
  'Click Here',
  anotherUser
);

createRoot(document.getElementById('root')).render(
    reactElement
)
