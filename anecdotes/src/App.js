import {useState} from 'react'
const Button=({btn,text})=> <button onClick={btn}>{text}</button>

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [max,setMax]=useState(0)
  const [votes,setVotes] =useState([0,0,0,0,0,0])
  const nxtAnecdotes=()=>{
    setSelected( ()=>{
     let x=Math.floor(Math.random()*10)
     while(x>=6){
       x=Math.floor(Math.random()*10)
     }
     return x
    })
  }
  function vote(){
     const copy=[...votes]
     copy[selected]?copy[selected]+=1:copy[selected]=1
    setVotes(copy)
    setMax(votes.indexOf(Math.max(...votes)))
    console.log(votes,max,anecdotes[max])
  }
  
  
  return  <div>
      <h2>Anecdote of day</h2>
      {anecdotes[selected]}<br></br>
      <p>number of votes:{votes[selected]}
      </p>
      <Button btn={vote} text="vote"></Button>
      <Button btn={nxtAnecdotes} text="next Anecdote"></Button>
      <h2>Anecdote with Most Votes</h2>
      <p>{anecdotes[max]} </p>
      <p>has: {votes[selected]} votes </p>
      
    </div>
}

export default App;
