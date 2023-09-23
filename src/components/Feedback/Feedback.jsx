

import React from "react";
import PropTypes from 'prop-types';
import {
  FeedBack, FeedBackButton
} from  "./Feedback.styled"

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <FeedBack>
      {options.map(option => (
        <FeedBackButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option === 'good' ? 'Good😀' : option === 'neutral' ? 'Neutral😐' : 'Bad😡'}
        </FeedBackButton>
      ))}
    </FeedBack>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
