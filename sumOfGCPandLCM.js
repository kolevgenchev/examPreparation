function sumOfGcp (input){
    let n=Number(input[0])
    let m=Number(input[1])
    let z=""
    let x=""
    let NOD=0
    let v=0
    let c=0
    let LCM=0
    let o=0
    let p=0
    let isTrue=false
    for(let i=1;i<=n;i++){
        if(n%i===0){
            v=i
            if(n%v===0&&m%v===0){
                NOD=v
            }
       }
    
    }
    for(let j=1;j<=m;j++){
            
        if(m%j===0){
         c=j
         if(n%c===0&&m%c===0)
         NOD=c
        }
        
        }
       
    while(isTrue===false){
     o+=n
     if(o===p){
        LCM=o
        isTrue=true
        break;
        
     }
     p+=m
    }
console.log(LCM)
   
    
}
sumOfGcp(["12","24"])