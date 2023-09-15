/* function getRating() {
    let rating = prompt("get image...");

    for(let i = 0; i < rating.length; i++) {
        document.write("<img src='./img/cat-1.jpg'/>");
    }
} */


/* function getImage() {
    let answer = prompt("Do you want to see image...");

    while(answer === "yes") {
        document.write("<img src='./img/cat-1.jpg'/>");
    }
}
 */


/* function  getImage() {
    let answer = prompt("Do you want to see image...").toLowerCase();
    let message = "Go Away!";
    let error = "Error";

    if(answer === "yes") {
        for(let i = 0; i < answer.length; i++) {
            document.write("<img src='./img/cat-1.jpg'/>");
        } 
    } else if(answer === "no") {
            document.write(message);
    } else {
        document.write(error);
    }
    
} */


function askNumber() {
    let userInput = prompt("Enter a number...");
    let number = parseInt(userInput);

    let message = "Error please enter a valid number!"

    if(number <= 10) {
        for(let i = 0; i < number; i++) {
            document.write("<img src='./img/cat-1.jpg'/>");
        }

    } else {
        document.write(message);
    }
}



