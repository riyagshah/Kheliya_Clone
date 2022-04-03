<<<<<<< HEAD

document.querySelector("form").addEventListener("submit",contact);
var userData=JSON.parse(localStorage.getItem("user"))||[];
function contact(){
    event.preventDefault();
    var userobj={
        name:document.querySelector("#name").value,
        Email:document.querySelector("#email").value,
        Mobile:document.querySelector("#mob").value,
   num:document.querySelector("#number").value,
   massage:document.querySelector("#Message").value,
    };
    console.log(userobj)
    userData.push(userobj)
    localStorage.setItem("user",JSON.stringify(userData))
    name:document.querySelector("#name").value = "";
        Email:document.querySelector("#email").value = "";
        Mobile:document.querySelector("#mob").value = "";
        massage:document.querySelector("#Message").value="";
 }
=======
// Side Bar Js

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
//  end of dropdown
>>>>>>> 32eeb1500eaded17fd5e50dbfd08467806a42f12

