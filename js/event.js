const header = document.querySelector("header");
const sticky = header.offsetTop;
const MobileCTA = document.querySelector('#mobile-cta');

function headerFunction() {

    if (window.pageYOffset > sticky) {
        header.classList.add("fix");
        MobileCTA.style.bottom=0+"px";

    } else {
        header.classList.remove("fix");
        MobileCTA.style.bottom=60+"px";
    }
}

window.addEventListener('scroll', headerFunction)
window.addEventListener('load', headerFunction)

const imgAreas = document.querySelectorAll('section[data-tab="true"] .img-area');
const pcPerents = document.querySelectorAll('section[data-tab="true"] .img-box');
const moPerents = document.querySelectorAll('section[data-tab="true"] .inner');
const insPoints = document.querySelectorAll('section[data-tab="true"] .tab-btn');

function responsive() {
    const tossCardImg = document.querySelector('#toss-card figure img');

    if(window.innerWidth>786) {
        tossCardImg.src="images/tosscard-plcc-desktop.png";
        for(let i = 0; i < imgAreas.length; i++){
            pcPerents[i].insertBefore(imgAreas[i], null);
        }

    }else {
        tossCardImg.src="images/tosscard-plcc-mobile.png";
        for(let i = 0; i < imgAreas.length; i++){
            moPerents[i].insertBefore(imgAreas[i], insPoints[i]);
        }
    }
}
window.addEventListener('resize', responsive)
window.addEventListener('load', responsive)

const menuBtn=document.querySelector('.menu-toggle');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('on');

    if(this.classList.contains('on')) {
        header.classList.add("fix");
        this.classList.add('toggle02');
        this.classList.remove('toggle03');
    } else {
        header.classList.remove("fix");
        this.classList.remove('toggle02');
        this.classList.add('toggle03');
    }
})

function tabFnc(e){
    const parent = e.parentNode.parentNode.parentNode.parentNode;

    const tabImgs = parent.querySelectorAll('.inner-contents img');
    const tabBtns = parent.querySelectorAll('ul li');
    const tabMsgs = parent.querySelectorAll('.tab-message');

    const dataTab = e.dataset.tabName;
    const dataSelect = parent.querySelector('.'+dataTab);
    const dataSelectMsg = parent.querySelector('.'+dataTab+'-msg');

    for(let tabImg of tabImgs){
        tabImg.classList.remove('on');
    }
    for(let tabBtn of tabBtns){
        tabBtn.classList.remove('on');
    }
    for(let tabMsg of tabMsgs){
        tabMsg.classList.remove('on');
    }

    e.classList.add('on');
    dataSelect.classList.add('on');
    dataSelectMsg.classList.add('on');
}

const mNum = document.querySelectorAll('.money');

for(let i = 0; i < mNum.length; i++){
    chngMNum = mNum[i].textContent.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
    mNum[i].textContent = chngMNum+"원";
}

const elImg = document.querySelectorAll('img');

for(let i = 0; i < elImg.length; i++){
    if(elImg[i].src.indexOf('_1x') > -1) {;
        elImg[i].src = elImg[i].src.replace('_1x.png', '_3x.png');

    } else{
        elImg[i].src = elImg[i].src.replace('.png', '_3x.png');
    }

    elImg[i].addEventListener('error', function(){
        elImg[i].src = elImg[i].src.replace('_3x.png', '.png');
    })
}