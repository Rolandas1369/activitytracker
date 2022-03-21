import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import HomePage from "./components/homepage/homepage";
import Header from "./components/header/header";
import OrdersList from "./components/orderslist/OrdersList";
import WorkingTimesList from "./components/workingtimeslist/WorkingTimesList";
import { FunctionComponent } from "react";
import AddOrderForm from "./components/orderslist/AddOrderForm";
import AddWorkingTimeForm from "./components/workingtimeslist/AddWorkingTimeForm";
import WorkersList from "./components/worker/WorkersList";

const App: FunctionComponent = () => {
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
          <Route path="/workingtimes">
            <WorkingTimesList></WorkingTimesList>
          </Route>
          <Route path="/addorder">
            <AddOrderForm></AddOrderForm>
          </Route>
          <Route path="/addworkingtime">
            <AddWorkingTimeForm></AddWorkingTimeForm>
          </Route>
          <Route path="/workers">
            <WorkersList></WorkersList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
