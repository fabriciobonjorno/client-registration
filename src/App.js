import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Post from './pages/states/post'
import Edit from './pages/states/edit'
import States from './pages/states/states'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={States} />
        <Route path="/states/post" component={Post} />
        <Route path="/states/edit" component={Edit} />
      </Switch>
    </Router>
  )
}

export default App;
