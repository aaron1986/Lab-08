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


/* function askNumber() {
    let userInput = prompt("Enter a number...");
    let number = parseInt(userInput);

    let message = "The number must be from one to ten"
    let errorMessage = "Error please enter a valid number!"

    if(number >= 1 && number <= 10) {
        for(let i = 0; i < number; i++) {
            document.write("<img src='./img/cat-1.jpg'/>");
        }

    } else if(number === 0 || number >= 11) {
        document.write(message);
    } else {
        document.write(errorMessage);
    }
} */


function htmlCode() {
    const numSection = 3;

    const images = [
        "./img/img1.jpg",
        "./img/img2.jpg",
        "./img/img3.jpg"
    ];

    for(let i = 0; i < numSection; i++) {
        const htmlSection = `
            <section>
                <div images="image-container">
                <div class="image-section">
                <img src="${images[i]}" alt="">
                <div class="img-textbox">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                </div>
                </div>
                </div>
                </section>
            `;

            document.write(htmlSection);

    }
}


