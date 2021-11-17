import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./Login/Login";
import Navbar from "./page/Navbar/Navbar";
import Home from "./page/Home/Home";
import Aboutus from "./page/About/Aboutus";
import Contact from "./page/Contact/Contact";
import Dashbord from "./page/Dashbord/Dashbord";

function App() {
  return (
    <>
          {/* <Login/> */}
      <Router>
        <Navbar />
        {/* <Dashbord /> */}
        <Switch>
          {/* <Route exatc path="/" component={Dashbord} /> */}
          <Route exatc path="/home" component={Home} />
          <Route exatc path="/aboutus" component={Aboutus} />
          <Route exatc path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
