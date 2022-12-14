// scroll progress
//
//
let windowHeight = window.innerHeight;
let documentHeight = document.body.offsetHeight;
let targetScrollY = documentHeight - windowHeight;
let getScrollTopPercent = () => {
    return Math.round((window.scrollY * 100) / targetScrollY);
}
function updateScrollProgress() {
    document.querySelector(".progress").innerHTML = getScrollTopPercent() + "%";
    document.querySelector(".progress-bar-inner").style.width =
        getScrollTopPercent() + "%";
}

document.addEventListener("scroll", updateScrollProgress);

window.addEventListener("resize", () => {
    windowHeight = window.innerHeight;
    documentHeight = document.body.offsetHeight;
    targetScrollY = documentHeight - windowHeight;
    updateScrollProgress();
})

const runBoxTarget = document.querySelector(".run-box");
runBoxTarget.addEventListener("mouseenter", () =>{
    runBoxTarget.classList.add("active");
});
runBoxTarget.addEventListener("mouseout", () =>{
    runBoxTarget.classList.remove("active");
});
