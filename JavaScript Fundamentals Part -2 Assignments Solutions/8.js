/**8.Let’s say you are working for an event management company. As a web developer, you need to build a 
countdown timer for an upcoming event. You need to build a function that calculates the number of days 
between the current date and the event's start date.**/

function calculateRemainingDays(PreciseEventDate) {
    const currentDate = new Date();
    const eventDate = new Date(PreciseEventDate);

    const dayDifference = eventDate - currentDate;
    
    const remainingDays = Math.ceil(dayDifference / (1000 * 60 * 60 * 24));

    console.log(remainingDays);

    return remainingDays;
}

calculateRemainingDays(`2024-01-01`);

// OUTPUT: 28


// const currentDate = new Date();
// console.log(currentDate);
// const eventDate = new Date("2024-01-01");
// console.log(eventDate);
// const dayDifference = eventDate - currentDate;
// console.log(dayDifference);
// const remainingDays = Math.ceil(dayDifference / (1000 * 60 * 60 * 24));
// console.log(remainingDays);
