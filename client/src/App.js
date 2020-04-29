import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppMenu from './components/AppMenu';
import MyItem from './components/MyItem';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppMenu />
        <MyItem />
      </div>
    </Provider>
  );
}

export default App;
