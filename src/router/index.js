import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../components/Hoc/ProtectedRoute";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import DashboardLayout from "../container/DashboardLayout";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />

      <ProtectedRoute path="/" component={DashboardLayout} />
    </Switch>
  );
};

export default Router;
