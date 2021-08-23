import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import history from "./utils/history";
import User from "./views/user/userPage";
import Home from "./views/home/homePage";
import ErrorPage from "./views/404Page";
import Navbar from "./sharedComponents/navbar";

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">*/}
            {/*   <img src={logo} className="App-logo" alt="logo" />*/}
            {/*   <p>*/}
            {/*     Edit <code>src/App.js</code> and save to reload.*/}
            {/*   </p>*/}
            {/*   <a*/}
            {/*     className="App-link"*/}
            {/*     href="https://reactjs.org"*/}
            {/*     target="_blank"*/}
            {/*     rel="noopener noreferrer"*/}
            {/*   >*/}
            {/*     Learn React*/}
            {/*   </a>*/}
            {/*   <h1>Hello! My name is Jeff! 🤣</h1>*/}
            {/*   <br/>*/}
            {/*   <div style={{width: '10em'}}>*/}
            {/*     /!*style="width:100%;height:0;padding-bottom:100%;position:relative;"*!/*/}
            {/*     /!*frameBorder="0"*!/*/}
            {/*     <div style={{width: '100%', height: 0, paddingBottom: '100%', position: 'relative'}} >*/}
            {/*       <iframe title={"Gif"} style={{width: '100%', height: '100%', position: 'absolute'}} src="https://giphy.com/embed/wGEymBvo6FUlR9bbda"*/}
            {/*className="giphy-embed" allowFullScreen/>*/}
            {/*     </div>*/}
            {/*     <p><a href="https://giphy.com/gifs/my-code-works-runs-wGEymBvo6FUlR9bbda">via GIPHY</a></p>*/}
            {/*   </div>*/}
            {/* </header>*/}

            <Router history={history}>
                {/*// Add Navbar here*/}
                <Navbar />
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/:id/profile"} component={User}/>
                    <Route path={"*"} component={ErrorPage}>
                        {/*404 page    */}
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
