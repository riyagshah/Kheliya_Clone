function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "";
    document.getElementById("main").style.marginLeft= "";
  }
        
  // SideBar Js Ends Here
 
  // Cart Sidebar Js Starts
  function openNav1() {
   document.getElementById("mySidebar1").style.width = "250px";
   document.getElementById("main1").style.marginRight = "250px";
 }
 
 function closeNav1() {
   document.getElementById("mySidebar1").style.width = "";
   document.getElementById("main1").style.marginRight= "";
 }
 
  //Cart Sidebar Js ends
 
 //Dropdown Js Start Here
 /* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
 
 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 function myFunction1() {
   document.getElementById("myDropdown1").classList.toggle("show");
 }
 function myFunction2() {
   document.getElementById("myDropdown2").classList.toggle("show");
 }
 function myFunction3() {
   document.getElementById("myDropdown3").classList.toggle("show");
 }
 function myFunction4() {
   document.getElementById("myDropdown4").classList.toggle("show");
 }
 // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('0');
       }
     }
   }
 }