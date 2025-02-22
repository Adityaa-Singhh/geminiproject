import React from 'react'
import { assets } from '../../assets/assets'
import "./main.css"
function Main() {
  return (
    <div class="top">
      <div class = "header">
      <p>Gemini</p>
      <img src={assets.user_icon} alt="" />
    </div>
    </div>
  )
}

export default Main