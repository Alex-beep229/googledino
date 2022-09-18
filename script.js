const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')

document.addEventListener('mousedown', function (event) {
    jump();
})

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout (function (){
        dino.classList.remove('jump')
    }, 200)
}

