window.onclick = (event) => {
    console.log("1")
    if (event.target.matches('.hamburgermenu, .hamburgermenu > *')) {
        console.log("2")
        document.querySelector(".menu").classList.toggle("active");
        
    } else {
        document.querySelector(".menu").classList.remove("active");
    }
}