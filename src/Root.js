import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import SignInForm from './user/SignIn'
import Profile from './user/Profile'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUpForm  from './user/SignUp'
import QuestionsBase from './questions/QuestionList';
import NewQuestion from './questions/QuestionForm';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={QuestionsBase} />
      <Route path='login' component={SignInForm} />
      <Route path='register' component={SignUpForm} />
      <Route path='new-question' component={NewQuestion} />
      <Route path='profile' component={Profile} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;