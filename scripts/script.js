var shuriken1 = document.getElementById('shuriken-1')
var shuriken2 = document.getElementById('shuriken-2')
var shuriken3 = document.getElementById('shuriken-3')

var shurikens = [shuriken2, shuriken1, shuriken3]

var card1 = document.getElementById('card-1')
var card2 = document.getElementById('card-2')
var card3 = document.getElementById('card-3')

var cards = [card1, card2, card3]

var navBar = document.getElementById('nav-bar')

var leftEyeLid = document.getElementById("left-eye-lid")
var rightEyeLid = document.getElementById("right-eye-lid")

function throwingShuriken(shuriken){
    for(let i = 0; i <= window.innerWidth; i++){
        if(i != window.innerWidth-175){
            setTimeout(() => {
                shuriken.style.left = `${i}px`
                shuriken.style.transform = `rotate(${i/3}deg)`
            }, i/2)
        } else {
            break
        }
    }
}

for (let i = 0; i <= shurikens.length; i++){
    setTimeout(() => {
        throwingShuriken(shurikens[i])
    }, 500 * i)
}

function openingEyes (leftEyeLid, rightEyeLid){
    setTimeout(() => {
        for(let i=0; i <= 195; i++) {
            setTimeout(() => {
                leftEyeLid.style.height = `${200-i}px`
            }, i)
            setTimeout(() => {
                rightEyeLid.style.height = `${200-i}px`
            }, i)
            
        }
    }, 2000)
    
}
openingEyes(leftEyeLid, rightEyeLid)

window.onscroll = () => {
    if(this.scrollY <= 800) {
        navBar.style.backgroundColor = '#000'
    } else {
        navBar.style.backgroundColor = '#4f4f4f'
    }
};

for(let i = 0; i <= cards.length; i++) {
    cards[i].addEventListener('mouseover', () => {
        cards[i].style.transform = 'scale(1.1, 1.1)'
    })

    cards[i].addEventListener('mouseleave', () => {
        cards[i].style.transform = 'scale(1, 1)'
    })
}

