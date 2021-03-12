let header = document.querySelector("header"),
    sticky = header.offsetTop,
    MobileCTA=document.querySelector('#moblie-cta');

//onscroll은 뭐죠 addEventListenr랑 달라여?
function headerFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("fix")
    MobileCTA.style.bottom=0+"px"
    } else {
    header.classList.remove("fix");
    MobileCTA.style.bottom=60+"px"
    }
}

window.onscroll = function() {headerFunction()};

window.addEventListener('load', ()=>{
    if (window.pageYOffset > sticky) {
        header.classList.add("fix")
        MobileCTA.style.bottom=0+"px"
    } else {
        header.classList.remove("fix");
        MobileCTA.style.bottom=60+"px"
    }
});

function MenuToggle(){
    document.querySelector('.menu-toggle').classList.toggle('on')
}

//resize, onload 마다 img.alt 속성을 바꿔주나요? 그럼 같은 내용 함수를 두번?
//클릭마다 this 잡기
//click 섹션마다 다르게 들어가야 해??? ?????

/*
딜레이{
    click, this z-index: + margin
    delay, this(not) z-index : -
}
*/

let tabBtn=document.querySelectorAll('.tab-menu li'),
    tabImg=document.querySelectorAll('.inner-contents img'),
    tabmessage=document.querySelector('.tab-area .tab-message');

for(let i=0; i<tabBtn.length; i++){
    tabBtn[i].addEventListener('click', function(){
        for(let n=0; n<tabBtn.length; n++){
            tabBtn[n].classList.remove('on')
            tabImg[n].classList.remove('on')
        }
        const dataSet=this.dataset.tabmsg
        if(this.classList!=="on"){
            this.classList.add('on')
            document.querySelector('.'+dataSet).classList.add('on')
        }
        if(dataSet=='contacts') tabmessage.textContent="계좌번호를 몰라도 연락처만으로 송금할 수 있습니다."
        else if(dataSet=='sagi') tabmessage.textContent="송금하는 계좌에 피해 사례가 있는지 확인할 수 있습니다."
        else if(dataSet=='message') tabmessage.textContent="받는분에게 마음을 전해보세요"
    })
}
$('.counter-20').counterUp({
    delay: 10,
    time: 2000
});
$('.counter-25').counterUp({
    delay: 10,
    time: 2500
});