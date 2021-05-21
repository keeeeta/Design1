import Login from './components/pages/Login';
import Order from './components/pages/Order';
import Delivery from './components/pages/Delivery';
import Catalog from './components/pages/Catalog';
import Welcome from './components/pages/Welcome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={ Login }/>
        <Route path="/welcome" exact component={Welcome}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/order" exact component={Order}/>
        <Route path="/delivery" exact component={Delivery}/>
        <Route path="/catalog" exact component={Catalog}/>
        <Route path="/profile" exact component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
