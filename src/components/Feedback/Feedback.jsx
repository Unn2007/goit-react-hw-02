import firstLetterUppercase from "../../utils/firstLetterUppercase";

function Feedback({names,countState,total,positive}) {
   
    const feedbackItems = names.map((name)=>{
        return (
          
        <p key={name}>{`${firstLetterUppercase(name)}:${countState[name]}`}</p>
            
        );
    })
    return (
        
        <>
        {feedbackItems}
        
         <p>{`Total:${total}`}</p>
         <p>{`Positive:${positive}%`}</p>
        </>
        );
    
}

export default Feedback;