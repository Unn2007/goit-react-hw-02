import CustomButton from "../CustomButton/CustomButton";

function Options({buttonNames,hanleClick,isReset,handleReset}) {
   
    const feedbackButtons =  buttonNames.map((item)=>{
        return (
        <CustomButton key={item} nameButton={item} onTap={()=>{hanleClick(item)}}/>
        
        
        )

    });
   

    return (
        <>{feedbackButtons}
        {(!!isReset)&&<CustomButton key="reset" nameButton={"Reset"} onTap={handleReset} />}
        
        </>
        );


        
    
}

export default Options