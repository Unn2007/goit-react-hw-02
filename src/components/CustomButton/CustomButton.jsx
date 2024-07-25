import firstLetterUppercase from "../../utils/firstLetterUppercase";

function CustomButton({nameButton,onTap}) {
    return (
        <button onClick={onTap} >{firstLetterUppercase(nameButton)}</button>
    )
}

export default CustomButton;