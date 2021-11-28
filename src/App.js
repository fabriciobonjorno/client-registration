import React from 'react'
import Nav from './Nav'
import States from './pages/states/states'
import Cities from './pages/cities/cities'
import statePost from './pages/states/post'
import stateEdit from './pages/states/edit'
import cityPost from './pages/cities/post'
import cityEdit from './pages/cities/edit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/states/states" component={States} />
          <Route path="/cities/cities" component={Cities} />
          <Route path="/states/post" component={statePost} />
          <Route path="/states/edit" component={stateEdit} />
          <Route path="/cities/post" component={cityPost} />
          <Route path="/cities/edit" component={cityEdit} />
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

export default App;
