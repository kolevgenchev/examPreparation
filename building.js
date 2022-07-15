function building (input){
    let floors=Number(input[0])
    let rooms=Number(input[1])
    
    for(let i=floors;i>0;i--){
        let n=''
        for(let h=0;h<rooms;h++){
            if(i===floors){
                n+="L"+i+""+h+""+" "
            }else if(i%2===0){
                n+="O"+i+""+h+""+" "
            } else {
                n+="A"+i+""+h+""+" "
            }
        }
        console.log(n)
    }
}
building(["6",

"4"])