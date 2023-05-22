import React, { useState } from 'react';
import MainPanel from './components/panel';
import './App.css';

function App() {
  const [state, setState] = useState('register');
  return (
    <div className={`main-field main-field-${state}`}>
      {state === 'register' && (
        <MainPanel />
      )}
    </div>
  );
}

export default App;
