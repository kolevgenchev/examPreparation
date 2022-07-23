function generatorSafePass(input){
    let a=Number(input[0])
    let b=Number(input[1])
    let maxPassCount=Number(input[2])
    let string=""
    let bool=false
    let c=35
    let m=64
    let counter=0
    let flag1=false
    let flag2=false
        for(let x=1;x<=a;x++){
            for(let y=1;y<=b;y++){
                for(let i=c;a<=55;i++){
                    
                    if(i>55){
                        c=35
                        flag1=true
                    }
                    for(let k=m;k<=96;k++){
                        
                        if(k>96){
                            flag2=true
                            m=64
                        }
                                string+=String.fromCharCode(i)+""+String.fromCharCode(k)+""+x+""+y+""+String.fromCharCode(k)+""+String.fromCharCode(i)+"|"
                                counter++
                                if(counter>=maxPassCount){
                                    console.log(string)
                                    return;
                                }
                                bool=true
                                break;
                            }
                            if(bool){
                                if(flag1){
                                    m++
                                    break;
                                }
                                if(flag2){
                                    c++
                                    break;
                                }
                            c++
                            m++
                                break;
                            }
                        } 
                       
                    }
                    
                }
            console.log(string)
    }
    
       
        
generatorSafePass(["10","10","20"])