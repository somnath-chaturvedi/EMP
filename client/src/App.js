import Login from './pages/admin/login/Login'
import Home from './pages/admin/home/Home'
import AddEmployee from './pages/admin/addEmployee/AddEmployee'
import RemoveEmployee from './pages/admin/removeEmployee/RemoveEmployee'
import UpdateEmployee from './pages/admin/updateEmployee/UpdateEmployee'
import EmployeeLogin from './pages/employee/login/EmployeeLogin'
import EmployeeHome from './pages/employee/home/EmployeeHome'
import Leave from './pages/employee/leave/Leave'
import ViewEmployee from './pages/admin/viewEmployee/ViewEmployee'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const {employee} = useContext(AuthContext)

  return (

    <Router>
      <Switch>
        <Route path = "/login">
          {employee ? <Redirect to='/'/> : <Login/>}
        </Route>
        <Route exact path = '/'>
          {employee ? <Home/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/addEmployee">
          {employee ? <AddEmployee/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/removeEmployee">
          {employee ? <RemoveEmployee/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/updateEmployee">
          {employee ? 
          <UpdateEmployee/> 
          : <Redirect to='/login'/>}
        </Route>
        <Route path = "/employee/login">
          <EmployeeLogin/>
        </Route>
        <Route exact path = "/employee">
          <EmployeeHome/>
        </Route>
        <Route path = "/employee/leave">
          <Leave/>
        </Route>
        <Route path = "/update">
          <ViewEmployee/>
        </Route>
      </Switch>
    </Router>
      
  );
}

export default App;
