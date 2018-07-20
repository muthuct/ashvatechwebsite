var navData = navtemplate({
    title: 'Home'
});
console.log(navData);
document.getElementById("navigationbar").innerHTML += navData;

$(document).ready(function(){
    var carousels = bulmaCarousel.attach();
});