const container = document.querySelector('.container');
const card = document.querySelector('.card');
const img = document.querySelector('.sneaker img');
const title = document.querySelector('.info .title');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');
container.addEventListener(('mousemove'), e => {
    const xAxis = ((window.innerWidth / 2) - e.pageX) / 10 ;
    const yAxis = ((window.innerHeight / 2) - e.pageY)  / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotatex(${yAxis}deg)`;
    img.style.transition = 'all 0.5s ease';
})

container.addEventListener(('mouseenter'), e => {
    card.style.transition = 'none';
    img.style.transform = 'translateZ(200px) rotateZ(25deg)';
    title.style.transform = 'translateZ(150px)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
})

container.addEventListener(('mouseleave'), e => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'all 0.5s ease'
    img.style.transform = 'translateZ(0) rotateZ(0deg)';
    title.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
})
