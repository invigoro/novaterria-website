$(document).ready(function(){

$('a.nav-link').on('click', function(e){

let target = $(this).attr('href');

if(target.startsWith("#")){

e.preventDefault();

$('html, body').animate({
scrollTop: $(target).offset().top - 70
}, 600);

}

});

});