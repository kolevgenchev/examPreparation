function traveling (input){
    let index=0
    let command=input[index]
    index++
while(command!=="End"){
    let currentBudget=Number(input[index])
    index++
    let savings=0
    for(let i=0;savings<currentBudget;i++){
    let currentSum=Number(input[index])
    index++
    savings+=currentSum
    }
    if(savings>=currentBudget){
        console.log(`Going to ${command}!`)
         }
    command=input[index]
    index++
}
}
traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])