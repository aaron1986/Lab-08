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


function  getImage() {
    let answer = prompt("Do you want to see image...").toLowerCase();

    if(answer === "yes") {
        for(let i = 0; i < answer.length; i++) {
            document.write("<img src='./img/cat-1.jpg'/>");
        }
    }
    
}

