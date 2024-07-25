import PropTypes from 'prop-types';
import CustomButton from "../CustomButton/CustomButton";

function Options({ buttonNames, hanleClick, isReset, handleReset }) {
  const feedbackButtons = buttonNames.map((item) => {
    return (
      <CustomButton
        key={item}
        nameButton={item}
        onTap={() => {
          hanleClick(item);
        }}
      />
    );
  });

  return (
    <>
      {feedbackButtons}
      {!!isReset && (
        <CustomButton key="reset" nameButton={"Reset"} onTap={handleReset} />
      )}
    </>
  );
}

export default Options;

Options.propTypes = {
  buttonNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  hanleClick:PropTypes.func.isRequired,
  isReset: PropTypes.number.isRequired,
  handleReset: PropTypes.func.isRequired,
};
