import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Alert from '../layout/Alert'
import NotFound from '../layout/NotFound'
import Footer from '../layout/Footer'

const Routes = () => {
  return (
    <section>
      <Alert />
      <Switch>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </section>
  )
}

export default Routes
