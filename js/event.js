let header = document.querySelector("header");
let sticky = header.offsetTop;
let MobileCTA=document.querySelector('#moblie-cta');
let wrap = document.querySelector('#wrap');

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

let menuBtn=document.querySelector('.menu-toggle');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('on')

    if(this.classList.contains('on')) {
        header.classList.add('style')
        this.classList.add('animation')
    } else {
        header.classList.remove('style')
    }
});

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
            case ('my') :
                tabMsg.textContent='나는 보험료를 얼마나 똑똑하게 내고 있을까? 내 보험, 조회와 진단까지 한 번에 해보세요.';
                break;
            case ('return') :
                tabMsg.textContent='귀찮아서 미뤄왔던 보험금 청구, 토스에서 간편하게 해보세요.';
                break;
            case ('mini') :
                tabMsg.textContent='잠깐씩 필요한 보험부터 삶에 꼭 필요한 보장성 보험까지.나에게 필요한 미니보험을 찾아보세요.';
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