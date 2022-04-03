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

// header JS ends

    document.querySelector("form").addEventListener("submit", myFun)
    function myFun() {
        event.preventDefault();
        var a = document.getElementById("rr").value;
        var b = document.getElementById("ra").value;
        var c = document.getElementById("rb").value;
        var d = document.getElementById("rc").value;
        var e = document.getElementById("rk").value;
        var f = document.getElementById("kr").value;
        var g = document.getElementById("ka").value;
        var i = document.getElementById("kb").value;
        var j = document.getElementById("kc").value;
        console.log(a,b,c,d,e,f,i,j)
        
        
    
        document.getElementById("out").innerText = "The form was sent successfully. We'll review & our team will contact your shortly.";
        // console.log(out);
    }
    