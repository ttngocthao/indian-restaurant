var menuIcon=document.getElementById('menuIcon');
function toggleNav(){    
    document.getElementById('nav-bar').classList.toggle('showMenu');
}
menuIcon.addEventListener('click',toggleNav);

//the codes below don't work T-T
window.onclick = function(event){
    if(!event.target.matches('.menuIcon')){
        console.log(event);
        var menu= document.getElementsByClassName('navBarList');
        for(var i=0; i < menu.length; i++){
            var openList = menu[i];
            console.log(openList);
            if(openList.classList.contains('showMenu')){
                openList.classList.remove('showMenu')
            }
        }
    }
}