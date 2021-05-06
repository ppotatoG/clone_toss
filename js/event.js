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


document.addEventListener('click', function(e){
    if(e.target.dataset.tab == 'true') {
        let elId = e.target.id
        let parentNode = document.querySelector('#'+elId)
        let tabLists = parentNode.querySelectorAll('.menu li')
        let tabImgs = parentNode.querySelectorAll('.inner-contents img')
        let tabMessages = parentNode.querySelectorAll('.tab-message')
    }
})

/*

my
나는 보험료를 얼마나 똑똑하게 내고 있을까? 내 보험, 조회와 진단까지 한 번에 해보세요.

return
귀찮아서 미뤄왔던 보험금 청구, 토스에서 간편하게 해보세요.

mini
잠깐씩 필요한 보험부터 삶에 꼭 필요한 보장성 보험까지.나에게 필요한 미니보험을 찾아보세요.

view
복잡한 과정 없이 무료로 신용점수를 확인할 수 있습니다.

broker
대출 상품을 간편하게 비교해보고 꼭 맞는 대출을 찾을 수 있습니다.

cardrecommend
내게 맞는 혜택을 제공하는 신용카드를 추천 받을 수 있습니다.

dutchpay
더치페이할 때도 직접 계한하지 말고 쉽게 주고받으세요.

atm
카드 없이도 ATM에서 출금할 수 있습니다.

exchange
최대 100% 환율 우대로 저렴하게 환전할 수 있습니다.

*/