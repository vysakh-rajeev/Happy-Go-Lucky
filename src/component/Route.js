import './App.css';
import MenuListComposition from './Menulist';
import MyEvent from './MyEvent';
import MyProfile from './MyProfile';
import ExploreEvent from './ExploreEvent';
import EventHistory from './EventHistory';
import AddButton from './PlusButton';
import PrivateEvent from './PrivateEvent';
import PublicEvent from './PublicEvent';
import Login from './component/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Routes() {
  return (
    <Router>
    <div>      
      <MenuListComposition/>
      <AddButton/>
      <Switch> 
        <Route path="/MyProfile" exact component={MyProfile} />
        <Route path="/MyEvent" component={MyEvent} />
        <Route path="/ExploreEvent" component={ExploreEvent} />
        <Route path="/EventHistory" component={EventHistory} />
        <Route path="/PrivateEvent" component={PrivateEvent} />
        <Route path="/PublicEvent" component={PublicEvent} />
      </Switch>
    </div>
    </Router>
  );
}

export default Routes;
