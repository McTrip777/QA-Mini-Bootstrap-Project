import { Route, Switch } from "react-router-dom"
import Landing from "./components/landing/Landing";
import Login from "./components/landing/Login";

const LandingApp = () => {
    return (
    <div className="App w-100 vh-100">
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </div>
    )
}

export default LandingApp
