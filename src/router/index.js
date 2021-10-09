import { Switch , Route , BrowserRouter} from "react-router-dom";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import TaskPage from "../pages/account/TaskPage";

const Router = () => {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path = "/" component = {Login} />
       <Route exact path = "/Login" component = {Login} />
       <Route exact path = "/Register" component = {Register} />
       <Route exact path = "/task" component = {TaskPage}/>
     </Switch>
    </BrowserRouter>
  );
};

export default Router;
