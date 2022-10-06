import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const [disabled, setDisabled] = useState(false)

  return (
    <div style={{alignItems: 'center', justifyContent: 'center', display:'flex', marginTop: '10%'}}>
      <button style ={{backgroundColor: disabled ? 'gray':buttonColor}} onClick={()=>setButtonColor(newButtonColor)} disabled={disabled}>Change to {newButtonColor}</button>
      <input id='disable-button-checkbox' defaultChecked={disabled} aria-checked={disabled} onChange={(e)=> setDisabled(e.target.checked)} type='checkbox'/>
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
