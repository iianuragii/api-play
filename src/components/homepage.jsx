import React, { useState } from 'react'
import './hehe.css';
const Homepage = () => {

  const [data,setData] = useState([])

  let url = "https://api.restful-api.dev/objects"
  async function apiFetch(){
    const res = await fetch(url);
    const a = await res.json();
    console.log(a);
    setData(a)
  }  
  return (
    <div className='hu'>
      <h3>Json here</h3>
      <button onClick={apiFetch}>Click Me</button>
      <div>
        <br></br>
        <pre>{JSON.stringify(data,null,2)}</pre>
      </div>
    </div>
  )
}

export default Homepage
