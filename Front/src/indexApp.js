import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  }from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/icons.min.css';
import './assets/css/app.css';

import { withAdalLoginApi } from './adalConfig';

import App from './App';
import Home from './Components/Home';
import Loading from './Components/Loading';
import ErrorPage from './Components/ErrorPage';
import {authContext} from './adalConfig';

//const MyProtectedPage = withAdalLoginApi(App, () => <Loading />, (error) => <ErrorPage error={error}/>);

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <div>
            <ul>
                <li>
                    <Link to ="/ast">App</Link>
                </li>
                <li>
                    <Link to ="/home">Landing Page</Link>
                </li>
                {/*<li>
                    <button onClick={authContext.logOut}>Log Out</button>
                </li>*/}
            </ul>
            <Switch>
                <Route path ="/ast"><App/></Route>
                <Route path ="/home"><Home/></Route>
            </Switch>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);