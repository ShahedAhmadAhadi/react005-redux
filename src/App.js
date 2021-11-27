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
        {/* <UsersList />
        <Prac /> */}
        <nav>
          <section>
            <h1>Redux Fundamentals Example</h1>

            <div className="navContent">
              <div className="navLinks"></div>
            </div>
          </section>
        </nav>
        <section>
          <h2>Welcome to the Redux Fundamentals example app!</h2>
        </section>
      </div>
    </Provider>
  );
}

export default App;
