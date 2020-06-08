import React from 'react';

function App() {
  return (
    <>
      <label htmlFor="barr">bar</label>
      <input type="text" id="barr" onChange={() => {console.log("aaa")}} />
    </>
  );
}

export default App;
