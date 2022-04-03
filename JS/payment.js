document.querySelector(".sk-checkout-form").addEventListener("submit", myPurchase);

// var getdetails = [];
function myPurchase() {
  event.preventDefault();
  
 
    var tname= document.querySelector("#sk-name1").value;
    var cardNo= document.querySelector("#sk-name2").value;
    var date= document.querySelector("#sk-name3").value;
    var cvv= document.querySelector("#sk-name4").value;

    //console.log(cardNo.length, cvv.length)

  //   var getObj = {
  //      cname : tname,
  //      cardnum:cardNo,
  //      tdate:date,
  //      cvvv:cvv,
  // };
  if(cardNo.length == "16" && cvv.length == "3"){
    alert("Payment done")
    location.href = "orderconfi.html"
  }
  else{
    alert("Please fill the correct details")
  }
  // alert()
  //  window.location.href = "www.google.com"
//   getdetails.push(getObj);
//   console.log(getdetails)
}
