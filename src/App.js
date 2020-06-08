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
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return (
    <div>Meow!</div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="barr">bar</label>
//         <input type="text" id="barr" onChange={() => {console.log("aaa")}} />
//       </>
//     )
//   }
// }

export default App;
