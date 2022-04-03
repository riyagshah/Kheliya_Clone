
  // function openNav() {
  //   document.getElementById("mySidebar").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }
  // function closeNav() {
  //   document.getElementById("mySidebar").style.width = "";
  //   document.getElementById("main").style.marginLeft= "";
  // }
  // // SideBar Js Ends Here
  // // Cart Sidebar Js Starts
  // function openNav1() {
  //  document.getElementById("mySidebar1").style.width = "250px";
  //  document.getElementById("main1").style.marginRight = "250px";
  // }
  // function closeNav1() {
  //  document.getElementById("mySidebar1").style.width = "";
  //  document.getElementById("main1").style.marginRight= "";
  // }
  // //Cart Sidebar Js ends
  // //Dropdown Js Start Here
  // /* When the user clicks on the button,
  // toggle between hiding and showing the dropdown content */
  // function myFunction() {
  //  document.getElementById("myDropdown").classList.toggle("show");
  // }
  // function myFunction1() {
  //  document.getElementById("myDropdown1").classList.toggle("show");
  // }
  // function myFunction2() {
  //  document.getElementById("myDropdown2").classList.toggle("show");
  // }
  // function myFunction3() {
  //  document.getElementById("myDropdown3").classList.toggle("show");
  // }
  // function myFunction4() {
  //  document.getElementById("myDropdown4").classList.toggle("show");
  // }
  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //  if (!event.target.matches('.dropbtn')) {
  //    var dropdowns = document.getElementsByClassName("dropdown-content");
  //    var i;
  //    for (i = 0; i < dropdowns.length; i++) {
  //      var openDropdown = dropdowns[i];
  //      if (openDropdown.classList.contains('show')) {
  //        openDropdown.classList.remove('0');
  //      }
  //    }
  //  }
  // }
  // Index js data ends here
  var len=Object.keys(camel).length
  console.log(len)
  var p0=document.querySelector(".len");
  p0.innerText=`Showing all `+len+" items"
  window.addEventListener("load", function () {
      displayData(camel);
    });
    function handleSalarySort() {
      var selected = document.querySelector(".sort").value;
      if (selected =="htl") {
        camel.sort(function (a, b) {
       return b.p-a.p
        });
        console.log(camel)
      }
      if (selected =="lth") {
        camel.sort(function (a, b) {
          return a.p - b.p;
        });
        console.log(camel)
      }
      if (selected =="popularity") {
        camel.sort(function (a, b) {
          return b.popularity - a.popularity;
        })
        console.log(camel)
      }
      if (selected =="latest") {
        camel.sort(function (a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date)
    return dateB - dateA
  });
       console.log(camel)
      }
      if(selected=="avg")
      {
    camel.sort((a, b) => a - b);
  function avgRanking(num) {
  let sum = camel.reduce((previous, current) => current += previous);
  let avg = sum / camel.ranking.length;
  return avg
  }
  console.log(camel);
      }
      displayData(camel);
    }

    var wishl=JSON.parse(localStorage.getItem("wishlist"))||[]
  function displayData(camel) {
  document.querySelector(".product").innerHTML=""
    camel.map(function(el){
    var div=document.createElement("div");
  //   span.innerText="-10%";
  //   span.setAttribute("class","discount")
  
  var img=document.createElement("img");
  var find=el.discount;
  var btnn=document.createElement("button");
  btnn.style.backgroundcolor="white"
  btnn.setAttribute("class","btnn")
  btnn.innerText="ADD TO CART";
  btnn.addEventListener("click",function(){
    addtocart(el);
  })




   var imga=document.createElement("a")
   imga.append(img)
   imga.setAttribute("href","https://www.kheliyatoys.com/age/4-6-years/")
    img.setAttribute("class","brand-img");
    img.src=el.img
    var div1=document.createElement("div");
    div1.setAttribute("class","name-price");
    var assured=document.createElement("img");
    assured.setAttribute("class","assured")
    assured.src="/logoassured.gif"
    var namea=document.createElement("a")
    var h2=document.createElement("h2");
    namea.setAttribute("href","https://www.kheliyatoys.com/age/4-6-years/")
    h2.innerText=el.name
    var h3=document.createElement("h3")
    h3.innerText=el.price;
    var as=document.createElement("div")
    as.setAttribute("class","as")
    as.append(h3,assured)
  div1.append(h2,h3,btnn);
  if(find>0)
   {
      var span=document.createElement("span");
  var strikeoff=document.createElement("h3");
  strikeoff.setAttribute("class","strikeoff")
  strikeoff.innerText=el.price;
  var disc=el.p-(el.p*(el.discount/100))
  el.p=disc;
  h3.innerText="₹"+Math.floor(disc)
  console.log(disc)
      span.innerText="-"+el.discount+"%"
      span.setAttribute("class","discount")
      var strikediv=document.createElement("div")
      strikediv.setAttribute("class","strikediv")
      strikediv.append(strikeoff,h3) //
      div1.append(h2,strikediv,btnn);
      div.append(span,imga,div1)
   }
   else
   {
  div.append(imga,div1)
   }
   if(el.latest==true && find>0)
   {
    var span2=document.createElement("span");
    span2.innerText="New";
    span2.setAttribute("class","new")
  div.append(span2,span,imga,div1)
   }
   else if(el.latest==true && find==undefined)
   {
    var span2=document.createElement("span");
    span2.innerText="New";
    span2.setAttribute("class","new")
  div.append(span2,imga,div1)
   }
  document.querySelector(".product").append(div)
  })
  }
 function addtocart(el)
 {
   wishl.push(el)
   localStorage.setItem("wishlist",JSON.stringify(wishl))
 }