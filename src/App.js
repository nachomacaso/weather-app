import React, { useState } from 'react';
import Header from './Header/Header';
import CitiesTable from './CitiesTable/CitiesTable';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="App">
      <Header handleSetData={setData} handleSetLoading={setLoading}/>
      <CitiesTable data={data} loading={loading}/>
    </div>
  );
}

export default App;
