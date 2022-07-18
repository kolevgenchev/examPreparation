function specialWord(input){
    let index=0
    let command=input[index]
    index++
    let multiplayer=0
    let biggestNum=Number.MIN_SAFE_INTEGER
    let specialWord=""
    while(command!="End of words"){
        let flag=false
        let currentWord=command
        
        if(currentWord[0]==="A"||currentWord[0]==="E"||currentWord[0]==="I"||currentWord[0]==="O"||currentWord[0]==="U"||currentWord[0]==="Y"||currentWord[0]==="a"||currentWord[0]==="e"||currentWord[0]==="i"||currentWord[0]==="o"||currentWord[0]==="u"||currentWord[0]==="y"){
          multiplayer=currentWord.length
          flag=true
        }
        let currentNum=0
        for(let i=0;i<currentWord.length;i++){
            let currentChar=currentWord.charCodeAt(i)
            currentNum+=currentChar   
        }
        if(flag){
           currentNum*=multiplayer
        }else {
            currentNum=Math.floor(currentNum / currentWord.length)
        }
        if(currentNum>=biggestNum){
            biggestNum=currentNum
            specialWord=currentWord
        }
        
        command=input[index]
        index++
        
    }
    console.log(`The most powerful word is ${specialWord} - ${biggestNum}`)
}
specialWord(["Experience",
"Most",
"Powerful",
"Word",
"Is",
"The",
"End of words"])

