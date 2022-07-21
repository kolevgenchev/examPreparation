function happyNumbers(input){
    let n=Number(input[0])
    let result=""
    for(let i=1;i<=9;i++){
        for(let h=1;h<=9;h++){
            for(let x=1;x<=9;x++){
                for(let z=1;z<=9;z++){
                    if((i+h)===(x+z)&&n%(i+h)===0){
                        result+=i+""+h+""+x+""+z+" "
                    }
                }
            }
        }
    }
    console.log(result)
}
happyNumbers(["3"])