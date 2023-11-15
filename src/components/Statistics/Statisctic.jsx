import {
  StatisticButton,
  StatisticContainer,
  StatisticText,
} from './Statistic.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  clearStatistic,
}) => (
  <StatisticContainer>
    <StatisticText>Good: {good}</StatisticText>
    <StatisticText>Neutral: {neutral}</StatisticText>
    <StatisticText>Bad: {bad}</StatisticText>
    <StatisticText>Total: {total}</StatisticText>
    <StatisticText>Positive feedback: {positivePercentage}%</StatisticText>
    <StatisticButton onClick={clearStatistic}>Clear Feedback</StatisticButton>
  </StatisticContainer>
);
