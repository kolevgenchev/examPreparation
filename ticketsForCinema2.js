function ticketsForCinema2 (input){
    let index=0
    let command=input[index]
    index++
    let studentCount=0
    let standardCount=0
    let kidCount=0
    let totalTicket=0
    while(command!=="Finish"){
        let name =command
        let freeSpace=Number(input[index])
        index++
        let soldTicket=0
        let tempCommand=input[index]
        index++
        while(tempCommand!=="End"){
            let ticket=tempCommand;
            soldTicket++
            switch(ticket){
                case "student":studentCount++;break;
                case "standard":standardCount++;break;
                case "kid":kidCount++;break;
            }
            if (freeSpace===soldTicket){
                break;
            }
            tempCommand=input[index]
            index++
        }
        totalTicket+=soldTicket
        let percentage=soldTicket/freeSpace*100
        console.log(`${name} - ${percentage.toFixed(2)}% full.`)
        command=input[index]
        index++
    }
    console.log(`Total tickets: ${totalTicket}`)
    let percentageStudentTicket=studentCount/totalTicket*100
    let percentageStandardTicket=standardCount/totalTicket*100
    let percentageKidTicket=kidCount/totalTicket*100
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`)
    console.log(`${percentageStandardTicket.toFixed(2)}% standard tickets.`)
    console.log(`${percentageKidTicket.toFixed(2)}% kids tickets.`)

}