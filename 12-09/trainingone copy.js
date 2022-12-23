document.querySelector("#dest").style.display = "none";

document.querySelector("#open").onclick = () => { 
    document.querySelector("#dest").style.display = "block";
    document.querySelector("#open").style.display = "none";   
}
document.querySelector("#close").onclick = () => {
    document.querySelector("#dest").style.display = "none";
    document.querySelector("#open").style.display = "block";  
}