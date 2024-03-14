// 2. Random Number Generator with Delay and Progress Indication: 
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a 
// variable so can be modified. The program displays a message every second indicating the time remaining 
// until the random number is generated and then outputs the generated number.

function generateRandomNumber(){
    return Math.floor(Math.random() * 10000);
}

function generateRandomNumberWithDelay(delayInSeconds){
    console.log(`generating a random number after a delay of ${delayInSeconds} seconds.....`);
    const countdownInterval = setInterval(() => {
        console.log(`${delayInSeconds} seconds remaining.....`);
        delayInSeconds--;

        if(delayInSeconds === 0){
            clearInterval(countdownInterval);
            const randomNumber = generateRandomNumber();
            console.log(`random number is generated: ${randomNumber}`);
        }
    }, 1000);
}

generateRandomNumberWithDelay(5);