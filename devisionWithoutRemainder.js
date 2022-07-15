function devision (input){
    let n=Number(input[0])
    let devisibleTo2=0
    let devisibleTo3=0
    let devisibleTo4=0
    for(let i=1;i<=n;i++){
    let currentNumber=Number(input[i])
    if(currentNumber%2===0){
        devisibleTo2++
    }
    if(currentNumber%3===0){
        devisibleTo3++
    }
    if(currentNumber%4===0){
        devisibleTo4++
    }
    }
   console.log(`${(devisibleTo2/n*100).toFixed(2)}%`)
   console.log(`${(devisibleTo3/n*100).toFixed(2)}%`)
   console.log(`${(devisibleTo4/n*100).toFixed(2)}%`)
}
devision(["3",
"3",
"6",
"9"])

