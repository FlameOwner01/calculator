import { useState } from "react";
import CalculatorFunctions from "./calculator functions/CalculatorFunctions";


const Calculator = () =>{


    const [inputValue, setInputValue] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(false);
   
    let  input = [];
  


    const clearInput = () =>{
        setInputValue([]);
        setMessage("");
        setShowMessage(false);
        document.getElementById("input-field").value ="";
        setDisabled(false);
        
    }
   
    const computeInput = () =>{
        var completeInput = "";
        var operatorsCounter = 0;
        var operandsCounter = 0;
        var operands = [];
        var operators = [];
        
        if(inputValue.length > 0){
            setShowMessage(false);
            setMessage("");
        }else{
            setShowMessage(true);
            setMessage("You did not enter anything!");
            return;
        }

        inputValue.map((key) =>{
            input.push(key.value);
            

            return inputValue;
        });
        

        var temp = [];
        


        input.forEach((element,i) => {
               
                    temp.push(element);
                
          
        });
        
        for(let i = 0; i < temp.length; i++){
            var tempNum = temp[i];
            
            if(i === temp.length-1){
                completeInput = tempNum;
            }
            
        }
        var notNum = false;
        completeInput.split(",").forEach(character =>{
           
            if(isNaN(character)){
                if(character !== "/" && character !== "-" && character !=="+" && character !== "*" ){
                    setShowMessage(true);
                    notNum = true;
                    setMessage("Only arthimetics and numbers are valid!");
                    return;
                    
                }else {
                    operatorsCounter++;
                    operators.push(character);
                    console.log(character, " operators counter +1");
                  
                }
            }else {
                operandsCounter++;
                operands.push(character);
                console.log(character," operands counter +1");
                
            }
                    
           
            });

            

            if(!notNum){

            
                if(operandsCounter - operatorsCounter === 1 && (operandsCounter>1 && operatorsCounter>0)){
                    setDisabled(true);
                    document.getElementById("input-field").value =document.getElementById("input-field").value + " = "+ CalculatorFunctions(operands, operators);
                    
                }else if(operandsCounter - operatorsCounter > 1){
                    setShowMessage(true);
                        setMessage("Somethings went wrong! Check the number of OPERANDS!");
                        return;
                }else if(operandsCounter - operatorsCounter < 1){
                    setShowMessage(true);
                    setMessage("Somethings went wrong! Check the number of OPERATORS!");
                    return;
                }else{
                    setShowMessage(true);
                    setMessage("Check your input, something is missing!");
                    return;
                }
            
            }
           


      
        
       
      
    }
    

    
    
  
     
   
    return (
        <div className="container">
            <input type="text" id="input-field" placeholder="Enter the operand and operator: 2,6,5.5,4,*,*-,+"  className="input-field"  onChange={(e) => setInputValue([...inputValue, {value: e.target.value}])}>

            </input>
            <button className = "buttons" onClick = {clearInput}>
                Clear
            </button>
            <button className = "buttons" id="compute" disabled={disabled} onClick = {computeInput}>
                Compute
            </button>
{
        showMessage && <div className="red">{message}</div>
}
    
            
        </div>
        
            

                 
    )   
    

    
}

export default Calculator;