import React from 'react';
import { Route, Switch} from 'react-router';
//import DBTesting from './components/DBTesting';
import Register from './components/Register';
import Home from './components/Homepage';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './components/Login';
//import SideBar from './components/SideBar';
import MyProfile from './components/MyProfile';

class App extends React.Component{

  render(){
    return (
        <div>
          <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/sign-up" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                {  /*<Route path="/my-events" component={SideBar}></Route>*/  }       {  /* NOT USEFUL FOR NOW*/  }
                <Route path="/my-profile/:id" component={MyProfile}></Route>
              </Switch>      
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
