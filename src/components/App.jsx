import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statisctic';
import { Notification } from './Notification/Notification';
import { Container, GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? ((good / total) * 100).toFixed(0) : 0;
  };

  clearStatistic = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
              clearStatistic={this.clearStatistic}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
