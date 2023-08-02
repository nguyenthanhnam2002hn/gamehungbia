const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let arrayBeer = [];
let point = 0;
let bin = new Bin("thungbia.png", 400,700,80,100,50);
bin.moveBin()
let createBeer;
let start;
function clearDisplay() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
}
function creBeer() {
    createBeer = setInterval(function () {
        let randomX = Math.round(Math.random()*(canvas.width-100-50))+50;
        let newBeer = new Beer("chaibia.png",randomX,0,3,20,70);
        arrayBeer.push(newBeer);
    }, 1000);
}
function drawBeer() {
    for (let i = 0; i < arrayBeer.length; i++) {
        arrayBeer[i].drawBeer();
        arrayBeer[i].moveDown();
    }
}
// function delBeer() {
//     for (let i = 0; i < arrayBeer.length; i++) {
//         if (arrayBeer[i].y > canvas.height) {
//             arrayBeer.splice(i,1);
//         }
//     }
// }
function checkPoint() {
    for (let i = 0; i < arrayBeer.length; i ++) {
        if (arrayBeer[i].checkCollisionBin(bin) === true) {
            point += 1;
            arrayBeer.splice(i,1);
        } else if (arrayBeer[i].y > canvas.height) {
            arrayBeer.splice(i,1);
            alert("THUA");
        }
    }
}
function changePic() {
    switch (point) {
        case 2:
            document.getElementById("img1").src = "anh.jpg";
            break;
        case 4:
            document.getElementById("img1").src = "anh2.jpg";
            break;
        case 6:
            document.getElementById("img1").src = "anh3.jpg";
            break;
        case 8:
            document.getElementById("img1").src = "anh4.jpg";
            break;
        case 10:
            document.getElementById("img1").src = "anh5.jpg";
            break;
            case 12:
            document.getElementById("img1").src = "anh6.jpg";
            break;
            case 14:
            document.getElementById("img1").src = "anh7.jpg";
            break;
            case 16:
            document.getElementById("img1").src = "anh8.jpg";
            break;

    }
}
function startGame() {
    creBeer()
    start = setInterval(function () {
        clearDisplay();
        bin.drawCar();
        drawBeer()
        // delBeer()
        checkPoint();
        changePic();
        document.getElementById("point").innerHTML = `POINT: ${point}`;
    }, 10)
}
startGame()