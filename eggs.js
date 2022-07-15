function eggs(input){
    let sizeOfEggs=input[0]
    let eggColour=input[1]
    let numberOfSets=Number(input[2])
    let price=0;
    if(sizeOfEggs==="Large"){
        switch(eggColour){
            case "Red":price=16;break;
            case "Green":price=12;break;
            case "Yellow":price=9;break;
        }
    }else if(sizeOfEggs==="Medium"){
        switch(eggColour){
            case "Red":price=13;break;
            case "Green":price=9;break;
            case "Yellow":price=7;break;
        }
    }else if(sizeOfEggs==="Small"){
        switch(eggColour){
            case "Red":price=9;break;
            case "Green":price=8;break;
            case "Yellow":price=5;break;
        }
}
let finalPrice=price*numberOfSets
let finallPrice=finalPrice-finalPrice*0.35
console.log(`${finallPrice.toFixed(2)} leva.`)
}