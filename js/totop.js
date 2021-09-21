const toTopBtn = document.querySelector(".to-top");
const docElement = window.document.documentElement;
const docHeight = Math.max(
    docElement.offsetHeight,
    docElement.scrollHeight
)
const devideHeight = docHeight / 3;
window.addEventListener('scroll', function(){
    let scrollPosition = docElement.scrollTop;
    if(devideHeight < scrollPosition){
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
})