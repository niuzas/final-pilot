import logo from './logo.svg';
import './App.css';

import AnimalManager from './components/AnimalManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Animals</h1>
      </header>
          <AnimalManager />
    </div>
  );
}

export default App;
