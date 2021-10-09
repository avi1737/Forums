import { Switch , Route , BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from "../components/common/ProtectedRoute";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import Feed from "../pages/home/Feed";

const Router = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
     <Switch>
       <Route exact path = "/Login" component = {Login} />
       <Route exact path = "/Register" component = {Register} />
       <ProtectedRoute exact path = "/Feed" component = {Feed} />
     </Switch>
    </BrowserRouter>
  );
};

export default Router;
