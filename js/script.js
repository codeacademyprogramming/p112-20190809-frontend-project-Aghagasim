"use script"
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }





 $('.slide').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    navSpeed: 800,
    autoplay: true,
    transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    }

})

$('.slide2').owlCarousel({
  loop: true,
  dots: false,
  margin: 15,
  nav: true,
  transitionStyle: "fade",
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 1
      },
      992: {
          items: 3
      }
  }

})
function openNav() {
  document.getElementById("nav-expander").style.width = "250px";
  document.getElementsById("nav-expander").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("nav-expander").style.width = "0";
  document.getElementsById("nav-expander").style.marginLeft= "0";
}

var header = $('.dark-line');
var win = $(window);
win.on('scroll', function() {
   var scroll = win.scrollTop();
   if (scroll < 300) {
       header.removeClass("line");
   } else {
       header.addClass("line");
   }
});
 
