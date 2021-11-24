const CalculatorFunctions = (operands, operators) =>{
    
   var newOperands = operands.reverse();
  
   console.log(newOperands, operators);

    let i = 0;

    newOperands.forEach(element => {
        i++;
    });
    
    for(let j = 0; j < i; j++){
        if(j === 0){
            var num1 = newOperands.shift();
            var num2 = newOperands.shift();
            var operation = operators.shift();
            j++;
            var result = 0;
            if(operation === "+"){
               result = parseFloat(num1) + parseFloat(num2);
                console.log("result: ", result.toFixed(2));
            }else if(operation === "-"){
                result = parseFloat(num1) - parseFloat(num2);
                console.log("result: ", result.toFixed(2));
            }else if(operation === "*"){
                result = parseFloat(num1) * parseFloat(num2);
                console.log("result: ", result.toFixed(2));
            }else if(operation === "/"){
                result = parseFloat(num1) / parseFloat(num2);
                console.log("result: ", result.toFixed(2));
            }
        }else{
            num1 = newOperands.shift();
            operation = operators.shift();
            if(operation === "+"){
                result = result + parseFloat(num1) ;
                 console.log("result: ", result.toFixed(2) );
             }else if(operation === "-"){
                result = result - parseFloat(num1);
                 console.log("result: ", result.toFixed(2));
             }else if(operation === "*"){
                result = result * parseFloat(num1) ;
                 console.log("result: ", result.toFixed(2));
             }else if(operation === "/"){
                result = result / parseFloat(num1) ;
                 console.log("result: ", result.toFixed(2));
             }
        }
        

    }
    
    
    return result.toFixed(2);
}

export default CalculatorFunctions;