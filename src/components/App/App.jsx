import React, { useState } from "react";
import Section from "components/Section";
import Statistic from "components/Statistic";
import Feedback from "components/Feedback";
import Notification from "components/Notification";
import { AppSection } from './App.styled';

export default function App() {
  const [feedback, setFeedback] = useState(
   {
    good: 0,
    neutral: 0,
    bad: 0
  });

  const options = ['good', 'neutral', 'bad']; 

  const handleFeedback = (t) => {
    if (options.includes(t)) { 
      setFeedback((prevFeedback) => ({
        ...prevFeedback,[t]: prevFeedback[t] + 1,
      }));
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };


    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <AppSection>
        <Section title="Please, leave a review about Expresso Cafe">
          <Feedback onLeaveFeedback={handleFeedback} options={options} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There are no reviews" />
          )}
        </Section>
      </AppSection>
    );
  }

