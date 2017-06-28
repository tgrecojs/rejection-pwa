import React, { Component } from 'react';
import { centerText } from '../helpers/styleGuide';
import IterateQuestions from './components/IterateQuestions'
// import FilterLink from './filter-components/FilterLink'
import * as Actions from './state/actions'
import { connect } from 'react-redux'
import * as Selectors from './state/selectors';
// import _ from 'lodash/fp';

class QuestionsList extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

    render() {
    const {  loading, error, questions } = this.props.questionsList;
    const totalScores = questions.reduce((sum, val) => sum + val.answerWorth , 0);
    /** 
     * Commenting out Handling leaderboard
     * 
        const leaderboard = questions.reduce((acc, current) => {
          console.log(acc);
          const user =  { email: current._createdBy, score: ++ current.answerWorth }
          return acc + user;
        }, {});

        // console.log('Total Score', totalScores)
        // console.log('Full Leaderboard', leaderboard)

        // _.reduce((sum, num) => sum + num, 0, [10, 2])// 3
    */

    if(loading) {
      return <div><h1>Posts</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div>Error: {error.message}</div>
    }

    return (
      <div>
        <h1 style={{...centerText}}>All Questions</h1>
        <h4 style={{...centerText}}>Total Score of Combined Users: {totalScores}</h4>
          <IterateQuestions questions={questions} />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return { 
    questionsList: Selectors.getAllQuestions(state),
    user: state.userState.user
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => {
      dispatch(Actions.fetchQuestions()).then((response) => {
            !response.error ? dispatch(Actions.fetchQuestionsSuccess(response.payload.data)) : dispatch(Actions.fetchQuestionsFailure(response.payload.data));
          });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
