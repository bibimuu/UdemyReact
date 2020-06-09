import React from 'react';
import PropTypes from "prop-types";

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
    // {name:"Hao"}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
