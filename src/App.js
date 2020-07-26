import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
// import StateComp from './components/StateComp'
// import Keys from './components/Keys'
// import AntdComp from './components/AntdComp'
// import FetchData from './components/FetchData'
import './App.less'
import Home from './pages/Home'
import Mine from './pages/Mine'
import Detail from './pages/Detail'
import Shop from './pages/Shop'
import List from './pages/List'
import NotFound from './pages/404'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <NavLink activeClassName="selected" to="/home">
              home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/mine">
              mine
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/shop">
              shop
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/list">
              list
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mine">
            <Mine />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
