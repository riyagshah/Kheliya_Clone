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

//Riya's Data for Clothing little Indian
var womensData = [
    
  {
    image_url:
      "https://www.kheliyatoys.com/wp-content/uploads/2021/04/ei_1645950286527-removebg-01-768x740.jpeg",
    name: "Little Indian Shirt Light Blue Pineapples",
    price: `Rs $(₹450.00)- Rs $(650.00)`,
  },
  {
    image_url:
      "https://www.kheliyatoys.com/wp-content/uploads/2021/04/ei_1645626253357-removebg-01-225x239.jpeg",
    name: "Little Indian Shirt Navy Blue Boats BSH040",
    price: 'Rs $(₹499.00)– ₹(699.00)',
  },
  
  {
    image_url:
    "https://www.kheliyatoys.com/wp-content/uploads/2021/06/ei_1646208357723-removebg-01-01-225x216.jpeg",
    name: "Little Indian Multicolour Elephant Frock GFRO83",
    price: "₹499.00 – ₹699.00",
  
  },
  {
    image_url:
      "https://www.kheliyatoys.com/wp-content/uploads/2021/07/BLK004-Big-Elephant-300x383.jpeg",
    name: "Little Indian Long Kurta Blue Big Elephant BLK004",
    price:"₹550.00 – ₹750.00",
   
  },
  {
    image_url:
      "https://www.kheliyatoys.com/wp-content/uploads/2021/07/BLK007_1-225x136.jpg",
    name: "Little Indian Long Kurta Green Elephant BLK007",
    price:"₹550.00 – ₹750.00",
  
  },
  {
    image_url:
      "https://www.kheliyatoys.com/wp-content/uploads/2021/07/ei_1645783042008-removebg-01.jpeg",
    name: "Little Indian Pink Pineapple Frock GFR085",
    price:"₹599.00 – ₹850.00",
    
  },
  {
    image_url:
      "https://www.kheliyatoys.com/wp-content/uploads/2021/07/BLK014-300x396.jpg",
    name: "Little Indian Long Kurta Off White Blue Fish BLK014",
    price:"₹550.00 – ₹800.00" ,
   
  },
  {
    image_url:
      "https://www.kheliyatoys.com/wp-content/uploads/2021/07/BSH013.jpg",
    name: "Little Indian Shirt Ikat BSH013",
    price:"₹499.00 – ₹750.00",
    strikedoffprice: 2599,
  },
  
];

document.querySelector("#container1").innerHTML = "";
  womensData.map(function(el){
 var div = document.createElement("div");
 
 var img= document.createElement("img");
 img.src=el.image_url;
 var name= document.createElement("h4");
 name.innerText=el.name;
 name.style.padding="10px"
 var div1 = document.createElement("div")
 div1.setAttribute("class","div1")
 var price=document.createElement("p")
 price.setAttribute("class",price)
 price.innerText=el.price
 var strikedoffprice=document.createElement("h3");
var button=document.createElement("button");
button.innerText="ADD TO CART";
button.addEventListener("click",function(){
    addtocart(el)
});

//    strikedoffprice.innerText=el.strikedoffprice
 strikedoffprice.setAttribute("class","strikedoff")
 div1.append(price,strikedoffprice)
 div.append(img,name,div1)
 document.querySelector("#container1").append(div)

})

// Swati's Data for Popular Products
var popularData=[

  {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/05/Magnet-Drop-Game-01415-1.jpgfilenameUTF-8Magnet-Drop-Game-01415-1-300x286.jpg",
       name: "Magnet Drop Game",
       
       price: 98.1,
       strikedoffprice:109.00 ,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Faber-Castel-Craft-Scissors-2-Cuts-01-300x477.jpg",
       name: "Faber Castell Craft Scissors 2-Cuts",
       price: 100,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2015/10/kheliya-gift-vouchers-300x300.png",
       name: " Kheliya Gift Vouchers (Redeemable At Our Stores)",
     
       price: 100.00-1000.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/08/6-in-1-Solar-Kit-Educational-DIY-DIY-Green-17268-1.jpgfilenameUTF-86-in-1-Solar-Kit-Educational-DIY-DIY-Green-17268-1-300x347.jpg",
       name: "6-in-1 Solar Kit Educational DIY Green",
       
       price: 488.75,
       strikedoffprice: 575.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/08/6-in-1-Solar-Kit-Educational-DIY-DIY-Orange-17326-1.jpgfilenameUTF-86-in-1-Solar-Kit-Educational-DIY-DIY-Orange-17326-1-300x373.jpg",
       name: "6-in-1 Solar Kit Educational DIY Orange",
       brand:"reebok",
       price: 350.00,
       strikedoffprice: 480.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/06/02241-300x400.jpg",
       name: "Funskool Jenga Mini",
       
       price: 599.00,
       strikedoffprice: 00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/05/Puzzle-Ball-With-Money-Bank-26223-4.jpgfilenameUTF-8Puzzle-Ball-With-Money-Bank-26223-4-300x181.jpg",
       name: "Puzzle Ball With Money Bank",
       
       price: 70.00,
       strikedoffprice: 80.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Mind-Puzzler-Number-01-300x315.jpg",
       name: "Mind Puzzler Number ",
      
       price: 126.00,
       strikedoffprice: 140.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/12/fancy-scratch-paper-drawing-book-small-33292-01-300x217.jpg",
       name: "Fancy Scratch Paper Drawing Book (Small)",
      
       price: 40,
       strikedoffprice: 50,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/06/Navneet-My-Little-Activity-Book-Part-1-12826-1.jpgfilenameUTF-8Navneet-My-Little-Activity-Book-Part-1-12826-1-300x428.jpg",
       name: "Navneet My Little Activity  Book Part-1",
       
       price: 25.00,
       strikedoffprice: 00,
     },
     {
       image_url:
       "https://www.kheliyatoys.com/wp-content/uploads/2016/07/Vikas-Tiny-Board-Books-Hindi-Varnamala-18895-1.jpgfilenameUTF-8Vikas-Tiny-Board-Books-Hindi-Varnamala-18895-1-300x302.jpg",
       name: "Navneet Vikas Tiny Board Books - Hindi Varnamala",
      
       price: 50,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Faber-Castell-Connector-Pens-10-Col-01-300x300.jpg",
       name: "Faber Castell Connector Pens 10 Col.",
       
       price: 60.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/11/Navneet-Panchatantra-Book-Marathi-Part-1-03155-1-1.jpgfilenameUTF-8Navneet-Panchatantra-Book-Marathi-Part-1-03155-1-1-300x371.jpg",
       name: "Navneet Panchatantra Story Book (Marathi) Part-1",
     
       price: 70.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Navneet-Hindi-Varnmala-Big-Wall-Chart-300x367.jpg",
       name: "Navneet Hindi Varnmala Big Wall Chart",
      
       price: 65,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/12/glowing-fairy-stickers-assorted-33311-01-300x273.jpg",
       name: "Glowing Fairy Stickers (Assorted)",
       
       price: 40.80,
       strikedoffprice: 59.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/08/centy-Swift-White-Pullback-Car-10702-white-2.jpgfilenameUTF-8centy-Swift-White-Pullback-Car-10702-white-2-300x218.jpg",
       name: "Centy Maruti Suzuki Swift Pullback Car (Color may vary)",
      
       price: 208.80,
       strikedoffprice: 232.80,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/12/Little-Genius-Carving-English-Alphabet-Uppercase-ME-26-kheliya-26222.jpgfilenameUTF-8Little-Genius-Carving-English-Alphabet-Uppercase-ME-26-kheliya-26222-300x109.jpg",
       name: "Little Genius Carving English Alphabet Uppercase ME-26",
      
       price: 790.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/01/Kheliya-00174-Anmol-Plastic-Carrom-board-2.jpgfilenameUTF-8Kheliya-00174-Anmol20Plastic20Carrom20board-2-300x300.jpg",
       name: "Anmol Plastic Carrom Board For Kids",
       
       price: 395.25,
       strikedoffprice: 465.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/03/Action-Duck-Family-00281-3.jpgfilenameUTF-8Action-Duck-Family-00281-3-300x286.jpg",
       name: "Action Duck Family",
       
       price: 234.00,
       strikedoffprice: 260.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/08/baby-cot-mobile-14917-01-300x225.jpg",
       name: "Cot Mobile (No. 13005)",
       
       price: 742.50,
       strikedoffprice: 825.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/05/Magnet-Drop-Game-01415-1.jpgfilenameUTF-8Magnet-Drop-Game-01415-1-300x286.jpg",
       name: "Magnet Drop Game",
       price: 98.1,
       strikedoffprice:109.00 ,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Faber-Castel-Craft-Scissors-2-Cuts-01-300x477.jpg",
       name: "Faber Castell Craft Scissors 2-Cuts",
       price: 100,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2015/10/kheliya-gift-vouchers-300x300.png",
       name: " Kheliya Gift Vouchers (Redeemable At Our Stores)",
     
       price: 100.00-1000.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/08/6-in-1-Solar-Kit-Educational-DIY-DIY-Green-17268-1.jpgfilenameUTF-86-in-1-Solar-Kit-Educational-DIY-DIY-Green-17268-1-300x347.jpg",
       name: "6-in-1 Solar Kit Educational DIY Green",
       
       price: 488.75,
       strikedoffprice: 575.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/08/6-in-1-Solar-Kit-Educational-DIY-DIY-Orange-17326-1.jpgfilenameUTF-86-in-1-Solar-Kit-Educational-DIY-DIY-Orange-17326-1-300x373.jpg",
       name: "6-in-1 Solar Kit Educational DIY Orange",
       brand:"reebok",
       price: 350.00,
       strikedoffprice: 480.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/06/02241-300x400.jpg",
       name: "Funskool Jenga Mini",
       
       price: 599.00,
       strikedoffprice: 00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/05/Puzzle-Ball-With-Money-Bank-26223-4.jpgfilenameUTF-8Puzzle-Ball-With-Money-Bank-26223-4-300x181.jpg",
       name: "Puzzle Ball With Money Bank",
       
       price: 70.00,
       strikedoffprice: 80.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Mind-Puzzler-Number-01-300x315.jpg",
       name: "Mind Puzzler Number ",
      
       price: 126.00,
       strikedoffprice: 140.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/12/fancy-scratch-paper-drawing-book-small-33292-01-300x217.jpg",
       name: "Fancy Scratch Paper Drawing Book (Small)",
      
       price: 40,
       strikedoffprice: 50,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/06/Navneet-My-Little-Activity-Book-Part-1-12826-1.jpgfilenameUTF-8Navneet-My-Little-Activity-Book-Part-1-12826-1-300x428.jpg",
       name: "Navneet My Little Activity  Book Part-1",
       
       price: 25.00,
       strikedoffprice: 00,
     },
     {
       image_url:
       "https://www.kheliyatoys.com/wp-content/uploads/2016/07/Vikas-Tiny-Board-Books-Hindi-Varnamala-18895-1.jpgfilenameUTF-8Vikas-Tiny-Board-Books-Hindi-Varnamala-18895-1-300x302.jpg",
       name: "Navneet Vikas Tiny Board Books - Hindi Varnamala",
      
       price: 50,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Faber-Castell-Connector-Pens-10-Col-01-300x300.jpg",
       name: "Faber Castell Connector Pens 10 Col.",
       
       price: 60.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/11/Navneet-Panchatantra-Book-Marathi-Part-1-03155-1-1.jpgfilenameUTF-8Navneet-Panchatantra-Book-Marathi-Part-1-03155-1-1-300x371.jpg",
       name: "Navneet Panchatantra Story Book (Marathi) Part-1",
     
       price: 70.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/02/Navneet-Hindi-Varnmala-Big-Wall-Chart-300x367.jpg",
       name: "Navneet Hindi Varnmala Big Wall Chart",
      
       price: 65,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/12/glowing-fairy-stickers-assorted-33311-01-300x273.jpg",
       name: "Glowing Fairy Stickers (Assorted)",
       
       price: 40.80,
       strikedoffprice: 59.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/08/centy-Swift-White-Pullback-Car-10702-white-2.jpgfilenameUTF-8centy-Swift-White-Pullback-Car-10702-white-2-300x218.jpg",
       name: "Centy Maruti Suzuki Swift Pullback Car (Color may vary)",
      
       price: 208.80,
       strikedoffprice: 232.80,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/12/Little-Genius-Carving-English-Alphabet-Uppercase-ME-26-kheliya-26222.jpgfilenameUTF-8Little-Genius-Carving-English-Alphabet-Uppercase-ME-26-kheliya-26222-300x109.jpg",
       name: "Little Genius Carving English Alphabet Uppercase ME-26",
      
       price: 790.00,
       strikedoffprice: 0,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/01/Kheliya-00174-Anmol-Plastic-Carrom-board-2.jpgfilenameUTF-8Kheliya-00174-Anmol20Plastic20Carrom20board-2-300x300.jpg",
       name: "Anmol Plastic Carrom Board For Kids",
       
       price: 395.25,
       strikedoffprice: 465.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2016/03/Action-Duck-Family-00281-3.jpgfilenameUTF-8Action-Duck-Family-00281-3-300x286.jpg",
       name: "Action Duck Family",
       
       price: 234.00,
       strikedoffprice: 260.00,
     },
     {
       image_url:
         "https://www.kheliyatoys.com/wp-content/uploads/2017/08/baby-cot-mobile-14917-01-300x225.jpg",
       name: "Cot Mobile (No. 13005)",
       
       price: 742.50,
       strikedoffprice: 825.00,
     },
   
    
  ];
  popularData.map(function(elem){

    var box=document.createElement("div");
    
    
    var img=document.createElement("img");
    img.src=elem.image_url;
    img.setAttribute("id","img1")
    
    var name=document.createElement("h2");
    name.innerText=elem.name;
    name.setAttribute("class","name1")
    
    
    var priceDiv =document.createElement("div");
    priceDiv.setAttribute("class","innerDiv")
    
    var price=document.createElement("p");
    price.innerText= elem.price;
    price.setAttribute("id","pri");
    
    var sprice=document.createElement("p");
    sprice.innerText=elem.strikedoffprice;
     sprice.setAttribute("id","s");
    
       priceDiv.append(sprice,price)
    // var add=document.createElement("button");
    //  add.innerText="Add To Cart";
    //  add.addEventListener("click",function(){
    //    addtoCart(elem);
    //  })
     box.append(img,name,priceDiv);
    
    document.querySelector("#middle").append(box);
    });
    

    var list=JSON.parse(localStorage.getItem("wishlist"))
    // var list=[
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/02/Himalaya-Babycare-Gift-Pack-Him-300x150.jpg",name:"Himalaya-Babycare-Gift-Pack",price:"₹40.00", p:40,popularity:2, date:"2020-01-05",discount:20},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Gentle-Baby-Soap-75gm-14388-2.jpgfilenameUTF-8Himalaya-Gentle-Baby-Soap-75gm-14388-2-300x185.jpg",name:"Himalaya-Gentle-Baby",price:"₹60.00",p:60,popularity:5, date: "2020-01-06",discount:10},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Gentle-Baby-Soap-125gm-14808-2.jpgfilenameUTF-8Himalaya-Gentle-Baby-Soap-125gm-14808-2-300x197.jpg",name:"Himalaya-Gentle-Baby-75gm",price:"₹90.00",p:90,popularity:1, date: "2020-02-07",latest:true},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Baby-Cream-23385-1.jpgfilenameUTF-8Himalaya-Baby-Cream-23385-1-300x647.jpg",name:"Himalaya-Baby",price:"₹40.00",p:40,popularity:3, date: "2020-02-04",latest:true},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Baby-Powder-14386-1.jpgfilenameUTF-8Himalaya-Baby-Powder-14386-1-300x867.jpg",name:"Himalaya-Baby",price:"₹40.00",p:40,popularity:5, date: "2020-01-02"},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Gentle-Baby-Bath-17806-1.jpgfilenameUTF-8Himalaya-Gentle-Baby-Bath-17806-1-300x651.jpg",name:"Himalaya-Gentle-17806",price:"₹40.00",p:40,popularity:3, date: "2020-01-04"},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/05/Sebamed-Baby-Cleaning-Bar-100gm-300x300.jpg",name:"Sebamed-Baby-Cleaning-Bar",price:"₹40.00",p:40,popularity:5, date: "2020-01-02"},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/04/Peristaltic-Nipple-Small-0-3-Month-P-88020-300x300.jpg",name:"Peristaltic-Nipple-Small-0-3",price:"₹40.00", p:40,popularity:2, date:"2020-01-05"},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/04/Peristalic-Bottle-Kpp-R-L-P-88003-300x300.jpg",name:"Peristalic-Bottle-Kpp",price:"₹60.00",p:60,popularity:5, date: "2020-01-06"},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/04/Natural-Fit-Nipple-Shield-Large-P-26227-300x300.jpg",name:"Natural-Fit-Nipple-Shield-Large",price:"₹90.00",p:90,popularity:1, date: "2020-01-07"},
    //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/05/Sebamed-Baby-Body-Milk-400ml-300x300.jpg",name:"ebamed-Baby-Body-Milk-",price:"₹40.00",p:40,popularity:3, date: "2020-01-04"},
      
    //   ] 
var pp=0;
var plen=0;
console.log(list)
    list.map(function(el,index){
var plen=list.length;
    
var counter=document.querySelector(".count")
counter.innerText=plen

    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "sidea");
      var div123 = document.createElement("div");
     div123.setAttribute("class", "div123")
      var img123=document.createElement("img");
img123.src=el.img;
img123.setAttribute("class","qimg123")
div123.append(img123)
var div34= document.createElement("div");

// var img2= document.createElement("img");
// img2.src=el.img
var div444=document.createElement("div");

var p111=document.createElement("p")
p111.setAttribute("class","styleg")
p111.style.color="black";
p111.innerText=el.name;
var h333=document.createElement("p")
h333.setAttribute("class","styleg")
h333.style.color="black";
h333.innerText= "₹ "+el.p
var buttonremove=document.createElement("button");
buttonremove.innerText="x";
buttonremove.addEventListener("click",function(){
  removefunc(el,index)
})
  


buttonremove.setAttribute("class","buttonremove")
buttonremove.style.color="black";
div444.append(p111,h333,buttonremove);

div34.append(div444)

maindiv.append(div123,div34)
document.querySelector("#containergrid").append(maindiv);
pp=pp+el.p
    });



    if(list.length!==0)
    {
var total=document.createElement("h5");
total.style.color="black";
total.innerText="Subtotal: ₹"+pp+"/-"

    document.querySelector(".ji").innerText=""
var button1=document.createElement("button");
button1.innerText="View Cart";

button1.setAttribute("class","button1");

button1.addEventListener("click",function(){
  window.location.href="addtocart.html"
})

var button2=document.createElement("button");
button2.setAttribute("class","button2");

button2.addEventListener("click",function(){
  window.location.href="checkout.html"
})
var fd=document.createElement("div")

fd.append(button1,button2);
fd.setAttribute("class","gridf")
button2.innerText="Checkout"
var lop3=document.querySelector(".lop");
lop3.innerText="₹"+pp+"/-"
    }
    document.querySelector("#containergrid").append(total,fd)


    function removefunc(elem,index) {
      console.log(elem, index);
   
   
list.splice(index,1)

      localStorage.setItem("wishlist", JSON.stringify(list));
      
      window.location.reload();

      }
// var list=JSON.parse(localStorage.getItem("wishlist"))
//     // var list=[
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/02/Himalaya-Babycare-Gift-Pack-Him-300x150.jpg",name:"Himalaya-Babycare-Gift-Pack",price:"₹40.00", p:40,popularity:2, date:"2020-01-05",discount:20},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Gentle-Baby-Soap-75gm-14388-2.jpgfilenameUTF-8Himalaya-Gentle-Baby-Soap-75gm-14388-2-300x185.jpg",name:"Himalaya-Gentle-Baby",price:"₹60.00",p:60,popularity:5, date: "2020-01-06",discount:10},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Gentle-Baby-Soap-125gm-14808-2.jpgfilenameUTF-8Himalaya-Gentle-Baby-Soap-125gm-14808-2-300x197.jpg",name:"Himalaya-Gentle-Baby-75gm",price:"₹90.00",p:90,popularity:1, date: "2020-02-07",latest:true},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Baby-Cream-23385-1.jpgfilenameUTF-8Himalaya-Baby-Cream-23385-1-300x647.jpg",name:"Himalaya-Baby",price:"₹40.00",p:40,popularity:3, date: "2020-02-04",latest:true},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Baby-Powder-14386-1.jpgfilenameUTF-8Himalaya-Baby-Powder-14386-1-300x867.jpg",name:"Himalaya-Baby",price:"₹40.00",p:40,popularity:5, date: "2020-01-02"},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2016/04/Himalaya-Gentle-Baby-Bath-17806-1.jpgfilenameUTF-8Himalaya-Gentle-Baby-Bath-17806-1-300x651.jpg",name:"Himalaya-Gentle-17806",price:"₹40.00",p:40,popularity:3, date: "2020-01-04"},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/05/Sebamed-Baby-Cleaning-Bar-100gm-300x300.jpg",name:"Sebamed-Baby-Cleaning-Bar",price:"₹40.00",p:40,popularity:5, date: "2020-01-02"},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/04/Peristaltic-Nipple-Small-0-3-Month-P-88020-300x300.jpg",name:"Peristaltic-Nipple-Small-0-3",price:"₹40.00", p:40,popularity:2, date:"2020-01-05"},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/04/Peristalic-Bottle-Kpp-R-L-P-88003-300x300.jpg",name:"Peristalic-Bottle-Kpp",price:"₹60.00",p:60,popularity:5, date: "2020-01-06"},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/04/Natural-Fit-Nipple-Shield-Large-P-26227-300x300.jpg",name:"Natural-Fit-Nipple-Shield-Large",price:"₹90.00",p:90,popularity:1, date: "2020-01-07"},
//     //   {img :"https://www.kheliyatoys.com/wp-content/uploads/2020/05/Sebamed-Baby-Body-Milk-400ml-300x300.jpg",name:"ebamed-Baby-Body-Milk-",price:"₹40.00",p:40,popularity:3, date: "2020-01-04"},
//       // ]
//     //   ]
// var pp=0;
// var plen=0;
// console.log(list)
//     list.map(function(el){
//     list.map(function(el,index){
// var plen=list.length;
// var counter=document.querySelector(".count")
// counter.innerText=plen
//     var maindiv = document.createElement("div");
//     maindiv.setAttribute("class", "sidea");
// var h333=document.createElement("p")
// h333.setAttribute("class","styleg")
// h333.style.color="black";
// h333.innerText= "₹ "+el.p
// div444.append(p111,h333)
// var buttonremove=document.createElement("button");
// buttonremove.innerText="x";
// buttonremove.addEventListener("click",function(){
//   removefunc(el,index)
// })
// buttonremove.setAttribute("class","buttonremove")
// buttonremove.style.color="black";
// div444.append(p111,h333,buttonremove);
// div34.append(div444)
// maindiv.append(div123,div34)
// button2.innerText="Checkout"
// var lop3=document.querySelector(".lop");
// lop3.innerText="₹"+pp+"/-"
//     }
//     document.querySelector("#containergrid").append(total,fd)
//     document.querySelector("#containergrid").append(total,fd)
//     function removefunc(elem,index) {
//       console.log(elem, index);
// list.splice(index,1)
//       localStorage.setItem("wishlist", JSON.stringify(list));
//       window.location.reload();
//       }