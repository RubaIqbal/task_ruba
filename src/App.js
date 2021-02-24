import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation

} from "react-router-dom";
import CareerPage from "./Components/CareerPage";
import Jobs from "./Components/Jobs";
import Inbox from "./Components/Inbox";
import NavBar from "./Components/NavBar";
import Calender from "./Components/Calender";
import Reports from "./Components/Reports";



export default function App() {

  // const location = useLocation();
  
  // console.log(location?.pathname);

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/careerpage">
            <CareerPage />
          </Route>
          <Route path="/calender">
            <Calender />
          </Route>
          <Route path="/inbox">
            <Inbox />
          </Route>
          <Route path="/">
            <Jobs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }