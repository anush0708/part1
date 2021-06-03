import './App.css';
import Statistics from './components/Statistics'
import Button from './components/Button'
import {useState} from 'react';
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick=()=>{
    setGood(good+1)
  }
  const neutralClick=()=>{
    setNeutral(neutral+1)
  }
  const badClick=()=>{
    setBad(bad+1)
  }
  let val=good||bad||neutral?false:true
  let total=bad+good+neutral
  return (
      <div>
        <h2>give feedback</h2>
        <Button handleClick={goodClick} text="Good"></Button>
        <Button handleClick={neutralClick} text="Neutral"></Button>
        <Button handleClick={badClick} text="Bad"></Button>
        <h2>
          Statistics
        </h2>
        {
        val?
          <h2>No feedbacks to show</h2>:
          <div>
            <table>
              <Statistics text="good" value={good}></Statistics>
              <Statistics text="neutral" value={neutral}></Statistics>
              <Statistics text="bad" value={bad}></Statistics>
              <Statistics text="All" value={total}></Statistics>
              <Statistics text="Average" value={((good-bad)/total).toFixed(2)}></Statistics> 
              <Statistics text="Positive" value={(good*100/total).toFixed(2)}></Statistics>
          </table>
          </div>
          }
      </div>
  )
}

export default App;
