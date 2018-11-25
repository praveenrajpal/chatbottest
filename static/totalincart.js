
$(document).ready(function() {
  var quantitiy = 0;
  var actiontype = "";
  var totalprice = 0;
  $('.quantity-right-plus').click(function(e) {
    e.preventDefault();
    var quantityRow = $(this).parent();
	var productRow= $(this).parent().parent();
    actiontype = "plus";
    var quantity = parseInt(quantityRow.children('.qtyvalue').val());
	var productprice = parseInt(productRow.children('.item').children('.itemprice').text());
	quantity = quantity+1;
    quantityRow.children('.qtyvalue').val(quantity);
    updatequantityandprice(actiontype,productprice);
	updatecartlist();
  });

  $('.quantity-left-minus').click(function(e) {
    e.preventDefault();
    var quantityRow = $(this).parent();
	var productRow= $(this).parent().parent();
    actiontype = "minus";
    var quantity = parseInt(quantityRow.children('.qtyvalue').val());
	var productprice = parseInt(productRow.children('.item').children('.itemprice').text());
    if (quantity > 0) {
	  quantity = quantity-1;
      quantityRow.children('.qtyvalue').val(quantity);
      updatequantityandprice(actiontype,productprice);
	  updatecartlist();
    }
  });

  function updatequantityandprice(actiontype,productprice) {
    var totalquantity = parseInt($('#totalquantity').text());
    if (actiontype == "plus") {
      totalquantity = totalquantity + 1;
      $('#totalquantity').text(totalquantity);
	  totalprice=totalprice+productprice;
	  $('#totalsum').html(function(){
        return ("<span style='font-size:17px;font-family:sans-serif'>&#x20b9; </span>" + totalprice);
		});
    } else {
      totalquantity = totalquantity - 1;
      $('#totalquantity').text(totalquantity);
	   totalprice=totalprice-productprice;
      $('#totalsum').html(function(){
        return ("<span style='font-size:17px;font-family:sans-serif'>&#x20b9; </span>" + totalprice);
		});
	  
    }
  }
    function updatecartlist() {	
		$("#cartlist").children('.vegitem').remove();
		$("#cartlist").children('.nonvegitem').remove();
		$("#cartlist").children('#emptycart').remove();
		var empty = 0;
		$('.qtyvalue').each(function(){
			if ($(this).val() > 0 )  {			
				var $itemtogoincart= $(this).parent().parent().parent();
				var $clone = $itemtogoincart.clone();
				$clone.prependTo('#cartlist');
				empty=1;
			} 
		});
		if(empty==0){
			$('#cartlist').prepend("<div id='emptycart' class='card-body'>Your cart is empty <i class='far fa-smile' style='font-size:20px;'></i></div>");
			$('#checkout').prop('disabled', true);
		} else {
		$('#checkout').prop('disabled', false);
		}
		$("#cartlist").children().find('.btn-sm').remove();
		$('#cartlist').children().find('.qtyvalue').prop('disabled', true);	
		}
	$("#checkout").click(function(){
    // alert('Lo Aa gya');
    var x=0;
    var y=0;
    var z=0;
    var itnm=[];
    var itqt=[];
    var itemline={};
    var itemlinejson={};
    var order=[];
    var orderjson="";
    $("#cartlist").find('.itemname').each(function(){
      itnm[y]=$(this).text();
      y = y+1;
    });

    $("#cartlist").find('.qtyvalue').each(function(){      
      itqt[x]=$(this).val();
      x = x+1;
      });
    for (z = 0; z < x; z++){
      itemline["ItemName"]=itnm[0] ;
      itemline["ItemQty"]=itqt[0];
      itemlinejson=JSON.stringify(itemline);
      order[z]=itemlinejson;     
    }
    for (z = 0; z < x; z++){

      orderjson=orderjson+order[z];
      if(z<(x-1)){
      orderjson=orderjson+",";
      }
             

    }
    var finaljson = "{"+"\"Name\": \""+$('#customername').val()+"\","+"\"Mobile\":\""+$('#mobile').val()+"\","+"\"Address\":\""+$('#address').val()+"\","+"\"OrderedItems\": ["+orderjson+"]}";
    console.log(finaljson);  
  });
});
