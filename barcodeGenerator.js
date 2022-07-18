function barcode (input){
    let firstNumber=Number(input[0])
    let secondNumber=Number(input[1])
    let n=''
    let first=parseInt(secondNumber/1000)
    let second=parseInt(secondNumber/100%10)
    let third=parseInt(secondNumber/10%10)
    let forth=parseInt(secondNumber%10)
  
    for(let i=firstNumber;i<=secondNumber;i++){
      let firstDigit=parseInt(i/1000)
      let secondDigit=parseInt(i/100%10)
      let thirdDigit=parseInt(i/10%10)
      let forthDigit=parseInt(i%10)
       for(let k=firstDigit;k<=first;k++){
         for(let m=secondDigit;m<=second;m++){
            for(let z=thirdDigit;z<=third;z++){
                for(let x=forthDigit;x<=forth;x++){ 
                  if(k%2!==0&&m%2!==0&&z%2!==0&&x%2!==0){
                    n+=k+""+m+""+z+""+x+" "
            }
            }
         }
       }
        
    }
    console.log(n)
    break;
}
}
barcode(["2345",
"6789"])