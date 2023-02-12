import inquirer from "inquirer";
const endDate = '2023-02-13';
const intervalId = setInterval(() => {
    const distance = new Date(endDate).getTime() - new Date().getTime();
    if (distance < 0) {
        clearInterval(intervalId);
        console.log("Countdown Ended");
        process.exit(0);
    }
    else {
        console.clear();
        console.log(`Time left untile ${endDate}: ${distance / 1000} seconds`);
    }
}, 1000);
inquirer.prompt([{
        type: "confirm",
        name: "stop",
        message: "Do you want to stop countdown"
    }]).then((answers) => {
    if (answers.stop) {
        clearInterval(intervalId);
        console.log("countdown stopped");
        process.exit(0);
    }
});
