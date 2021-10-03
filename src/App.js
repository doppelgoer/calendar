
import CalendarBox from './Components/CalendarBox';
import './App.css';
import {  useState } from 'react';

function App() {
  const [modalDisplay,setModalDisplay] = useState('none');
  return (
    <div className="App">
      <CalendarBox modalDisplay={modalDisplay} setModalDisplay={setModalDisplay}></CalendarBox>
      
    </div>
  );
}

export default App;
