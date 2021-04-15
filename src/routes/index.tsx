import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from 'pages/HomePage'
import Create from 'pages/CreatePage'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/create" component={Create} />
  </Switch>
)

export default Routes