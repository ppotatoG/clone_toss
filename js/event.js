let header = document.querySelector("header");
let sticky = header.offsetTop;
let MobileCTA = document.querySelector('#moblie-cta');
let wrap = document.querySelector('#wrap');
let contents = document.querySelector('#contents');

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

let menuBtn=document.querySelector('.menu-toggle');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('on')

    if(this.classList.contains('on')) {
        header.style.background="#fff";
        this.classList.add('toggle02')
        this.classList.remove('toggle03')
    } else {
        header.style.background="transparent";
        this.classList.remove('toggle02')
        this.classList.add('toggle03')
    }
});

contents.addEventListener('click', function(e){
    const istab = e.target.dataset.tab;
    if(istab) {
        const tabParent = e.target.parentNode;
        const tabImgs = tabParent.parentNode.parentNode.previousElementSibling.querySelectorAll('.inner-contents img');     
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
            case ('view') :
                tabMsg.textContent='복잡한 과정 없이 무료로 신용점수를 확인할 수 있습니다.';
                break;
            case ('broker') :
                tabMsg.textContent='대출 상품을 간편하게 비교해보고 꼭 맞는 대출을 찾을 수 있습니다.';
                break;
            case ('cardrecommend') :
                tabMsg.textContent='내게 맞는 혜택을 제공하는 신용카드를 추천 받을 수 있습니다.';
                break;
            case ('dutchpay') :
                tabMsg.textContent='더치페이할 때도 직접 계한하지 말고 쉽게 주고받으세요.';
                break;
            case ('atm') :
                tabMsg.textContent='카드 없이도 ATM에서 출금할 수 있습니다.';
                break;
            case ('exchange') :
                tabMsg.textContent='최대 100% 환율 우대로 저렴하게 환전할 수 있습니다.';
                break;
            default :
                false;
        }
    }
})

