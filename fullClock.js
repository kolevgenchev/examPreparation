function training (){
    for(let hours=0;hours<24;hours++){
        for(let mins=0;mins<60;mins++){
            if(hours<10&&mins<10){
                console.log(`0${hours} : 0${mins}`)}
            
            else if(hours<10&&mins>10){
            console.log(`0${hours} : ${mins}`)
            }
            else if(hours>=10&&mins>10){
            console.log(`${hours} : ${mins}`)}
            else if(hours>=10&&mins<10){
                console.log(`${hours} : 0${mins}`) 
                
            }
        }
    }
}
training()