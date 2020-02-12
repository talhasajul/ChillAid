$(document).ready(function(){
    
    //STICKY_MENU
    
    $(".js--services-section").waypoint(function(direction){
        
        if (direction == "down"){
                $("nav").addClass("sticky");
        } else {
                $("nav").removeClass("sticky");
            }
    });
    
    // ACTIVE LINK
    
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    
    $("nav a img.logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });
    
    //SMOOTH SCROLL FOR IE/ EDGE/ SAFARI
    
    $("a").on('click', function(event){
       
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top}, 800, function(){
                window.location.hash = hash;
            });
        }
        
    });
});


    //JUMP BUTTON

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}











