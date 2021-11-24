import React from 'react';
import Counter from './components/Counter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HookCounter from './components/HookCounter';
// import {store} from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <HookCounter />
      </div>
    </Provider>
  );
}

export default App;
