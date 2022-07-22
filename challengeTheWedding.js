function challengeWedding(input){
    let men=Number(input[0])
    let women=Number(input[1])
    let maxTableCount=Number(input[2])
    let counter=0
    let result=""
    let flag=false
    for(let i=1;i<=men;i++){
        for(let h=1;h<=women;h++){
            result+=(`(${i} <-> ${h}) `)
            counter++
            if(counter>=maxTableCount){
                flag=true
                break;
            }
            
        }
        if(flag){
            break;
        }
    }
    console.log(result)
}
challengeWedding(["2","2","6"])