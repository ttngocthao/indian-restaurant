var menuIcon=document.getElementById('menuIcon');
function toggleNav(){    
    document.getElementById('nav-bar').classList.toggle('showMenu');
}
menuIcon.addEventListener('click',toggleNav);

var navbar=document.getElementById('nav-bar');
navbar.addEventListener('click',function(){
  this.classList.toggle('showMenu');
})