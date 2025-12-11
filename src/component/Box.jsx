import React from 'react'

// 가위 이미지 url = https://upload.wikimedia.org/wikipedia/commons/9/97/Standard_household_scissors.jpg
// 바위 이미지 url = https://thumb.ac-illust.com/07/07b5ccdc4ec9d6acbc516d53ef1dab33_t.jpeg
// 보 이미지 url = https://e7.pngegg.com/pngimages/348/695/png-clipart-rock-paper-scissors-rock-paper-scissors-lizard-spock-rock-paper-scissors-llc-hands-hand-love-game.png
const Box = (props) => {
  return (
    <div className='box'>
        <h1>{ props.title }</h1>
        <img className='item-img' src="https://upload.wikimedia.org/wikipedia/commons/9/97/Standard_household_scissors.jpg" alt="you" />
        <h2>Win</h2>
    </div>
  )
}

export default Box