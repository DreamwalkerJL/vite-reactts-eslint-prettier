import './App.css';
import { useState } from 'react';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';
import GlobalStyles from './GlobalStyles';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  function countAdd() {
    setCount((count) => count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <button onClick={countAdd}>🪂 Click me : {count}</button>
          <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
        <button name='lol' placeholder='was' disabled>lol</button>
        <button name='was' disabled>lol</button>
        <form action="">
          <input placeholder='wwwwwwwww' type="text" />
        </form>
      </header>
    </div>
  );
}

export default App;
