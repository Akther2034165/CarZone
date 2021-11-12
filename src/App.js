import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute.js/PrivateRoute";
import AllCars from "./pages/Explore/AllCars/AllCars";
import Dashborad from "./pages/Dashboard/Dashboard/Dashborad";
import Purchase from "./pages/Explore/Purchase/Purchase";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/explore">
            <AllCars />
          </PrivateRoute>
          <Route path="/purchase/:carID">
            <Purchase />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashborad />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
