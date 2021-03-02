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
    tabImg=document.querySelectorAll('.inner-contents img');

for(let i=0; i<tabBtn.length; i++){
    tabBtn[i].addEventListener('click', function(){
        console.log(i)
        console.log(tabBtn[i])
        console.log(tabImg[i])

        tabBtn[i].classList.remove('on')
        tabImg[i].classList.remove('on')

        const dataSet=this.dataset.tabmsg

        if(this.classList!=="on"){
            this.classList.add('on')
            document.querySelector('.'+dataSet).classList.add('on')
        }
        
    })
}
//중복 꼬엿다!