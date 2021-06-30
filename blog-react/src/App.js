import { Route, Switch } from "react-router-dom"
// import Home from "./components/main/Home";
import Landing from "./components/landing/Landing";
import Login from "./components/landing/Login";


const App = () => {
  return (
    <div className="App w-100 vh-100">
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/Login" exact component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
