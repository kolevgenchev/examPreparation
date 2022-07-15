function serialCalc(input){
    let nameOfMovie=input[0]
    let numberOfSeasons=Number(input[1])
    let episodes=Number(input[2])
    let durationOfOneEpisode=Number(input[3])
    durationOfOneEpisode+=durationOfOneEpisode*0.20
    let timeForEpisodesWithoutSeasons=durationOfOneEpisode*episodes
    let specialEpisodes=numberOfSeasons*10
    let allDuration=timeForEpisodesWithoutSeasons*numberOfSeasons+specialEpisodes
    console.log(`Total time needed to watch the ${nameOfMovie} series is ${allDuration} minutes.`)
}
serialCalc(["Lucifer","3","18","55"])