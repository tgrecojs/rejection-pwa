import React from 'react';
import rfx from 'rfx';
const listItemStyles = {
    width: '300px',
    padding: '1em',
    margin: '.5em 0 0 .5em',
    border: '2px dotted #000'
}
const SingleQuestion = rfx`
// Take two values, a & b, and return the sum.
add2(a: n, b: n) => Number
`( 
    ({questionString = 'Default Question String', answer = false, _createdBy = 'anonomyous@gmail.com', createdAt} = {}) => {
            return (
                <li style={{...listItemStyles}} className={answer}>
                    <h3>Question: {questionString}</h3>
                    <h4>Don't Even need to show answer: {answer === 'false' ? 10 : 1 }</h4>
                    <h5>Answered by: {_createdBy}</h5>
                    <h3>Asked on: {createdAt}</h3>
                </li>
  )
}
);

export default SingleQuestion

