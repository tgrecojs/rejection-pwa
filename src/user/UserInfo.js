import React from 'react'
import {userDetailsFlexbox, 
  // profileDiv, 
  divPadding, 
  // centerText 
} from '../helpers/styleGuide'


const UserInfo = ({ firstName, lastName, email, questions}) => {
  return (
  <div>
     <div className="userDetailsDiv" style={{...userDetailsFlexbox}}>
          <h4 style={{...divPadding}}>Name:</h4>
          <p> {firstName}</p>
        </div>
        <div className="userDetailsDiv" style={{...userDetailsFlexbox}}>
          <h4 style={{...divPadding}}>Username:</h4>
          <p> {lastName}</p>
        </div>
         <div className="userDetailsDiv" style={{...userDetailsFlexbox}}>
          <h4 style={{...divPadding}}>Email:</h4>
          <p> {email}</p>
        </div> 
  </div>
  )
}

export default UserInfo