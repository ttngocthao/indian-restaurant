var menuIcon=document.getElementById('menuIcon');
function toggleNav(){    
    document.getElementById('nav-bar').classList.toggle('showMenu');
}
menuIcon.addEventListener('click',toggleNav);

window.onclick= function(event){
  if(!event.target.matches('.menuIcon')){
    var navBarLists = document.getElementsByClassName('navBarList');
    for(var i = 0; i < navBarLists.length;i++){
      var openList = navBarLists[i];
      if(openList.classList.contains('showMenu')){
        openList.classList.remove('showMenu');
      }
    }
  }
}