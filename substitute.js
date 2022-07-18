function substitute (input){
    let firstNumber = Number(input[0])
    let secondNumber = Number(input[1])
    let thirdNumber = Number(input[2])
    let fourNumber = Number(input[3])
    let currentCombination = 0;

    for (let K = firstNumber; K <= 8; K++)
    {

        for (let L = 9; L >= secondNumber; L--)
        {
            for (let M = thirdNumber; M <= 8; M++)
            {
                for (let N = 9; N >= fourNumber; N--)
                {


                    if (K == M && L == N && K % 2 == 0 && L % 2 != 0)
                    {

                        console.log("Cannot change the same player.");
                    }
                    else if (K % 2 == 0 && L % 2 != 0 && M % 2 == 0 && N % 2 != 0)
                    {

                        console.log(`${K}${ L} - ${M}${N}`);
                        currentCombination++;
                    }
                    if (currentCombination == 6)
                    {
                       break;
                    }
                }
                if (currentCombination == 6)
                {
                    break;
                }

            }
            if (currentCombination == 6)
            {
                break;
            }
        }
        if (currentCombination == 6)
        {
            break;
        }
    }
}
substitute(["7",
"6",
"8",
"5"])


