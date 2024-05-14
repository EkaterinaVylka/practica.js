function outputNumbersEverySecond(num1, num2) {

    let numCounter = num1;

    let intervalId = setInterval(function () {
        if (numCounter <= num2) {
            console.log(numCounter);
            numCounter++;
        } else {
            clearInterval(intervalId);
        }

    }, 1000);
}

outputNumbersEverySecond(1, 5);

