import { Switch , Route , BrowserRouter} from "react-router-dom";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";

const Router = () => {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path = "/Login" component = {Login} />
       <Route exact path = "/Register" component = {Register} />
     </Switch>
    </BrowserRouter>
  );
};

export default Router;
