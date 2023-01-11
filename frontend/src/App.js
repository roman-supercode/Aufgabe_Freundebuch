import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Uebersicht from './pages/Uebersicht';
import { useState } from 'react';

function App() {
  // db state in parent
  const [data, setData] = useState([]);

  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Uebersicht data={data} setData={setData} />} />
        <Route path='/detail/:id' element={<Detail data={data} />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
