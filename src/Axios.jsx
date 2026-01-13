import React from 'react'
import axios from 'axios';

const App = () => {

  async function getData() {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //axios.get('url') is to get data from the url and it returns a promise
    //this promise has 3 stages: pending, resolved, rejected
    console.log(resp.data);
  }

  return (
    <div>
      <button onClick={getData}>Click Me</button>
    </div>
  )
}


