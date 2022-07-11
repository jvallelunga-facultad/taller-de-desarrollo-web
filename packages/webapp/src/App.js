import useSWR from 'swr'

import logo from './logo.svg';
import './App.css';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const users = useSWR('/api/users', fetcher);
  console.log('error', users.error);
  console.log('data', users.data);

  const cards = useSWR('/api/cards', fetcher);
  console.log('error', cards.error);
  console.log('data', cards.data);

  return (
    <div className="App">
      <header className="App-header">
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

export default App;
