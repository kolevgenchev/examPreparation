function equal (input){
    let a=Number(input[0])
    let b=Number(input[1])
    let printline=''
    for(let i=a;i<=b;i++){
     let evenSum=0
     let oddSum=0
        let n=''+i
        for(let j=0;j<n.length;j++){
            let currentDigit=Number(n.charAt(j))
            if(j%2===0){
                evenSum+=currentDigit
            }else {
                oddSum+=currentDigit
            }
        }
        if(evenSum===oddSum){
            printline+=n+" "
        }
        
        
    }
    console.log(printline)
}
equal(["100000",

"100050"])