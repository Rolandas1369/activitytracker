import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import HomePage from "./components/homepage/homepage";
import Header from "./components/header/header";
import OrdersList from "./components/orderslist/OrdersList";

function App() {
  console.log(process.env.NODE_ENV)
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/homepage">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orders">
            <OrdersList></OrdersList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
