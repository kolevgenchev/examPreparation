function club (input){
    let moneyNeeded=Number(input[0])
    let index=1
    let command=input[index]
    let allPrice=0
    let isfinish=false
    while(command!=="Party!"){
        let nameOfCoctail=command
        let currentPrice=nameOfCoctail.length
        index++
        let numberOfCoctails=Number(input[index])
        let currentPrice2=currentPrice*numberOfCoctails
        if(currentPrice2%2!==0||currentPrice===1){
            currentPrice2=currentPrice2*0.75
        }
        allPrice+=currentPrice2
        if(allPrice>=moneyNeeded){
            isfinish=true
            break;
        }
        index++
        command=input[index]
    }
    if(isfinish){
        console.log("Target acquired.")
        console.log(`Club income - ${allPrice.toFixed(2)} leva.`)
    }else{
        console.log(`We need ${(moneyNeeded-allPrice).toFixed(2)} leva more.`)
        console.log(`Club income - ${allPrice.toFixed(2)} leva.`)
    }
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])

