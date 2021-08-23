import logo from './logo.svg';
import './App.css';

function App() {
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
        <h1>Hello! My name is Jeff! 🤣</h1>
        <br/>
        <div style={{width: '10em'}}>
          {/*style="width:100%;height:0;padding-bottom:100%;position:relative;"*/}
          {/*frameBorder="0"*/}
          <div style={{width: '100%', height: 0, paddingBottom: '100%', position: 'relative'}} >
            <iframe style={{width: '100%', height: '100%', position: 'absolute'}} src="https://giphy.com/embed/wGEymBvo6FUlR9bbda"
     className="giphy-embed" allowFullScreen/>
          </div>
          <p><a href="https://giphy.com/gifs/my-code-works-runs-wGEymBvo6FUlR9bbda">via GIPHY</a></p>
        </div>
      </header>
    </div>
  );
}

export default App;
