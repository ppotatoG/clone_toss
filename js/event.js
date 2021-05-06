const header = document.querySelector("header");
const sticky = header.offsetTop;
const MobileCTA = document.querySelector('#moblie-cta');

function headerFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fix")
        MobileCTA.style.bottom=0+"px"
    } else {
        header.classList.remove("fix");
        MobileCTA.style.bottom=60+"px"
    }
}

window.addEventListener('scroll', headerFunction)
window.addEventListener('load', headerFunction)

function responsive() {
    const tossCardImg = document.querySelector('#toss-card figure img')
    if(window.innerWidth>786) {
        tossCardImg.src="images/tosscard-plcc-desktop.png"
    }else {
        tossCardImg.src="images/tosscard-plcc-mobile.png"
    }
}
window.addEventListener('resize', responsive)
window.addEventListener('load', responsive)

const menuBtn=document.querySelector('.menu-toggle');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('on')

    if(this.classList.contains('on')) {
        header.classList.add("fix");
        this.classList.add('toggle02')
        this.classList.remove('toggle03')
    } else {
        header.classList.remove("fix");
        this.classList.remove('toggle02')
        this.classList.add('toggle03')
    }
});


let tabBtn = document.querySelectorAll('#annoying .menu li')
let tabImg = document.querySelectorAll('#annoying .inner-contents img')


for(let i = 0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener('click', function(){
        for(let n = 0; n < tabBtn.length; n++){
            tabBtn[n].classList.remove('on')
            tabImg[n].classList.remove('on')

            let thisDataset = this.dataset.tabName
            let thisImg = document.querySelector('.'+thisDataset)

            this.classList.add('on')
            thisImg.classList.add('on')
        }
    })
}