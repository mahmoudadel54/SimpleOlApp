import { Switch, Route } from "react-router";
import "./App.css";
import MapComponentClass from "./components/mapComponent/classComp";
import MapComponent from "./components/mapComponent/fumctionComp";
//components
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <main style={{ }}>
        <Switch>
          <Route path="/MapwithClass" component={MapComponentClass} />
          <Route exact path="/MapwithFunction">
            <MapComponent />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default (App);
