function tourShop(input){
    let index=0
    let budget=Number(input[index])
    index++
    let productsCounter=0
    let price=0
    let command=input[index]
    index++
    while(command!="Stop"){
        productsCounter++
        let currentPrice=Number(input[index])
        if(productsCounter%3===0){
            currentPrice=currentPrice/2
        }
        price+=currentPrice
        if(price>budget){
            console.log(`You don't have enough money!`)
            console.log(`You need ${Math.abs(price-budget).toFixed(2)} leva!`)
            break;
        }
        index++
        command=input[index]
        index++
        
    }
    if(command==="Stop"){
    console.log(`You bought ${productsCounter} products for ${price.toFixed(2)} leva.`)}
}
tourShop(["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"])
