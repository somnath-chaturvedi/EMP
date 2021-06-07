import Login from './pages/admin/login/Login'
import Home from './pages/admin/home/Home'
import AddEmployee from './pages/admin/addEmployee/AddEmployee'
import RemoveEmployee from './pages/admin/removeEmployee/RemoveEmployee'
import ViewEmployee from './pages/admin/viewEmployee/ViewEmployee'
import About from './pages/about/About'
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
        <Route path = "/view">
          {employee ? <ViewEmployee/> : <Redirect to='/login'/>}
        </Route>
        <Route path = "/about">
          {employee ? <About/> : <Redirect to='/login'/>}
        </Route>
      </Switch>
    </Router>
      
  );
}

export default App;
