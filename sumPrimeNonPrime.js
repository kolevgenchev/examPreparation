function sumPrime(input){
   index=0
   let command=input[index]
   index++
   let sumPrime=0
   let sumNonPrime=0
   let isNegative=false
   while(command!="stop"){
     let isPrime=true;
    let currentNumber=Number(command)
    if(currentNumber===0){
     sumNonPrime+=currentNumber
    }else if(currentNumber<0){
       console.log("Number is negative.")
       command=input[index]
       index++
       isNegative=true
       continue;
    }
    for(let i=2;i<currentNumber;i++){
     
       if(currentNumber%i===0){
           isPrime=false;
           sumNonPrime+=currentNumber
           break;  
    } 
    
   }
   if(isPrime){
     sumPrime+=currentNumber
    }
    command=input[index]
    index++
  }
  
  if(command==="stop"){
     console.log(`Sum of all prime numbers is: ${sumPrime}`)
     console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)
  }
}
sumPrime(["0", "-9", "0", "stop"])