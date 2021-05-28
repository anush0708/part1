import logo from './logo.svg';
import './App.css';
function Header(props){
  console.log("Header" +props.course.name);
  return  <h1> {props.course.name} </h1>
}
function Content(props){
  console.log("content "+props.parts);

  return <div>
     <p> Number of exercises in "{ props.parts[0].name }" are { props.parts[0].exercises } </p>
     <p> Number of exercises in { props.parts[1].name } are  { props.parts[1].exercises }</p>
     <p> Number of exercises in { props.parts[2].name } are { props.parts[2].exercises } </p>
    </div> 
}
function Total(props){
  console.log("Total"+props.parts);
  let sum=0;
  props.parts.forEach(element => sum+=element.exercises);
  return  <p>Number of exercises {sum }</p>
}

function App() {

  const course ={ 
    name:'Half Stack application development',
    parts :[
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name :'Using props to pass data',
        exercises : 7
      },
      {
        name :'State of a component',
        exercises : 14
      }
    ]
}
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
