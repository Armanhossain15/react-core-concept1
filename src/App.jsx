import './App.css'
import './text.css'
import Text from './text'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'
function App() {
  const actors = ['sakib', 'raj', 'arman']
  const singers= [
    {name: 'arman', age: 56},
    {name: 'azad', age: 63},
    {name: 'suvro', age: 58},
    {name: 'pritom', age: 28},
  ]
  const books=[
    {id:1, name: 'ocin bocin', price: 345},
    {id:2, name: 'main roton', price: 245},
    {id:3, name: 'ami misorali', price: 400},
    {id:4, name: 'bhuter voy', price: 140},
    {id:5, name: '7vai compa', price: 340}
  ]
  return (
    <>
       <h1>Vite + React</h1>
       <Bookstore books= {books}></Bookstore>

       {/* {
        books.ma


       } */}





       {/* <Singer></Singer> */}
      {/* { singers.map(singer => <Singer singer= {singer}></Singer>)} */}
       {/* <Actor name="bapparaj"></Actor>
       {
        actors.map(actor => <Actor name= {actor}></Actor>)  */}
       {/* <Text task="Learn React" isDone={true}></Text>
       <Text task="Explore Core Concepts" isDone={false}></Text>
       <Text task="Try Jsx" isDone={true}></Text> */}
       {/* <Device name="laptop" price="60000"></Device>
       <Device name="Mobile" price="1200"></Device>
       <Device name="Watch" price="4000"></Device>
       <Person></Person>
       {/* <Person></Person>
       <Person></Person> */}
       {/* <Student grade="7th" score= '99'></Student>
       <Student grade="12th" score= '78'></Student>
       <Student grade="5th" score= '100'></Student>
       <Teacher></Teacher> */}
    </>
  )
}
function Device(props){
  return <h2>This Device : {props.name} Price : {props.price}</h2>
}
function Person(){
  const person ={name: 'arman hossain', age: 25}
  return <p>my name is {person.name} and my age is {person.age}</p>
}

function Student({grade, score}){
  return (
    <div className='text-style'>
      <h3>this is a student</h3>
      <p>grade: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}
function Teacher(){
  const teacherStyle={
    margin: '20px',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '20px'
  }
  return (
    <div style={teacherStyle}>
      <h3>this is a student</h3>
      <p>name:</p>
      <p>age: </p>
    </div>
  )
}
export default App
