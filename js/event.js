headerFnc();
responsive();
window.addEventListener('scroll', headerFnc);
window.addEventListener('touchmove', headerFnc);
window.addEventListener('resize', responsive);

function headerFnc(){
    const header = document.querySelector('header');
    const MobileCTA = document.querySelector('#mobile-cta');

    if ((window.pageYOffset || document.documentElement.scrollTop) > header.getBoundingClientRect().top) {
        header.classList.add('fix');
        MobileCTA.style.bottom = '0px';

    } else {
        header.classList.remove('fix');
        MobileCTA.style.bottom='4%';
    }
};

function responsive() {
    const imgAreas = document.querySelectorAll('section[data-tab="true"] .img-area');
    const pcPerents = document.querySelectorAll('section[data-tab="true"] .img-box');
    const moPerents = document.querySelectorAll('section[data-tab="true"] .inner');
    const insPoints = document.querySelectorAll('section[data-tab="true"] .tab-btn');

    const tossCardImg = document.querySelector('#toss-card figure img');

    if(window.innerWidth > 786) {
        tossCardImg.src = 'images/tosscard-plcc-desktop.png';
        pcPerents.forEach((pcPerent, i) => {
            pcPerent.insertBefore(imgAreas[i], null);
        })

    }else {
        tossCardImg.src='images/tosscard-plcc-mobile.png';
        moPerents.forEach((moPerent, i) => {
            moPerent.insertBefore(imgAreas[i], insPoints[i]);            
        })
    }
};

const menuBtn = document.querySelector('.menu-toggle');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('on');

    if(this.classList.contains('on')) {
        header.classList.add('fix');
        this.classList.add('toggle02');
        this.classList.remove('toggle03');

    } else {
        header.classList.remove('fix');
        this.classList.remove('toggle02');
        this.classList.add('toggle03');
    }
});

function tabFnc(e){
    const parent = e.parentNode.parentNode.parentNode.parentNode.parentNode;

    const tabImgs = parent.querySelectorAll('.inner-contents img');
    const tabBtns = parent.querySelectorAll('ul li');
    const tabMsgs = parent.querySelectorAll('.tab-message');

    const dataTab = e.parentNode.dataset.tabName;
    const dataSelect = parent.querySelector('.' + dataTab);
    const dataSelectMsg = parent.querySelector('.' + dataTab + '-msg');

    for(let tabImg of tabImgs){
        tabImg.classList.remove('on');
    }
    for(let tabBtn of tabBtns){
        tabBtn.classList.remove('on');
    }
    for(let tabMsg of tabMsgs){
        tabMsg.classList.remove('on');
    }

    e.parentNode.classList.add('on');
    dataSelect.classList.add('on');
    dataSelectMsg.classList.add('on');
};

const moneys = document.querySelectorAll('.money');

moneys.forEach((money) => {
    chngMNum = money.textContent.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    money.textContent = chngMNum+'원';
});

const elImgs = document.querySelectorAll('img');

elImgs.forEach((elImg) => {
    if(window.innerWidth > 786) {
        if(elImg.src.indexOf('_1x') > -1) {
            elImg.src = elImg.src.replace('_1x.png', '_3x.png');
        }else if(elImg.src.indexOf('.png') > -1) {
            elImg.src = elImg.src.replace('.png', '_3x.png');
        }
    }
    elImg.addEventListener('error', function(){
        elImg.src = elImg.src.replace('_3x.png', '.png');
    })
})