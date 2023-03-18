import PropTypes from 'prop-types';
import { Buttons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, updateState }) => {
  return (
    <Buttons>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => {
              updateState(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  updateState: PropTypes.func.isRequired,
};
