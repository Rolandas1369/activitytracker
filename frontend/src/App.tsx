import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/construction/').then((data) => {
      console.log(data)
    })
  })


  const [site, setSite] = useState([
  {
    name: "Zujunai",
    location: "100.100",
    price: 1000,
    workers: ['Tomas', 'Viktoras']
  },
  {
    name: "Zujunai",
    location: "100.100",
    price: 1000,
    workers: ['Tomas', 'Viktoras']
  },
]);


  return (
    <div className="App">
      <h1>Objektai</h1>
    </div>
  );
}

export default App;
