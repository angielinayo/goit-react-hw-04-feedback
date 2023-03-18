import { StatsList } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({
  good,
  neutral,
  bad,
  totalFeedback,
  feedbackPercentage,
}) => {
  console.log(typeof feedbackPercentage);
  return (
    <StatsList>
      <ul>
        <li>
          Good <span>{good}</span>
        </li>
        <li>
          Neutral <span>{neutral}</span>
        </li>
        <li>
          Bad <span>{bad}</span>
        </li>
        <li>
          Total <span>{totalFeedback}</span>
        </li>
        <li>
          Positive feedback: <span>{feedbackPercentage}%</span>
        </li>
      </ul>
    </StatsList>
  );
};

Stats.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number,
  feedbackPercentage: PropTypes.number,
};
