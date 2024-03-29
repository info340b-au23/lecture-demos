import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// const msgElem = <h1 id="hello" className="myclass">Hello React</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));

const title = "Hello JSX as a String";
const myArray = [1, 2, 3, 'a'];
const header = (
  <div>
    <header className="jumbotron">
      <h1>{title}</h1>
      <p>{1 + 1}</p>
      <p>"hello world".toUpperCase()</p>
      <p>{"hello world".toUpperCase()}</p>
      {myArray}
    </header>
    <p>Hey tim</p>
  </div>

);
// root.render(header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  header
);

