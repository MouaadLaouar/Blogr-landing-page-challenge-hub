const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const Hero = document.querySelector('.Hero');

let x = 0;
hamburger.addEventListener('click', () => {
    x++;
    switch(x) {
        case 1:
            menu.classList.add('active');
            hamburger.src = './src/images/icon-close.svg';
            break;
        case 2:
            menu.classList.remove('active');
            hamburger.src = './src/images/icon-hamburger.svg';
            x = 0;
            break;
        default:
        x = 0;
    }
});



const Product = document.getElementById('Product');
const Menu01 = document.getElementById('menu-01');
let p = 0;

const Company = document.getElementById('Company');
const Menu02 = document.getElementById('menu-02');
let c = 0;

const Connect = document.getElementById('Connect');
const Menu03 = document.getElementById('menu-03');
let co = 0;


Product.addEventListener('click', () => {
    p++;
    switch(p) {
        case 1:
            Menu01.style.display = 'block';
            break;
        case 2:
            Menu01.style.display = 'none';
            p = 0;
            break;
        default :
        p = 0;
    }
});

Company.addEventListener('click', () => {
    c++;
    switch(c) {
        case 1:
            Menu02.style.display = 'block';
            break;
        case 2:
            Menu02.style.display = 'none';
            c = 0;
            break;
        default :
        c = 0;
    }
});

Connect.addEventListener('click', () => {
    co++;
    switch(co) {
        case 1:
            Menu03.style.display = 'block';
            break;
        case 2:
            Menu03.style.display = 'none';
            co = 0;
            break;
        default :
        co = 0;
    }
});


// Product.addEventListener('click', Change(p,Menu01));
// console.log(p)

Hero.addEventListener('click', () => {
    menu.classList.remove('active');
    Menu01.style.display = 'none';
    Menu02.style.display = 'none';
    Menu03.style.display = 'none';
    hamburger.src = './src/images/icon-hamburger.svg';
    x,p,c,co = 0;
});