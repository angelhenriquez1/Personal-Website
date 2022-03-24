window.addEventListener("load",function(){
  //$("#navbar").load("Navbar.html");
  document.getElementById("navbar").innerHTML = '\
  <html>\
    <h1 class="display-1 text-center">Angel Henriquez</h1>\
    <nav class="menu text-center sticky-top text-black">\
      <ul id="menu">\
        <li><a href="./Home.html">Home</a></li>\
        <li><a href="./AboutMe.html">About Me</a></li>\
        <li><a href="./Projects.html">Projects</a></li>\
        <li><a href="./Contact.html">Contact Me</a></li>\
        <li id="menu-toggle"><a href=""><i class="fas fa-bars white"></i></a></li>\
      </ul>\
    </nav>\
  </html>\
  ';
});
