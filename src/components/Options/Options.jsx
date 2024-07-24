import CustomButton from "../CustomButton/CustomButton";

function Options({name,hanleClick}) {
    return (
        <CustomButton nameButton={name} onTap={hanleClick}/>
    )
}

export default Options