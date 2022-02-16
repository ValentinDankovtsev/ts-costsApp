import React, { useEffect, useState } from 'react';
import About from './UI/About';
import Main from './UI/Main';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom'
import { auth } from './config/firebase';

import routes, { Re } from './config/routes';
import AuthRoute from './modules/auth/AuthRoute';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User detected.')
      } else {
        console.log('No user detected');
      }
      setLoading(false);
    })
  }, []);

  if (loading)
    return <div>Loding...</div>
  return (
    <Router>
      <Switch>
        {routes.map((route: Re, index: number) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(routeProps: RouteComponentProps<any>) => {
              if (route.protected)
                return <AuthRoute ><route.component {...routeProps} /></AuthRoute>;
              return <route.component  {...routeProps} />;
            }}
          />)}
      </Switch>
    </Router>
  )
}

export default App;
