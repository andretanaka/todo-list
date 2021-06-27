import React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'

import HomePage from 'pages/HomePage'

const Routes: React.FC<RouteProps> = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
)

export default Routes
