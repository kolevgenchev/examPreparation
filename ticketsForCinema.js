function ticketsForCinema(input){
    let index=0
    let command=input[index]
    index++
    let allTicketCount=0
    let kidTicket=0
    let standardTicket=0
    let studentTicket=0
    while(command!=="Finish"){
        let movie=command
        let ticketCount=0
        let freeSlots=Number(input[index])
        index++
        let currentCommand=input[index]
        index++
        while(currentCommand!=="End"){
            let currentTicket=currentCommand
            ticketCount++
            switch(currentTicket){
            case "standard":standardTicket++;break;
            case "kid":kidTicket++;break;
            case "student":studentTicket++;break;
            }
            if(ticketCount>=freeSlots){
                break;
            }
            currentCommand=input[index]
            index++ 
        }
        allTicketCount+=ticketCount
        console.log(`${movie} - ${(ticketCount/freeSlots*100).toFixed(2)}% full.`)
        if(currentCommand==="Finish"){
            break;
        }
        command=input[index]
        index++
        
        
    }
console.log(`Total tickets: ${allTicketCount}`)
console.log(`${(studentTicket/allTicketCount*100).toFixed(2)}% student tickets.`)
console.log(`${(standardTicket/allTicketCount*100).toFixed(2)}% standard tickets.`)
console.log(`${(kidTicket/allTicketCount*100).toFixed(2)}% kids tickets.`)
}
ticketsForCinema(["Taxi",

"10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])