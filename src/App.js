import logo from './logo.svg';
import './App.css';
import MenuListComposition from './Menulist';
import MyEvent from './MyEvent';
import MyProfile from './MyProfile';
import ExploreEvent from './ExploreEvent';
import EventHistory from './EventHistory';
import AddButton from './PlusButton';
import PrivateEvent from './PrivateEvent';
import PublicEvent from './PublicEvent';
import Homepage from './Homepage';
import login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import DemoForm from './Signup';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Happy Go Lucky</h1>
       <AddButton/>
      <Switch> 
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/MyProfile" component={MyProfile} />
        <Route path="/Menulist" component={MenuListComposition} />
        <Route path="/login" exact component={login}></Route>
        <Route path="/MyEvent" component={MyEvent} />
        <Route path="/ExploreEvent" component={ExploreEvent} />
        <Route path="/EventHistory" component={EventHistory} />
        <Route path="/PrivateEvent" component={PrivateEvent} />
        <Route path="/PublicEvent" component={PublicEvent} />
        <Route path="/signup" component={DemoForm} />
        <Route path="*" component={MyEvent} />
      </Switch>
    </div>
    </Router>
  );
}






export default App;
