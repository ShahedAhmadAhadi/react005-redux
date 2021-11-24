import React from 'react';
import Counter from './components/Counter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HookCounter from './components/HookCounter';
import newStore from './redux/newStore';
// import {store} from './redux/store'

function App() {
  return (
    <Provider store={newStore}>
      <div className="App">
        <Counter />
        <HookCounter />
      </div>
    </Provider>
  );
}

export default App;
