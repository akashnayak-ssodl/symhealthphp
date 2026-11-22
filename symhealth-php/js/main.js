// Mobile menu
const burger=document.querySelector('.burger'),list=document.getElementById('menu-list');
burger.addEventListener('click',()=>{const o=list.classList.toggle('open');burger.setAttribute('aria-expanded',o)});

// Hero slider
const imgs=document.querySelectorAll('.slides img');let i=0;
if(imgs.length>1&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  setInterval(()=>{imgs[i].classList.remove('on');i=(i+1)%imgs.length;imgs[i].classList.add('on')},5000);
}
