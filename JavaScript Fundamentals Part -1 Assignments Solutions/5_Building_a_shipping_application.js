//5. You are building a shipping application. Write a program that takes the type of package ("standard", 
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time 
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" 
// would be delivered the next day

let typeOfPackage = "standard"

switch (typeOfPackage) {
    case "standard":
        console.log("Your Package will be deliver with in 3-5 days");
        break;
    case "express":
        console.log("Your Package will be deliver with in 1-2 days");
        break;
    case "overnight":
        console.log("Your Package will be deliver on Next day");
        break;

    default:
        console.log("Invalid type of Package");
        break;
}