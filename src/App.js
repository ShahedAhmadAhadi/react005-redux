import React from 'react';
import Counter from './components/Counter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HookCounter from './components/HookCounter';
import newStore from './redux/newStore';
import ReduxCounter from './components/ReduxCounter';
import Users from './components/Users';
import UsersList from './components/UsersLIst';
import Prac from './components/Prac';
// import {store} from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter />
        <HookCounter /> */}
        {/* <ReduxCounter /> */}
        {/* <Users /> */}
        <UsersList />
        <Prac />
      </div>
    </Provider>
  );
}

export default App;
