function christmasTour (input){
    let index=0
    let daysOfTournament=Number(input[index])
    index++
    
    let dayWin=0
    let dayLose=0
    let allMoney=0
    for(let i=0;i<daysOfTournament;i++){
    let winsCount=0
    let loseCount=0
        let command=input[index]
        index++
        let moneyForTheDay=0
        
        while(command!=="Finish"){
        let result=input[index]
        index++
        switch (result){
            case "win":moneyForTheDay+=20,winsCount++;break;
            case "lose":loseCount++;break;
        }
        
        command=input[index]
        index++
        }
        
       if(winsCount>loseCount){
        dayWin++
        moneyForTheDay=moneyForTheDay*1.10
       }else {
        dayLose++
       }
       allMoney+=moneyForTheDay
    }
    if(dayWin>dayLose){
     allMoney=allMoney*1.20
     console.log(`You won the tournament! Total raised money: ${allMoney.toFixed(2)}`)
    }else if(dayWin<dayLose){
        console.log(`You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`)
    }
}
christmasTour(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
