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

let toggleMenuBtn=document.querySelector('.menu-toggle');

toggleMenuBtn.addEventListener('click', function(){
    this.classList.toggle('on')

    if(this.classList.contains('on')) header.classList.add('mo-toggle-on')
    else header.classList.remove('mo-toggle-on')
});

function headerBg(){
    const toggleMenu=document.querySelector('.menu-toggle');
    if(toggleMenu.classList.contains='on') header.style.backgroudColor="#fff"
    else header.style.backgroudColor="transparent"
};headerBg()

//resize, onload 마다 img.alt 속성을 바꿔주나요? 그럼 같은 내용 함수를 두번?
//클릭마다 this 잡기
//click 섹션마다 다르게 들어가야 해??? ?????

/*
딜레이{
    click, this z-index: + margin
    delay, this(not) z-index : -
}
*/

let Wrap = document.querySelector('#wrap')

Wrap.addEventListener('click', function(e){
    const istab = e.target.dataset.tab;
    if(istab) {
        const tabParent = e.target.parentNode;
        const tabImgs = tabParent.parentNode.previousElementSibling.querySelectorAll('.inner-contents img');
        const tabMsg = tabParent.parentNode.nextElementSibling;

        for( const tab of tabParent.children ){
            tab.classList.remove('on')
        }    
        for( const tabimg of tabImgs ){
            tabimg.classList.remove('on')
        }

        e.target.classList.add('on')

        const className=e.target.dataset.tabName
        document.querySelector('.'+className).classList.add('on')

        switch(className){
            case ('contacts') :
                tabMsg.textContent='계좌번호를 몰라도 연락처만으로 송금할 수 있습니다.';
                break;
            case ('sagi') :
                tabMsg.textContent='송금하는 계좌에 피해 사례가 있는지 확인할 수 있습니다.';
                break;
            case ('message') :
                tabMsg.textContent='받는분에게 마음을 전해보세요.';
                break;
            default :
                false;
        }
    }
})

$('.counter-20').counterUp({
    delay: 10,
    time: 2000
});
$('.counter-25').counterUp({
    delay: 10,
    time: 2500
});

window.addEventListener('load', function(){
    if(window.innerWidth>786) document.querySelector('#wrap').classList.add('pc')
    else document.querySelector('#wrap').classList.remove('pc')
})

window.addEventListener('resize', function(){
    if(window.innerWidth>786) {
        document.querySelector('#wrap').classList.add('pc')
        header.classList.remove('mo-toggle-on')
    } else { 
        document.querySelector('#wrap').classList.remove('pc')
        
    }
})