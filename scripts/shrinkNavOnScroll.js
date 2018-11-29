window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").className = "shrinkHeader";
    //document.getElementById("logo").style.fontSize = "25px";
  } else {
   document.getElementById("header").className = "originalHeader";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}