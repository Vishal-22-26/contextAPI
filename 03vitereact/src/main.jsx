import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherElement = "chai aur react"

const reactElement = React.createElement( 'a', {href : 'https://google.com', target:'_blank'}, 'click me to visit google', anotherElement)

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

//Babel

/*Babel is a JavaScript compiler that plays a crucial role in React development. Here's what you need to know:

1) What does Babel do in React?
Transpiles JSX:

JSX is a syntax extension that allows you to write HTML-like structures within your JavaScript code. Babel transforms this JSX syntax into regular JavaScript function calls that React can understand and render.

2) Enables Modern JavaScript:

Babel allows you to use the latest JavaScript features (ES6, ES7, and beyond) in your React code, even if the browser or environment doesn't support them natively. It transpiles these features into code that can run on older browsers.

3) Optimizes Code:

Babel can perform various optimizations on your code to improve its performance and reduce its size.
*/

createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
