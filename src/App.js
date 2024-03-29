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

function renderPromotion() {
  return (
    <div class="content">
      Hello
    </div>
  );
}

function Header() {

  function test() {
    document.getElementById("myForm").innerHTML = "";

    return (
      <h1>Hola</h1>
    );
  }

  return (
    <div class="content">
      <header className="header">
        <img class="logo" src="https://avatars3.githubusercontent.com/u/54478309?s=400&u=85f013094cb596b74805e716edb071df0a064f7e&v=4"></img>
      </header>
      <div class="places" id="myForm">
        <table class="table table-hover">
          <tbody>
            <tr>
              <td>
                <h4 class="top">Titos</h4>
              </td>
              <td>
                <img class="small" src="https://img1.wsimg.com/isteam/ip/c6543e0e-1bb7-4875-ae65-b220bfb8aac4/logo/Titos%20Roja.png/:/rs=h:125/qt=q:95"></img>
              </td>
              <td>
                <div class="yes">Hamburguesas</div>
                <div class="yes">Boneless</div>
                <div class="yes">Alitas</div>
                <div class="yes">Tacos</div>
                <div class="yes">Burritos</div>
              </td>
              <td>
                <a href="/titos.html"><button type="button" class="btn btn-danger btn-lg">Discounts</button></a>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="top">Troka Chula</h4>
              </td>
              <td>
                <img class="small" src="https://pbs.twimg.com/profile_images/732938736799911936/2enE5zLK_400x400.jpg"></img>                
              </td>
              <td>
                <div class="yes">Hamburguesas</div>
                <div class="yes">Boneless</div>
                <div class="yes">Alitas</div>
                <div class="yes">Tacos</div>
                <div class="no">Burritos</div>
              </td>
              <td>
                <button type="button" class="btn btn-danger btn-lg" onClick={test}>Discounts </button>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="top">KFC</h4>
              </td>
              <td>
                <img class="KFC" src="https://i.pinimg.com/originals/aa/92/89/aa9289de1ed2865bccd7c7457f246482.jpg"></img>                
              </td>
              <td>
                <div class="yes">Hamburguesas</div>
                <div class="yes">Boneless</div>
                <div class="yes">Alitas</div>
                <div class="no">Tacos</div>
                <div class="no">Burritos</div>
              </td>
              <td>
                <a href="">
                  <button type="button" class="btn btn-danger btn-lg">Discounts</button>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="top">McDonald's</h4>
              </td>
              <td>
                <img class="small" src="https://logosmarcas.com/wp-content/uploads/2018/05/McDonalds-S%C3%ADmbolo.png"></img>                
              </td>
              <td>
                <div class="yes">Hamburguesas</div>
                <div class="no">Boneless</div>
                <div class="no">Alitas</div>
                <div class="no">Tacos</div>
                <div class="no">Burritos</div>
              </td>
              <td>
                <a href="">
                  <button type="button" class="btn btn-danger btn-lg">Discounts</button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>  
      </div>
    </div>
  );
}

function App(status) {
  
  if (status === "main") {
    return (
      Header()
    );
  }
}

export default App;
