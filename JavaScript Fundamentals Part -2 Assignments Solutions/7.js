/**Imagine you are working for a digital banking platform, and your team is tasked with improving the security 
of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP 
(One-Time Password) for authentication purposes.**/



function generateOtp() {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + 1;
    console.log(`Here is your otp: ${otp.toString()}`);
    return otp.toString();
}

// console.log(Math.random());
// console.log(Math.floor(4.55));
generateOtp();
