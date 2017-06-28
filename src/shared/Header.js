import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../user/actions';
const LinkStyles = {color:'#fff',  fontSize: '17px', textDecoration: 'none'};
const flexList = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyleType: 'none',
  background: 'rgb(38, 45, 127)',
  margin: '0',
  alignItems: 'center',
  color: '#fff',
  minHeight: '50px'
}
const flexNav = {
  width: '100%'
}
class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    // this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) { 
    if(this.props.user.user && !nextProps.user.user) {
      this.context.router.push('/');
    }
  }

  renderSignInLinks(authenticatedUser) {
    if(authenticatedUser) {
      return (
        <ul  style={{...flexList}}>
            <li style={{paddingRight: '10px'}} role="presentation">      
              <Link role="presentation" style={{...LinkStyles}} to="/profile">
             {authenticatedUser.email}'s Profile 
              </Link>
            </li>
            <li style={{paddingRight: '10px'}} role="presentation">      
              <a style={{...LinkStyles}}  onClick={this.props.logout} href="javascript:void(0)">
              Log out
              </a>
            </li>
            	<li style={{paddingRight: '10px'}} role="presentation">      
      				<Link style={{...LinkStyles}} to="/new-question">
      				Submit New Question
    					</Link>
            </li>
        </ul>
      );
    }

    return (
      <ul  style={{...flexList}}>
          <li style={{paddingRight: '10px'}} role="presentation">      
            <Link  role="presentation" style={{...LinkStyles}} to="/login">
            Sign In
            </Link>
          </li>
          <li style={{paddingRight: '10px'}} role="presentation">      
            <Link style={{...LinkStyles}} to="/register">
            New User Sign Up
            </Link>
          </li>
      </ul>
   );
  }
  
	renderLinks() {
		const { type, authenticatedUser } = this.props;
       return (
        <div>
         {this.renderSignInLinks(authenticatedUser)}
        </div>
  		 );	
	};

	render() {
			return (
			 <nav style={{...flexNav}}>
			      {this.renderLinks()}
			 </nav>				
			);
	}
}

function mapStateToProps(state) {
  return { 
    authenticatedUser: state.userState.isAuthenticated === true ? state.userState.user : null,
    user: state.userState
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
     logout: () => {
         localStorage.removeItem('token');
         dispatch(logoutUser());
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);