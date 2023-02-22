// ./src/components/App.js

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageHome from './components/PageHome'
import PageNotFound from './components/PageNotFound'
import PageThread from './components/PageThread'

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <PageHome />
          </Route>
          <Route exact path={'/threads/:threadId'}>
            <PageThread />
          </Route>
          <Route path={'*'}>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App
