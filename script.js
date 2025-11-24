let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function toggleChat() {
  var popup = document.getElementById("chatPopup");
  if (popup.style.display === "none") {
      popup.style.display = "block";
  } else {
      popup.style.display = "none";
  }
}

function sendMessage() {
  // Code to send message goes here
  var C_name = document.getElementById("name")
  var C_email = document.getElementById("email")
  var C_message = document.getElementById("message")
  console.log(C_name.value + ", sent you a message saying: '" + C_message.value + "'")
  C_name.value = ""
  C_email.value = ""
  C_message.value = ""
  alert("Message sent!");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const headerHeight = document.getElementById('header').offsetHeight;
  const yOffset = -headerHeight;

  window.scrollTo({
      top: section.offsetTop + yOffset,
      behavior: 'smooth'
  });
}


