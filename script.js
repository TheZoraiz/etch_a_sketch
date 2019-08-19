const grid = document.getElementById("container");
let dimensions = 16, resetCheck = false;

function makeGrid(dimensions) {
    if (resetCheck == true) {
        dimensions = prompt("Set dimensions");
        
        grid.innerHTML = "";

        let boxWidth;

        for(let i = 1; i <= dimensions; i++) {
            let gridRow = document.createElement("div");;
            for(let j = 1; j <= dimensions; j++) {
                let gridItem = document.createElement("div");
                gridItem.style.border = "1px solid black";
                boxWidth = 512/dimensions;
                gridItem.style.padding = (boxWidth/2)-1 + "px";
                gridItem.classList.add("box");
                gridItem.style.float = "left";
                gridItem.style.border = "1px solid #32bdaa";
                gridRow.appendChild(gridItem);
            }
            grid.appendChild(gridRow);
        }
        grid.style.width = (dimensions*boxWidth) + "px";
        return;
    } else {
        for(let i = 1; i <= dimensions; i++) {
            let gridRow = document.createElement("div");;
            for(let j = 1; j <= dimensions; j++) {
                let gridItem = document.createElement("div");
                gridItem.style.border = "1px solid #32bdaa";
                gridItem.style.padding = "15px";
                gridItem.classList.add("box");
                gridItem.style.float = "left";
                gridRow.appendChild(gridItem);
            }
            grid.appendChild(gridRow);
        }
        grid.style.width = 32*16 + "px";

        resetCheck = true;
    }
}

const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
    makeGrid(dimensions);

    const boxList = document.getElementsByClassName("box");
    for(let i = 0; i < boxList.length; i++) {
        boxList[i].addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "rgb(0, 153, 255)";
        });
    }
});

makeGrid(dimensions);

const randomColor = document.getElementById("random");
randomColor.addEventListener("click", function () {
    makeGrid(dimensions);

    const boxList = document.getElementsByClassName("box");

    for(let i = 0; i < boxList.length; i++) {
        let r = Math.floor(Math.random()*100);
        let g = Math.floor(Math.random()*100);
        let b = Math.floor(Math.random()*100);
        
        boxList[i].addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "rgb(" + r + "%," + g + "%," + b + "%)";
        });
    }
});

const boxList = document.getElementsByClassName("box");
for(let i = 0; i < boxList.length; i++) {
    boxList[i].addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "rgb(0, 153, 255)";
    });
}
