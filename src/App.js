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
          <tbody>
            <tr>
              <td>
                <h3 class="top">Titos</h3>
              </td>
              <td>
                <img class="small" src="https://img1.wsimg.com/isteam/ip/c6543e0e-1bb7-4875-ae65-b220bfb8aac4/logo/Titos%20Roja.png/:/rs=h:125/qt=q:95"></img>
              </td>
              <td>
                <ul>
                  <li>Hamburguesas</li>
                  <li>Alitas</li>
                  <li>Boneless</li>
                  <li>Tacos</li>
                  <li>Burritos</li>
                </ul>
              </td>
              <td>
                asd
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="top">KFC</h3>
              </td>
              <td>
                <img class="KFC" src="https://i.pinimg.com/originals/aa/92/89/aa9289de1ed2865bccd7c7457f246482.jpg"></img>                
              </td>
              <td>
                <ul>
                  <li>Hamburguesas</li>
                  <li>Alitas</li>
                  <li>Boneless</li>
                </ul>
              </td>
              <td>
                
              </td>
            </tr>
            <tr>
              <td>
                <h3 class="top">McDonald's</h3>
              </td>
              <td>
                <img class="small" src="https://logosmarcas.com/wp-content/uploads/2018/05/McDonalds-S%C3%ADmbolo.png"></img>                
              </td>
              <td>
                <ul>
                  <li>Hamburguesas</li>
                </ul>
              </td>
              <td>
              </td>
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
