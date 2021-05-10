const header = document.querySelector("header")
const sticky = header.offsetTop
const MobileCTA = document.querySelector('#moblie-cta')

function headerFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fix")
        MobileCTA.style.bottom=0+"px"
    } else {
        header.classList.remove("fix")
        MobileCTA.style.bottom=60+"px"
    }
}

window.addEventListener('scroll', headerFunction)
window.addEventListener('load', headerFunction)

let imgArea = document.querySelector('#annoying .img-area')
let pcPerent = document.querySelector('#annoying .img-box')
let moPerent = document.querySelector('#annoying .inner')
let insPoint = document.querySelector('#annoying .tab-btn')

function responsive() {
    const tossCardImg = document.querySelector('#toss-card figure img')
    if(window.innerWidth>786) {
        tossCardImg.src="images/tosscard-plcc-desktop.png"
        pcPerent.insertBefore(imgArea, null)
    }else {
        tossCardImg.src="images/tosscard-plcc-mobile.png"
        moPerent.insertBefore(imgArea, insPoint)
    }
}
window.addEventListener('resize', responsive)
window.addEventListener('load', responsive)

const menuBtn=document.querySelector('.menu-toggle')

menuBtn.addEventListener('click', function(){
    this.classList.toggle('on')

    if(this.classList.contains('on')) {
        header.classList.add("fix")
        this.classList.add('toggle02')
        this.classList.remove('toggle03')
    } else {
        header.classList.remove("fix")
        this.classList.remove('toggle02')
        this.classList.add('toggle03')
    }
})


// let tabBtn = document.querySelectorAll('#annoying ul li')
// let tabImg = document.querySelectorAll('#annoying .inner-contents img')
// let tabMessage = document.querySelectorAll('#annoying .tab-message')

// for(let i = 0; i < tabBtn.length; i++){
//     tabBtn[i].addEventListener('click', function(){
//         for(let n = 0; n < tabBtn.length; n++){
//             tabBtn[n].classList.remove('on')
//             tabImg[n].classList.remove('on')
//             tabMessage[n].classList.remove('on')

//             let thisDataset = this.dataset.tabName
//             let thisImg = document.querySelector('.'+thisDataset)
//             let thisMessage = document.querySelector('.'+thisDataset+'-msg')

//             this.classList.add('on')
//             thisImg.classList.add('on')
//             thisMessage.classList.add('on')
//         }
//     })
// }

function tabFnc(e){
    const parent = e.parentNode.parentNode.parentNode.parentNode
    const tabImgs = parent.querySelectorAll('.inner-contents img')
    const tabBtns = parent.querySelectorAll('ul li')
    const tabMsgs = parent.querySelectorAll('.tab-message')
    const dataTab = e.dataset.tabName
    const dataSelect = parent.querySelector('.'+dataTab)
    const dataSelectMsg = parent.querySelector('.'+dataTab+'-msg')

    for(let tabImg of tabImgs){
        tabImg.classList.remove('on')
    }
    for(let tabBtn of tabBtns){
        tabBtn.classList.remove('on')
    }
    for(let tabMsg of tabMsgs){
        tabMsg.classList.remove('on')
    }

    e.classList.add('on')
    dataSelect.classList.add('on')
    dataSelectMsg.classList.add('on')

}