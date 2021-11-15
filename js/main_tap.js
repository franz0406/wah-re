const tapTitle = document.querySelectorAll('.tap-title > li > a');
const tapList = document.querySelectorAll('.tap-list');

for(var i = 0; i < tapTitle.length; i++){
    tapTitle[i].addEventListener('click', function(e){
        e.preventDefault();
        const t = e.target;
        const targetHref = t.getAttribute("href");
        const targetId = targetHref.replace("#","");
        hideTap();
        removeClass();
        t.classList.add("active");
        document.getElementById(targetId).style.display = "block";
    });
}

function hideTap(){
    for(var i = 0; i < tapList.length; i++){
        tapList[i].style.display = "none";
    }
}
function removeClass(){
    for(var i = 0; i < tapTitle.length; i++){
        tapTitle[i].classList.remove("active");
    }
}
