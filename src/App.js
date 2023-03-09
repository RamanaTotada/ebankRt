import {Switch, Redirect, Route} from 'react-router-dom'

import Login from './LoginPage'
import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'
import Home from './Home'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
