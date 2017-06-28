import {
  ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN,
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
	SIGNIN_USER, SIGNIN_USER_SUCCESS,  SIGNIN_USER_FAILURE,
	LOGOUT_USER
} from './actions';

const INITIAL_STATE = {user: null, isAuthenticated:false, error:null, loading: false};

const userReducer = (state = INITIAL_STATE, action) => {
  let error;
  switch(action.type) {
    case ME_FROM_TOKEN:
    // loading currentUser from token in local/session storage storage,
    return { ...state, error:null, loading: true}; 
    case ME_FROM_TOKEN_SUCCESS:
    //return user, isAuthenticated = authenticated and make loading = false
    return { ...state, user: action.payload.data.user, isAuthenticated:true, error:null, loading: false}; //<-- authenticated
    case ME_FROM_TOKEN_FAILURE:
    // return error and make loading = false
     error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors   
    return { ...state, user: null, isAuthenticated:true, error:error, loading: false};
    case RESET_TOKEN:
    // remove token from storage make loading = false
    return { ...state, user: null, isAuthenticated:true, error:null, loading: false};

    case SIGNUP_USER:
    // sign up user, set loading = true and isAuthenticated = signup
    return { ...state, user: null, isAuthenticated:false, error:null, loading: true}; 
    case SIGNUP_USER_SUCCESS:
    //return user, isAuthenticated = authenticated and make loading = false
    return { ...state, user: action.payload.user, isAuthenticated:true, error:null, loading: false}; //<-- authenticated
    case SIGNUP_USER_FAILURE:
    // return error and make loading = false
    error = action.payload.data || {message: action.payload.message};
    //2nd one is network or server down errors      
    return { ...state, user: null, isAuthenticated:false, error:error, loading: false};
    case SIGNIN_USER:// sign in user,  set loading = true and isAuthenticated = signin
    return { ...state, user: null, isAuthenticated:false, error:null, loading: true}; 
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and isAuthenticated = authenticated
    return { ...state, user: action.payload.user, isAuthenticated: true, error:null, loading: false}; //<-- authenticated
    case SIGNIN_USER_FAILURE:// return error and make loading = false
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors      
    return { ...state, user: null, isAuthenticated:false, error:error, loading: false};
    case LOGOUT_USER:
      return {...state, user:null, isAuthenticated: false, error:null, loading: false};

    case RESET_USER:// reset authenticated user to initial state
    return { ...state, user: null, isAuthenticated:false, error:null, loading: false};
    
    default:
    return state;
  }
}

export default userReducer;