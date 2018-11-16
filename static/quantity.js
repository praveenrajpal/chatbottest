$(document).ready(function(){
var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
		var quantityRow = $(this).parent();
        var quantity = parseInt(quantityRow.children('.qtyvalue').val());
        
        // If is not undefined
            
            quantityRow.children('.qtyvalue').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
		var quantityRow = $(this).parent();
        var quantity = parseInt(quantityRow.children('.qtyvalue').val());

            if(quantity>0){
            quantityRow.children('.qtyvalue').val(quantity - 1);
            }
    });
    
});