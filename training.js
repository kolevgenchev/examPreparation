function training (input){
    let index=0
    let command=input[index]
    index++
    let biggerNum=0
    while(command!="Stop"){
     let currentNum=Number(command)
     if (currentNum>biggerNum){
        biggerNum=currentNum
     }
     command=input[index]
     index++
    }
    console.log(biggerNum)
}
training(["45", "-20", "7", "99", "Stop"])