import React from 'react'
import Menu from './Menu'
import States from './pages/states/states'
import Cities from './pages/cities/cities'
import StatePost from './pages/states/post'
import StateEdit from './pages/states/edit'
import CityPost from './pages/cities/post'
import CityEdit from './pages/cities/edit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/states/states" component={States} />
          <Route path="/cities/cities" component={Cities} />
          <Route path="/states/post" component={StatePost} />
          <Route path="/states/edit/:id" component={StateEdit} />
          <Route path="/cities/post" component={CityPost} />
          <Route path="/cities/edit/:id" component={CityEdit} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
