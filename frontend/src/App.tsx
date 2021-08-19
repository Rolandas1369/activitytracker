import React, {useState} from 'react';



function App() {

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
