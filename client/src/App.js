import Login from './pages/admin/login/Login'
import Home from './pages/admin/home/Home'
import AddEmployee from './pages/admin/addEmployee/AddEmployee'
import RemoveEmployee from './pages/admin/removeEmployee/RemoveEmployee'
import ViewEmployee from './pages/admin/viewEmployee/ViewEmployee'
import About from './pages/about/About'
import EmployeeLogin from './pages/employee/login/EmployeeLogin'
import Performance from './pages/admin/performanceReview/Performance'
import Leave from './pages/admin/leave/Leave'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'


function App() {
  const {admin} = useContext(AuthContext)

  return (

    <Router>
      <Switch>
        <Route path = "/login">
          {admin ? <Redirect to='/'/> : <Login/>}
        </Route>
        <Route exact path = '/'>
          {admin ? <Home/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/addEmployee">
          {admin ? <AddEmployee/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/removeEmployee">
          {admin ? <RemoveEmployee/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/view">
          {admin ? <ViewEmployee/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/performance">
          {admin ? <Performance/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/about">
          {admin ? <About/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/employeeLogin">
          {<EmployeeLogin/>}
        </Route>
        <Route path = "/leaves">
          {admin ? <Leave/> : <Redirect to='/login'/>}
        </Route>
      </Switch>
    </Router>
      
  );
}

export default App;
