function dogCare (input){
    let index=0
    let amountOfFood=Number(input[index])*1000
    index++
    let command=input[index]
    let allFoodCounter=0
    while(command!=="Adopted"){
        let currentFood=Number(command)
        allFoodCounter+=currentFood
        index++
        command=input[index]
        
    }
    let diff=Math.abs(allFoodCounter-amountOfFood)
    if(allFoodCounter>amountOfFood){
  console.log(`Food is not enough. You need ${diff} grams more.`)
    }else if(allFoodCounter<=amountOfFood){
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    }
}dogCare(["4",

"130",

"345",

"400",

"180",

"230",

"120",

"Adopted"])