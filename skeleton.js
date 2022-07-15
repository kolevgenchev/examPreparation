function skeleton (input){
    let minutesOfGoal=Number(input[0])
    let secondsOfGoal=Number(input[1])
    let lenghtOfTunnel=Number(input[2])
    let secondsFor100m=Number(input[3])
    let goalTimeInSeconds=minutesOfGoal*60+secondsOfGoal
    let hisTime=lenghtOfTunnel/100
    hisTime=hisTime*secondsFor100m
    let fastingTimes=lenghtOfTunnel/120
    let fastTime=fastingTimes*2.5
    let finalTime=hisTime-fastTime
    let diff=Math.abs(finalTime-goalTimeInSeconds)
    if(finalTime<=goalTimeInSeconds){
        console.log(`Marin Bangiev won an Olympic quota!`)
        console.log(`His time is ${finalTime.toFixed(3)}.`)
    }else if(finalTime>goalTimeInSeconds){
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`)
    }
}
skeleton(["2",

"12",

"1200",

"10"])