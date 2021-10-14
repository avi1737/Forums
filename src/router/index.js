import { Switch , Route , BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeLayout from "../components/common/HomeLayout";
import { ProtectedRoute } from "../components/common/ProtectedRoute";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import Feed from "../pages/home/Feed";
import MyNetwork from "../pages/home/MyNetwork";

const Router = () => {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path = "/Login" component = {Login} />
       <Route exact path = "/Register" component = {Register} />

       <HomeLayout>
        <ProtectedRoute path = "/Feed" component = {Feed} />
        <ProtectedRoute path = "/MyNetwork" component = {MyNetwork} />
        <ProtectedRoute path = "/Chats" component = {MyNetwork} />
        <ProtectedRoute path = "/Profile" component = {MyNetwork} />
       </HomeLayout>
       
     </Switch>
     <ToastContainer position={"bottom-left"}/>
    </BrowserRouter>
  );
};

export default Router;
