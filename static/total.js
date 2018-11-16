
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
    quantityRow.children('.qtyvalue').val(quantity + 1);
	
    updatequantityandprice(actiontype,productRow);
  });

  $('.quantity-left-minus').click(function(e) {
    e.preventDefault();
    var quantityRow = $(this).parent();
	var productRow= $(this).parent().parent();
    actiontype = "minus";
    var quantity = parseInt(quantityRow.children('.qtyvalue').val());
    if (quantity > 0) {
      quantityRow.children('.qtyvalue').val(quantity - 1);
      updatequantityandprice(actiontype,productRow);
    }
  });

  function updatequantityandprice(actiontype,productRow) {
    var quantity = parseInt($('#totalquantity').text());
	//var productprice = parseInt(productRow.children('.item').children('.itemprice').text());
	var productprice = parseInt(productRow.find('.itemprice').text());
    if (actiontype == "plus") {
      quantity = quantity + 1;
      $('#totalquantity').text(quantity);
	  totalprice=productprice;
	  $('#totalsum').html(function(){
        return ("<span style='font-size:17px;font-family:sans-serif'>&#x20b9; </span>" + productprice);
		});
    } else {
      quantity = quantity - 1;
      $('#totalquantity').text(quantity);
	  totalprice=productprice;
      $('#totalsum').html(function(){
        return ("<span style='font-size:17px;font-family:sans-serif'>&#x20b9; </span>" + productprice);
		});
	  
    }
  }
});