import React, { Component } from 'react';
import { connect } from 'react-redux';
// const Profile = () => <h2>Profile</h2>
import { Link } from 'react-router'
import { profileDiv, divPadding, centerText } from '../helpers/styleGuide'
import UserInfo from './UserInfo';
import IterateQuestions from '../questions/components/IterateQuestions';
import * as Selectors from '../questions/state/selectors';
import Header from '../shared/Header'

class Profile extends Component {

  render() {
    // console.log('User', this.props.userState);
    const {  questions } = this.props.questionsList;
    const userEmail = this.props.userState.email;

    const userQuestions = questions.filter(q => q._createdBy === userEmail);
    const userScore = userQuestions.reduce((sum, val) => sum + val.answerWorth , 0);
    return (
      <div style={{...profileDiv}}>
      <h1 style={{...divPadding, centerText}}>User Info</h1>
        <h3><Link to='/'>Back To Questions Page</Link></h3>
        <UserInfo {...this.props.userState} />
        <h2>Current Score: {userScore} </h2>
         <IterateQuestions questions={userQuestions} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userState: state.userState.user,
    questionsList: Selectors.getAllQuestions(state)
  }
}

export default connect(mapStateToProps)(Profile);

