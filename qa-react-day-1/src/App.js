import { Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import AllPeople from "./components/people/AllPeople";
import AllPhotos from "./components/photos/AllPhotos";
import AllComments from "./components/comments/AllComments";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={AllPeople} />
        <Route path="/comments" component={AllComments} />
        <Route path="/photos" component={AllPhotos} />
      </Switch>
    </div>
  );
}

export default App;
