
function toggleNav(){    
    var navBar= document.getElementById('nav-bar');
    if(navBar.className==''){
        navBar.className += 'showMenu';        
    }else{
        navBar.className ='';       
    }
}
menuIcon.addEventListener('click',toggleNav);