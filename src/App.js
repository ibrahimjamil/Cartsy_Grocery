import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/app_components/Navbar'
import Banner from './components/app_components/Banner'
import FixedSidebar from './components/app_components/FixesSidebar'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <FixedSidebar/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
