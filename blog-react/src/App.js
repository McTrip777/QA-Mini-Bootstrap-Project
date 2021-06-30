import { Route, Switch } from "react-router-dom"
import LandingApp from "./LandingApp";


const App = () => {
  return (
    <div className="App w-100 vh-100">
      <Switch>
        <Route path="/" component={LandingApp}/>
      </Switch>
    </div>
  );
}

export default App;
