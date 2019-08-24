import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function initialContent() {
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Header() {
  return (
    <div class="content">
      <header className="header">
        <img class="logo" src="https://avatars3.githubusercontent.com/u/54478309?s=400&u=85f013094cb596b74805e716edb071df0a064f7e&v=4"></img>
      </header>
      <div class="places">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Mas</th>
              <th>Lugar</th>
              <th>Comidas disponibles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                
              </td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>       
      </div>
    </div>
  );
}

function App() {
  return (
    Header()
  );
}

export default App;
