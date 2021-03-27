import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/app_components/Navbar'
import FixedSidebar from './components/app_components/FixesSidebar'
import Banner from "./components/app_components/Banner";
import Productpage from "./components/app_components/Productpage";
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './components/Redux/Saga/Saga.js'
import {Provider} from 'react-redux'
import reducer from './components/Redux/Reducer/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const sagamiddlware=createSagaMiddleware()
const store=createStore(reducer,composeWithDevTools(applyMiddleware(sagamiddlware)))
sagamiddlware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
