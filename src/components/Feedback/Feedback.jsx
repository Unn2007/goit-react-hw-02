import PropTypes from 'prop-types';
import firstLetterUppercase from "../../utils/firstLetterUppercase";

function Feedback({ names, countState, total, positive }) {
  const feedbackItems = names.map((name) => {
    return (
      <p key={name}>{`${firstLetterUppercase(name)}:${countState[name]}`}</p>
    );
  });
  return (
    <>
      {feedbackItems}

      <p>{`Total:${total}`}</p>
      <p>{`Positive:${positive}%`}</p>
    </>
  );
}

export default Feedback;

Feedback.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  countState: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    
  }),
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};