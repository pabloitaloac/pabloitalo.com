import { useEffect } from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = ({ component: Component, loadingFunction, ...rest }) => {
  useEffect(() => {
    loadingFunction(); // Run your "loading" function on route change
  }, [loadingFunction]);

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default CustomRoute;
