import React, { Component } from "react";
import Section from "components/Section";
import Statistic from "components/Statistic";
import Feedback from "components/Feedback";
import Notification from "components/Notification";
import { AppSection } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = ['good', 'neutral', 'bad']; 

  handleFeedback = (t) => {
    if (this.options.includes(t)) { 
      this.setState((prevState) => ({
        [t]: prevState[t] + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <AppSection>
        <Section title="Please, leave a review about Expresso Cafe">
          <Feedback onLeaveFeedback={this.handleFeedback} options={this.options} />
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
}
