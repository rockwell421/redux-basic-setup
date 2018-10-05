import React, { Component } from 'react';
import './App.css';

//component imports
import Posts from './components/Posts';
import Postform from './components/Postform';

//redux imports
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          <Postform />
          <hr />
          <Posts />
        </header>
      </div>
    </Provider>
    );
  }
}

export default App;
