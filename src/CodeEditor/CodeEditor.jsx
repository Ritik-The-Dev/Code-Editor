import React, { useState } from 'react'
import './CodeEditor.css'



const CodeEditor = () => {
const [html,setHtml] = useState('')
const [css,setcss] = useState('')
const [JS,setJS] = useState('')

const RunCode = ()=>{
    const iframe = document.querySelector("#output");
    iframe.contentDocument.body.innerHTML = `
    ${html} <style> ${css} </style>`;
    iframe.contentWindow.eval(JS)
}
  return (
    <div>
      <div className="main">
      <div className="codes">
        <div className="html">
            <h1>HTML</h1>
            <textarea id="html" 
            value={html}
            onChange={(e)=>setHtml(e.target.value)}           
            />
        </div>
        <div className="CSS">
        <h1>CSS</h1>
            <textarea id="html" 
            value={css}
            onChange={(e)=>setcss(e.target.value)}
            />
        </div>
        <div className="JS">
        <h1>JS</h1>
            <textarea id="html" 
            value={JS}
            onChange={(e)=>setJS(e.target.value)}
            />
        </div>
      </div>
      <div className="btn">
      <button onClick={RunCode} id='Execute'>Execute Code</button></div>
      <div className="output">
        <iframe 
        id='output'
        title='output'
        width="100%"
        height="100%"
        ></iframe>
      </div>
      </div>
    </div>
  )
}

export default CodeEditor
