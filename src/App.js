import React from 'react';
import { Route, Switch} from 'react-router';
//import DBTesting from './components/DBTesting';
import Register from './component/Signup';
import Home from './component/Homepage';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './component/Login';
//import SideBar from './components/SideBar';
import MyProfile from './component/MyProfile';
import MenuListComposition from './component/Menulist';
import EventHistory from './component/EventHistory';
import AddButton from './component/PlusButton';
import ExploreEvent from './component/ExploreEvent';

class App extends React.Component{

  render(){
    return (
        <div>
          <h1 style={{fontSize: "3rem", display : "flex",justifyContent: "center",
            alignItems: "center"}}>Happy Go Lucky</h1>
          <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <MenuListComposition/>
                <AddButton/>
                <Route path="/Menulist" exact component={MenuListComposition}></Route>
                <Route path="/sign-up" exact component={Register}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/MyProfile" exact component={MyProfile}></Route>
                <Route path="/EventHistory" exact component={EventHistory}></Route>
                <Route path="/Menulist" exact component={MenuListComposition}></Route>
                <Route path="/ExploreEvent" exact component={ExploreEvent}></Route>

              </Switch>      
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
