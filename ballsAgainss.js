function balls (input){
    let n=Number(input[0])
     let points=0;
     let redCount=0
     let orangeCount=0
     let yellowCount=0
     let whiteCount=0
     let blackCount=0
     let otherCount=0
    for(let i=1;i<=n;i++){
        let currentBall=input[i]
        switch(currentBall){
            case "red":points+=5 ,redCount++;break;
            case "orange":points+=10,orangeCount++;break;
            case "yellow":points+=15,yellowCount++;break;
            case "white":points+=20,whiteCount++;break;
            case "black":points=points/2,blackCount++;break;
            default:otherCount++;continue;
        }
    }
    console.log(`Total points: ${Math.floor(points)}`)
    console.log (`Red balls: ${redCount}`)
    console.log (`Orange balls: ${orangeCount}`)
    console.log (`Yellow balls: ${yellowCount}`)
    console.log (`White balls: ${whiteCount}`)
    console.log (`Other colors picked: ${otherCount}`)
    console.log (`Divides from black balls: ${blackCount}`)
}