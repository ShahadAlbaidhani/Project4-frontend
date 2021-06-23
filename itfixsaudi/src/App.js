import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/home/home'
import Servies from './components/pages/servies/Servies'
import support from './components/pages/support/Support'
import SingInUser from './components/pages/user/Singin'
import Register from './components/Register'
import Profile from './components/pages/user/Profile'
import AllTechnicians from './components/pages/servies/AllTechnicians'
import SingInTechnician from './components/pages/Technician/Singin'
import RegisterTechnician from './components/pages/Technician/Register'
import RegisterUser from './components/pages/user/Register'
import singIn from './components/SingIn'
import Order from './components/pages/servies/Order'

import { decodeToken, isExpired } from "react-jwt"
import Activate from './components/Activate';
import ForgotPassword from './components/pages/user/ForgotPassword';

import TechnicianProfile from './components/pages/ProfileTechnician/TechnicianProfile'
import OrderDetails from './components/pages/ProfileTechnician/OrderDetails'
import ProfilleUser from './components/pages/ProfileUser/ProfilleUser'
import Protect from './components/Protect';
import ResetPassword from './components/pages/user/ResetPassword';
import ProfileEdit from './components/pages/ProfileUser/ProfileEdit'
import TechnicianForgotPassword from './components/pages/Technician/TechnicianForgotPassword';
import TechResetPassword from './components/pages/Technician/TechResetPassword';
import TechProfileEdit from './components/pages/ProfileTechnician/TechProfileEdit';
import TechChangePassword from './components/pages/ProfileTechnician/TechChangePassword';
import UserChangePassword from './components/pages/ProfileUser/UserChangePassword';
import ListUserOrders from './components/pages/ProfileUser/ListUserOrders';
import OrderTicket from './components/pages/ProfileUser/OrderTicket';
import ListTechOrders from './components/pages/ProfileTechnician/ListTechOrders';
import Payment from './components/pages/ProfileUser/Payment';
import AddPaymentAmount from './components/pages/ProfileTechnician/AddPaymentAmount';

function App() {

  const [user, setUser] = useState({})
  const [isLogin, setIsLogin] = useState(false)

  
  useEffect(() => {
    loginFunction()
  }, [])

  const loginFunction = () => {
    let token = localStorage.getItem("token")
    let decodeUser = decodeToken(token)
    if (decodeUser?.user && !isExpired(token)) {
      setUser(decodeUser.user)
      setIsLogin(true)
    } else {
      setUser({})
      setIsLogin(false)
    }
  }

  return (
    <div>

      <BrowserRouter>

      <Navbar isLogin={isLogin} user={user} loginFunction={loginFunction} />
      <div className="footer-conatiner">
        {/* router  */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Route exact path='/activate' component={Activate} />
        <Route exact path='/user/forgotPassword' component={ForgotPassword} />
        <Route exact path='/user/resetPassword/:resetLink' component={ResetPassword} />
        <Route exact path='/technician/forgotPassword' component={TechnicianForgotPassword} />
        <Route exact path='/technician/resetPassword/:resetLink' component={TechResetPassword} />

        <Route exact path="/Home" component={Home} />
        <Route exact path="/servies" component={Servies} />
        <Route exact path="/support" component={support} />
        <Route exact path="/singin" component={singIn} />

        <Switch>
          <Route exact path="/singin/user" render={() => <SingInUser loginFunction={loginFunction} />} />
          <Route exact path="/singin/Technician" render={() => <SingInTechnician loginFunction={loginFunction} />} />
        </Switch>

        <Route exact path="/Register" component={Register} />
        <Route exact path="/Register/User" component={RegisterUser} />
        <Route exact path="/Register/Technician" component={RegisterTechnician} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Technicians" component={AllTechnicians} />
        <Route exact path="/Order" component={Order} />
        <Route exact path="/TechnicianProfile" render={() => <TechnicianProfile user={user} />} />
        <Route exact path='/TechProfileEdit' component={TechProfileEdit} />
        <Route exact path="/TechChangePassword" component={TechChangePassword} />
        <Route exact path="/ListUserOrders" render={() => <ListUserOrders user={user} />}/>
        <Route exact path="/ListTechOrders" render={() => <ListTechOrders user={user} />} />
        <Route exact path="/OrderTicket" component={OrderTicket} />
        <Route exact path="/OrderDetails" component={OrderDetails} />
        <Route exact path="/UserProfile" render={() => <ProfilleUser user={user} />}/>
        <Route exact path="/ProfileEdit" component={ProfileEdit} />
        <Route exact path="/UserChangePassword" component={UserChangePassword} />
        <Route exact path="/payment" component={Payment} />
        <Route eaxct path="/AddPaymentAmount" component={AddPaymentAmount} />
        {/* <Route exact path="/Order/Inprogress/:id" component={OrderInprogress} /> */}

      
        {/* this is how we add islogin restriction do not delete this i will finish it once we finish all the routes */}
        {/* <Protect component={ProfilleUser} path={"/UserProfile/:id"} isLogin={isLogin} /> */}
        </div>
       {/* footer  */}
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
