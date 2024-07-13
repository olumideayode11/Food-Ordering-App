const mobile = document.querySelector('hamburger');
const mobileLink = document.querySelector('.sidebar');
mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");

  } ) 