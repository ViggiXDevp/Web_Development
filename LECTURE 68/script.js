console.log("Vighnesh");

// let vighnesh = document.getElementsByClassName("box");
// console.log(vighnesh);

// vighnesh[2].style.backgroundColor = "lightgreen";

// document.getElementById("red").style.backgroundColor = "lightgreen";

// document.querySelector(".box").style.backgroundColor = "lightgreen";

console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "lightgreen"
})