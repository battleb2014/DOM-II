// Create at least 10 different types of event listeners

const body = document.querySelector('body');
window.addEventListener('load', (event) => body.style.textAlign = 'center');

 const firstImg = document.querySelector('.intro img');
 firstImg.addEventListener('mouseover', event => {
     body.style.backgroundColor = 'skyblue';
     event.stopPropagation();
});

 firstImg.addEventListener('mouseout', event => {
     body.style.backgroundColor = 'white';
     event.stopPropagation();
    });

 function enter(event) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
     if(event.key === 'Enter') {
         body.style.backgroundColor = `#${randomColor}`;
     }
 }
 document.addEventListener('keydown', enter);

const nav = document.querySelector('.nav');
const home = nav.firstElementChild;
home.addEventListener('click', event => {
    alert('The bus is broke down.  No ride home!');
    event.preventDefault();
});

document.addEventListener('scroll', event => body.style.color = 'blue');

function zoom(event) {
    event.preventDefault();
    let scale = 1;
    scale += event.deltaY * -0.01;
    img2.style.transform = `scale(${scale})`;
}
const img2 = document.querySelector('.content-section .img-content img');
img2.addEventListener('wheel', zoom);

const img3 = document.querySelector('.inverse-content img');

const about = home.nextElementSibling;
about.addEventListener('click', event => alert('Don\'t worry about it!'));

const contact = nav.lastElementChild;
contact.addEventListener('click', event => alert('Go away!'));

