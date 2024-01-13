const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')


open_btns.forEach ((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

close_btns.forEach ((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})


const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')


let slideIndex = 0

slideShow(slideIndex)

function slideShow(n) {
    if(n === slides.length) {
        slideIndex = 0
    }

    if(n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
}

next_btn.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}


let click = document.querySelector('.tabcontent')
let click2 = document.querySelector('.tabcontent2')
let click3 = document.querySelector('.tabcontent3')
let click4 = document.querySelector('.tabcontent4')
let click5 = document.querySelector('.tabcontent5')

let tab_head = document.querySelectorAll('.tabheader__item')
let tab_head2 = document.querySelectorAll('.tabheader__item2')
let tab_head3 = document.querySelectorAll('.tabheader__item3')
let tab_head4 = document.querySelectorAll('.tabheader__item4')

// let tab_active = document.querySelectorAll('.tabheader__item_active')


// // tab_head.onclick = () => {
// //     click.classList.add('active')
// //     click2.classList.remove('active')
// //     click3.classList.remove('active')
// //     click4.classList.remove('active')
// //     click5.classList.remove('active')
// // }

// tab_head2.onclick = () => {
//     click.classList.remove('active')
//     click2.classList.add('active')
//     click3.classList.remove('active')
//     click4.classList.remove('active')
//     click5.classList.remove('active')
// }


let tabContents = document.querySelectorAll('.tabcontent'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabHeaderParent = document.querySelector('.tabheader__items');

    function hideTabs() {
        tabContents.forEach(tab => {
            tab.classList.add('hide')
            tab.classList.remove('show', 'fade')
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTab(i) {
        tabContents[i].classList.add('show', 'fade')
        tabContents[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabs()
    showTab(0)
    
tabHeaderParent.addEventListener('click', (e) => {
    let target = e.target
        
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, index) => {
            if (target === item) {
                    
                hideTabs()
                showTab(index)
                
                }
            })
    }
})



