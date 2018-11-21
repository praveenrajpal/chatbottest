
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
		$("#cartlist").children().remove();
		var empty = 0;
		$('.qtyvalue').each(function(){
			if ($(this).val() > 0 )  {			
				var $itemtogoincart= $(this).parent().parent().parent();
				var $clone = $itemtogoincart.clone();
				$clone.appendTo('#cartlist');
				empty=1;
			} 
		});
		if(empty==0){
			$('#cartlist').append("<div class='card-body'>Your cart is empty <i class='far fa-smile' style='font-size:20px;'></i></div>");
		}
		$("#cartlist").children().find('.btn-sm').remove();
		$('#cartlist').children().find('.qtyvalue').prop('disabled', true);
		var checkouthtml = "<div class='container-fluid'><div class='row'><div class='col' style='display:inline;margin-right:-10px; margin-left: -10px;'><button id='checkout' type='button' class='btn btn-info '>Checkout <i class='fas fa-shopping-cart' style='font-size:10px;'></i></button></div></div></div>";
		$('#cartlist').append(checkouthtml);
		if(empty==0){
			$('#cartlist').children().find('#checkout').prop('disabled', true);
		}		
		}
		
});
