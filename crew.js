let menu = document.getElementById('menu');
let oopen = document.getElementById('open');
let cclose = document.getElementById('close');
let screenWidth = window.innerWidth;

function openn(){
    menu.style.display = 'block'
    oopen.style.display = 'none'
    cclose.style.display = 'block'

}
function closee(){
    menu.style.display = 'none'
    oopen.style.display = 'block'
    cclose.style.display = 'none'

}
if(screenWidth >838){
    oopen.style.display = 'none'
}
function checkScreen() {
    if (window.innerWidth > 838) {
        oopen.style.display = 'none';
        cclose.style.display = 'none';
        menu.style.display = 'none';
    } else {
        oopen.style.display = 'block';
    }
}

checkScreen(); // أول تحميل
window.addEventListener('resize', checkScreen);

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let img = document.getElementById('img')
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')

function onee(){
    img.src = 'image-anousheh-ansari.jpg'
    one.style.background = 'white'
    two.style.background = '#4f4f4f'
    three.style.background = '#4f4f4f'
    four.style.background = '#4f4f4f'
    h1.innerHTML = 'ANOUSHEH ANSARI'
    h2.innerHTML = 'FLIGHT ENGINEER'
}
function twoo(){
    img.src = "image-douglas-hurley.png"
    one.style.background = '#4f4f4f'
    two.style.background = 'white'
    three.style.background = '#4f4f4f'
    four.style.background = '#4f4f4f'
    h1.innerHTML = 'DOUGLAS HURLEY'
    h2.innerHTML = 'ENGINE ENGINEER'
}

function threee(){
    img.src = 'image-mark-shuttleworth.png'
    one.style.background = '#4f4f4f'
    two.style.background = '#4f4f4f'
    three.style.background = 'white'
    four.style.background = '#4f4f4f'
    h1.innerHTML = 'MARK SHUTTLEWORTH'
    h2.innerHTML = 'AVIONICS ENGINEER'
    
}

function fourr(){
    img.src = 'image-victor-glover.png'
    one.style.background = '#4f4f4f'
    two.style.background = '#4f4f4f'
    three.style.background = '#4f4f4f'
    four.style.background = 'white'
    h1.innerHTML = 'VICTOR GLOVER'
    h2.innerHTML = 'FLIGHT TEST ENGINEER'
}



