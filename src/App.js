import './App.css';

import Routes from './routes/Routes';
import { Context } from './context/context'
import { useState } from 'react';

function App() {
  const [context, setContext] = useState({});
  const cont = { context, setContext };
  return (
    <Context.Provider value={cont}>
      <Routes />
    </Context.Provider>
  );
}

export default App;
