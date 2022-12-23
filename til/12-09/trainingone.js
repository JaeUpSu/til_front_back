const changeBtn = document.querySelector("#change");
//changeBtn.onclick = changeColor;

function changeColor() {
    document.querySelector("p").style.color = "#f00";
}

changeBtn.onclick = function () {
    document.querySelector("p").style.color = "#C0D";
}

document.querySelector("#change").onclick = function () {
    document.querySelector("p").style.color = "#0C0";
}

changeBtn.addEventListener("click", changeColor);

changeBtn.addEventListener("click", () => {
    document.querySelector("p").style.color = "#0CD";
});

document.querySelector("#on").addEventListener("mouseover", () => { 
    document.querySelector("p").style.fontSize = "200%";
})

document.querySelector("#on").addEventListener("mouseout", () => { 
    document.querySelector("p").style.fontSize = "100%";
})
