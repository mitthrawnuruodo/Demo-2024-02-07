console.log("Calculate dates");

const dateInput = document.querySelector("input#dateInput");
const calcBtn = document.querySelector("button#calculate");
const outputContainer = document.querySelector("p#result");

calcBtn.addEventListener("click", ()=>{
    console.clear();

    // Get birthday from input and the time now:
    console.log(dateInput.value);
    const birthday = new Date(dateInput.value); // UTC
    console.log({birthday});
    const now = new Date(); // Local time, 1 or 2 hours off
    console.log({now});     // Ignore difference, for now...

    // Set nextBirthday to the birthday date this year
    let nextBirthday = new Date (birthday.setFullYear(now.getFullYear()) );
    console.log({nextBirthday});

    // See if the birthday has passes, if so change to next year
    if (now > nextBirthday) {
        console.log("Day has passed...");
        const nextyear = now.getFullYear()+1;
        console.log({nextyear});
        nextBirthday.setFullYear(nextyear); 
    }
    console.log({nextBirthday});

    // Calculate the days from now to nextBirthday
    let days = Math.ceil((nextBirthday - now) / (1000*60*60*24));
    console.log(days);

    // Write a message
    let msg;
    //let wholeYear = 365; // What about leap years!
    let wholeYear = (isLeapYear(now.getFullYear()))?366:365;
    console.log({wholeYear});
    if (days === wholeYear) { 
        msg = "It's your birthday today! Congratulations";
    } else {
        msg = `It's ${days} day${(days===1)?"":"s"} until your birthday!`
    }
    outputContainer.innerHTML = msg;
});

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0);
}

// Testing isLeapYear function:
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2025)); // false
console.log(isLeapYear(2100)); // false