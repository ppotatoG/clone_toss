let once={once: true};

window.onscroll = function() {headerFunction()};

let header = document.querySelector("header"),
    sticky = header.offsetTop;


function headerFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("fix");
    } else {
    header.classList.remove("fix");
    }
}

function MenuToggle(){
    document.querySelector('.menu-toggle').classList.toggle('on')
}