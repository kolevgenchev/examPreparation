function letterCombinations(input){
    let firstWord=input[0]
    let secondWord=input[1]
    let forbiddenWord=input[2]
    let result=""
    let counter=0
    for(let i="a".charCodeAt(0);i<="z".charCodeAt(0);i++){
        for(let h="a".charCodeAt(0);h<="z".charCodeAt(0);h++){
            for(let z="a".charCodeAt(0);z<="z".charCodeAt(0);z++){
                if(i>=firstWord.charCodeAt(0)&&i<=secondWord.charCodeAt(0)&&i!=forbiddenWord.charCodeAt(0)&&h>=firstWord.charCodeAt(0)&&h<=secondWord.charCodeAt(0)&&h!=forbiddenWord.charCodeAt(0)&&z>=firstWord.charCodeAt(0)&&z<=secondWord.charCodeAt(0)&&z!=forbiddenWord.charCodeAt(0)){
                    counter++
                    result+=String.fromCharCode(i) +""+String.fromCharCode(h)+""+String.fromCharCode(z)+" "
                }
            }
        }
    }
    console.log(result+""+counter)
}
letterCombinations(["a","c","b"])