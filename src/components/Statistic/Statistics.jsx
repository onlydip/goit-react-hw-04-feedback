import React from "react";
import PropTypes from 'prop-types';


import {
  StatisticsStyle,
  StatisticsButtonYellow,
  StatisticsButtonGreen,
  StatisticsButtonRed,
  StatisticsContainer
} from "./Statistics.styled";




export default function Statistic({ good, neutral, bad, total, positivePercentage })

{
    return (


          <StatisticsContainer>
    
    <StatisticsStyle>😀 Good: <StatisticsButtonGreen>{good}</StatisticsButtonGreen></StatisticsStyle>
    <StatisticsStyle>😐 Neutral: <StatisticsButtonYellow>{neutral}</StatisticsButtonYellow></StatisticsStyle>
    <StatisticsStyle>😡 Bad: <StatisticsButtonRed>{bad}</StatisticsButtonRed></StatisticsStyle>
    <StatisticsStyle>Total number of reviews: {total}</StatisticsStyle>
    <StatisticsStyle>Percentage of positive feedback: {positivePercentage}%</StatisticsStyle>
  </StatisticsContainer>
    );
};


Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};