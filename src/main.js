import React,{Component} from "react"
import ReactDom from "react-dom"
import App from "./app"

ReactDom.render(
    <App></App>,
    document.getElementById('app'),
    ()=>{
        console.log("挂载到app了")
    }
)