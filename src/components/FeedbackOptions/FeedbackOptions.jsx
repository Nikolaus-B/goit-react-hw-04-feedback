import { Button, ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </ButtonContainer>
);
