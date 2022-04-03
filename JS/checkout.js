// Header JS Starts
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

//Header JS ends


// drop down cs

function myFunction11() {
    event.preventDefault();
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  

  function myFunction12() {
    event.preventDefault();
    var z = document.getElementById("myDIV1");
      if(z.style.display==="block"){
          z.style.display="none";
      } else {
          z.style.display = "block";
      }
  }

  // var q =  document.querySelector("#zbuz").addEventListener("click",myFunction);
    
  function myFunction13() {
    event.preventDefault();
      var a = document.getElementById("zconta");
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

 


  

  function myFunction14() {
  
    var a = document.getElementById("zed");
    if (a.style.display === "block") {
      a.style.display = "none";
    } else {
      a.style.display = "block";
    }
  }



 // drop down over




// *******************SWATI code starts***********


// *************** For Billing info storage *****************
document.querySelector(".sk-main-div"),addEventListener("submit", myFunction);


function myFunction(){
    
    event.preventDefault();
  

var  firstName=document.getElementById("firstname").value;
var lastName=document.getElementById("lastname").value;
var  email=document.getElementById("email").value;
var mobile=document.getElementById("mobile").value; 
var address=document.getElementById("address").value; 
var pincode=document.getElementById("pincode").value; 
var city=document.getElementById("city").value; 
var state=document.getElementById("state").value; 
var country=document.getElementById("country").value; 
var notes=document.getElementById("notes").value;




console.log(firstName,lastName,email,mobile,address,pincode
    ,city,state,country,notes);



var infoObj={

    firstName1: firstName,
    lastName1 : lastName,
    email1  :      email,
    mobile1 :    mobile,
    address1 : address,
    pincode1  :pincode,
    city1  : city,
    state1 :state,
    country1 : country,
    notes1 : notes,

}

if(firstName == "" || lastName == "" || email == "" || mobile == "" ||
    address == "" || pincode == "" || city == "" || state == "" || country == ""||
    notes == ""  ){
        alert("Please fill all the required field");
    }
else{
alert("Your Details has been saved with Us");
}

infoArr.push(infoObj);

localStorage.setItem("checkoutInfo",JSON.stringify(infoArr));



}




// ************ for table append ********
// *********** For - TABLE **************

// var cartInfo=JSON.parse(localStorage.getItem("wishlist")) || [];


//   wishlist.map(function(elem){

//     var tr=document.createElement("tr")

//     var td1=document.createElement("img");
//   td1.src= "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png";
//   tr.append(td1);


  // var td2=document.createElement("td");
  //     td2.innerText= elem.name;

  // var td3=document.createElement("td");
  //     td3.innerText= "₹"+ elem.p ;

 

//  tr.append(td2,td3);

//  var tr1=document.createElement("tr");
 
//  var td5=document.createElement("td");
//       td5.innerText= "Total";

//       var td6=document.createElement("td");
//       td6.innerText= "₹"+ elem.p;  

//       tr1.append(td5,td6)


//    document.querySelector("tbody").append(tr);
//    document.querySelector("tbody").append(tr1);
// });




// ****** For Place order **********


document.querySelector("#sk-btn").addEventListener("click",myPay);


function myPay(){

  var cb=document.querySelector('#accept');
    console.log(cb.checked);

if(cb.checked == true  ){
   location.href="payment.html";
}
else{
    alert("Please Accept the conditions");
}
}
 


// ********Code by swati end*********



