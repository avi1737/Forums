import { Switch , Route , BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeLayout from "../components/common/HomeLayout";
import Loader from "../components/common/Loader";
import { ProtectedRoute } from "../components/common/ProtectedRoute";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import Feed from "../pages/home/Feed";

import SinglePost from "../pages/home/SinglePost";

const Router = () => {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path = "/Login" component = {Login} />
       <Route exact path = "/Register" component = {Register} />
       <Route exact path = "/spinner" component = {Loader}/>

       <HomeLayout> 
        <ProtectedRoute path = "/Feed" component = {Feed} />
        <ProtectedRoute path = "/post/:id" component = {SinglePost} />
       </HomeLayout>
       
     </Switch>
     <ToastContainer position={"bottom-left"}/>
    </BrowserRouter>
  );
};

export default Router;
