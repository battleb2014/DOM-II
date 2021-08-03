// Create at least 10 different types of event listeners

// Align all elements on the page
const body = document.querySelector('body');
window.addEventListener('load', (event) => body.style.textAlign = 'center');

 // Toggle background color with first img mouse on and mouse of
 const firstImg = document.querySelector('header img');
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