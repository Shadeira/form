function dollars(n) {
   n=eval(n); 
   n=Math.round(n*100)/100; 
   return (n == Math.round(n)) ? n += ".00" : (n*10 == Math.round(n*10)) ? n +="0" : n; 
}

  function total_price() {
  var s1=eval(document.order.sub1.value); 
  var s2=eval(document.order.sub2.value); 
  var s3=eval(document.order.sub3.value); 
  document.getElementById('total').innerHTML="$ " + (s1+s2+s3);
 
}
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    if (elementId='quantity' && elt.selectedIndex==0 ){
        return 0
    }
    return elt.options[elt.selectedIndex].text;
    
}


function order_price() {
  var item_index=document.order.product.selectedIndex;
  var item_value=document.order.product.options[item_index].value;
  var qty_ordered=document.order.qty.selectedIndex; 
   document.order.sub1.value=dollars(item_value*qty_ordered); 
   
   document.order.sub2.value=dollars(item_value*qty_ordered*0.07);

   total_price();
   document.getElementById('itemName').innerHTML= getSelectedText('product')+" x " + getSelectedText('quantity'); 

 
}
function shipping_price(field) {
   document.order.sub3.value=dollars(field.value); 
   total_price();
}
function copy_shipping() {
   if (document.order.billcb.checked) {
      document.order.bname.value=document.order.sname.value;
      document.order.bstreet.value=document.order.sstreet.value;
      document.order.bcity.value=document.order.scity.value;
      document.order.bstate.selectedIndex=document.order.sstate.selectedIndex;
      document.order.bzip.value=document.order.szip.value;
   }
}

///////////////////////////////////

function checkform() {
 
   var product_ok=true;
   if (document.order.sub1.value == "0.00") product_ok=false;
   if (document.order.sub2.value == "0.00") product_ok=false;
   if (document.order.sub3.value == "0.00") product_ok=false;
  
  
   var shipping_ok=true;
   if (document.order.sname.value == "") shipping_ok=false;
   if (document.order.sstreet.value == "") shipping_ok=false;
   if (document.order.scity.value == "") shipping_ok=false;
   if (document.order.szip.value == "") shipping_ok=false;

  var payment_ok=true;
   if (document.order.cname.value == "") payment_ok=false;
   if (document.order.cnumber.value == "") payment_ok=false;
 

 var form_ok = (shipping_ok && payment_ok && product_ok);
if (form_ok) {
       alert("Order submitted");
       
      
   } else {
     alert("You are missing something!!");
      
   }
 return form_ok;
   
}
