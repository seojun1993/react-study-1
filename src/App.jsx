import './App.css'
import Box from './component/Box.jsx';
import { useState } from 'react';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다 ( win - 초록, lose - 빨강, draw - 검정)


const choice = {
  rock: {
    name : 'rock',
    img : 'https://thumb.ac-illust.com/07/07b5ccdc4ec9d6acbc516d53ef1dab33_t.jpeg',
  },
  scissors: {
    name : 'scissors',
    img : 'https://upload.wikimedia.org/wikipedia/commons/9/97/Standard_household_scissors.jpg',
  },
  paper: {
    name : 'paper',
    img : 'https://e7.pngegg.com/pngimages/348/695/png-clipart-rock-paper-scissors-rock-paper-scissors-lizard-spock-rock-paper-scissors-llc-hands-hand-love-game.png',
  }
}


function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  
  const play = ( userChoice ) => {
    setUserSelect(choice[userChoice]);
    let computeChoice = randomChoice();
    setComputerSelect(computeChoice);
    setResult(judgeMent(choice[userChoice], computeChoice));
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  const judgeMent = (user, computer) => {
    if(user.name === computer.name){ return 'draw' }
    else if(user.name === 'rock'){
      return computer.name === 'scissors' ? 'win' : 'lose';
    }
    else if(user.name === 'scissors'){
      return computer.name === 'paper' ? 'win' : 'lose';
    }
    else if(user.name === 'paper'){
      return computer.name === 'rock' ? 'win' : 'lose';
    }
  }

  return (
    <div class='container'>
      <div className='box-container'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='button-container'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  )
}

export default App
