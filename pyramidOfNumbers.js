function pyramid (input){
    let n= Number(input[0])
    let counter=0
    let isBigger=false
    let k=""
    for(let lines=1;lines<=n;lines++){
        for(let rows=1;rows<=lines;rows++){
            counter++
            if(counter>n){
                isBigger=true
                break;
            }
            k+=counter+" "
            
        }

        console.log(k)
        k=''
        if(isBigger){
            break;
        }
    }
    
}
pyramid(["12"])