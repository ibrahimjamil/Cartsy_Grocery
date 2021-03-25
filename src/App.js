import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/app_components/Navbar'
import FixedSidebar from './components/app_components/FixesSidebar'
import Banner from "./components/app_components/Banner";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <div style={{display:"flex",flexDirection:"row"}}>
              <FixedSidebar/>
              <Banner/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
