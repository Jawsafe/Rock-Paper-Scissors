const container = document.querySelector('#container');
const userResult = document.querySelector('.user-hand img');
const cpuResult = document.querySelector('.cpu-hand img');
const result = document.querySelector('.result');
const optionHand = document.querySelectorAll('.option-hand');

console.log(container, userResult, cpuResult, result, optionHand);

// Declaring the DOM select styles from CSS
userResult.className = "hand user-hand rock";
cpuResult.className = "hand cpu-hand rock";

optionHand.forEach((option, index) => {
    option.addEventListener("click", (e) => {
        // Remove "active" class from all options
        optionHand.forEach((otherOption) => {
            otherOption.classList.remove("active");
        });

        // Add "active" class to the clicked option
        option.classList.add("active");

        userResult.src = cpuResult.src = "https://jawsafe.github.io/my-photos/RPS/images/rock.png";
        result.textContent = "Wait...";

        container.classList.add("start");
        // Set a delay time on the result
        setTimeout(() => {
            container.classList.remove("start");

            // Get the image source from the clicked option
            const imgSrc = option.querySelector("img").src;
            // Set the userResult image source
            userResult.src = imgSrc;
            // Set the class of userResult based on the class of the clicked option
            const userClass = option.querySelector("img").classList[0]; // Assumes the first class is the relevant one
            userResult.className = `user-hand ${userClass}`;

            // Random number for CPU
            // Random number 0 - 2
            let randomNum = Math.floor(Math.random() * 3);
            // Array of CPU option-hand images
            let cpuImg = ["https://jawsafe.github.io/my-photos/RPS/images/rock.png", "https://jawsafe.github.io/my-photos/RPS/images/paper.png", "https://jawsafe.github.io/my-photos/RPS/images/scissors.png"]
            // Select image from array
            cpuResult.src = cpuImg[randomNum];
            // Set the class of cpuResult based on the class of the clicked option
            const cpuClass = cpuImg[randomNum].split('/').pop().split('.')[0];
            // Assumes the first class is the relevant one
            cpuResult.className = `cpu-hand ${cpuClass}`;

            // Assign letter values "R, P, S" for CPU and user
            let cpuVal = ["R", "P", "S"][randomNum];
            let userVal = ["R", "P", "S"][index];

            console.log(cpuVal, userVal);

            // Results
            let gameResult = {
                RR: "Draw!",
                PP: "Draw!",
                SS: "Draw!",
                RP: " win!",
                RS: " lose!",
                PR: " lose!",
                PS: " win!",
                SR: " win!",
                SP: " lose!"
            };

            // Looking from the results
            let resultValue = gameResult[cpuVal + userVal];

            // Display result
            result.textContent = userVal === cpuVal ? gameResult.PP : `You ${resultValue}`
            console.log(resultValue);
        }, 1500);
    });
});
