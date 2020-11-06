window.onload = ()=>{
    document.getElementById('loading-page').style.display="none";
    document.getElementById('wrapper').style.display="block";

//Required variables
const menuLogo = document.querySelector('.menu-logo');
const menuOutput = document.querySelector('.menu-output');
const navData = document.getElementById('navbarNavDropdown');
const dots = document.querySelector('.dots');
const viewBtn = document.querySelectorAll('.view');
//Menu icon on click event trigger
menuLogo.addEventListener('click', toogleMenu);
function toogleMenu(e) {
    //Check for menu opened or not
    if (e.target.classList.contains('status')) {
        toggle(menuLogo,'status',menuOutput,'nav-down');
        menuOutput.innerHTML = navData.innerHTML;
        dots.innerHTML = `<circle id="dot2" cx="12.5" cy="2.5" r="2.5" fill="#050505"/>
        <path class="lines" d="M13.5 5.5L18.5 0.5M5.5 13.5L0.5 18.5M5.5 5.5C5.5 5.5 2.45262 2.45262 0.5 0.5M13.5 13.5L18.5 18.5" stroke="#050505" stroke-linecap="round" stroke-linejoin="round"/>`;
    } else {
        toggle(menuOutput,'nav-down',menuLogo,'status');
        menuOutput.innerHTML='';
        dots.innerHTML=`<circle id="dot1" cx="2.5" cy="2.5" r="2.5" fill="#050505"/>
        <circle id="dot2" cx="12.5" cy="2.5" r="2.5" fill="#050505"/>
        <circle id="dot3" cx="22.5" cy="2.5" r="2.5" fill="#050505"/>`;
    }
}
//Toggle the menu custom function
function toggle(element1,classToBeRemoved,elememt2,classToBeAdded)
{
    element1.classList.remove(`${classToBeRemoved}`);
    elememt2.classList.add(`${classToBeAdded}`);
}

//Hover the service button change text color
viewBtn.forEach(view =>{
    view.addEventListener('mouseover',()=>{
        const btn = view.children[0];
        toggle(btn,'text-primary',btn,'text-white');
    });
});

viewBtn.forEach(view =>{
    view.addEventListener('mouseout',()=>{
    const btn = view.children[0];
    toggle(btn,'text-white',btn,'text-primary');
});
});

//Trigger the particle.js to the website
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
  });

}
