import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/app_components/Navbar'
import FixedSidebar from './components/app_components/FixesSidebar'
import Banner from "./components/app_components/Banner";
import Productpage from "./components/app_components/Productpage";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <div style={{display:"flex",flexDirection:"row"}}>
              <FixedSidebar/>
              <div style={{display:"flex",flexDirection:"column"}}>
                <Banner/>
                <Productpage/>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
