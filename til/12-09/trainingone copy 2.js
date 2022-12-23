document.querySelector("button").onclick = () => { 
    document.getElementById("current").innerText = new Date().toLocaleTimeString();
}

document.getElementById("cup").onclick = () => { 
    const cup = document.querySelector("#cup");
    // alert("이미지 소스 : " + cup.getAttribute("src"));

    cup.setAttribute("src", "./oz.png");
}