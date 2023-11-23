//import '../css/styles.min.css';
//import '../scss/style.scss';
document.addEventListener('mousemove', (e)=>{
    document.querySelector('.layers').style.transform =` rotateY(${(e.clientX - window.innerWidth/2)*-0.01}deg) rotateX(${(e.clientY - window.innerHeight/2)*-0.015}deg)`;
});