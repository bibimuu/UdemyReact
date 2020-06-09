import React from 'react';

// function App() {
//   return (
//     <>
//       <label htmlFor="barr">bar</label>
//       <input type="text" id="barr" onChange={() => {console.log("aaa")}} />
//     </>
//   );
// }

const App = () => {
  const profiles = [
    {name:"Taro", age: 10},
    {name:"Hanako", age: 1},
    {name:"Hao"}
  ]
  return (
    <div>
      {
        profiles.map((profile,index) => {
          return <User key={index} name={profile.name} age={profile.age}/>
        })
      }
      <User name={"Taro"} age={10}/>
      <User name={"Hanako"} age={1}/>
    </div>
  )
}

const User = (props) => {
  return (
    <div>Meow! {props.name} {props.age}</div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
