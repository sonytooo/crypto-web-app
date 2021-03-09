import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './screens/Home';
import Details from './screens/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/', '/:pair']} exact>
          <Home />
        </Route>
        <Route path='/:pair/details' exact>
          <Details />
        </Route>
      </Switch>
    </Router>
  );


}

export default App;
