$(document).ready(function() {

loadmenuitems();
$('#vegcb').click(function(e) {
        if ($(this).is(':checked')) {
				hidenonvegitems();
        }else{
				showallitems();
		}
});

function hidenonvegitems(){
	var menuobj = ["Soups","Starters","Rice","Indian","DrinksandDesserts"];
	var i;
	for (i in menuobj) {
	var menuobjlist = "#"+menuobj[i]+"list";
	var menulist = $(menuobjlist);
	menulist.children('.nonvegitem').hide();
	}
}

function showallitems(){
	var menuobj = ["Soups","Starters","Rice","Indian","DrinksandDesserts"];
	var i;
	for (i in menuobj) {
	var menuobjlist = "#"+menuobj[i]+"list";
	var menulist = $(menuobjlist);
	menulist.children('.nonvegitem').show();
	}
}

function loadmenuitems(){
	
var myObj, i, x = "";
var vegtxt1="<div class='vegitem container-fluid'><div class='row'><div class='item col-8 bg-light'>";
var nonvegtxt1="<div class='nonvegitem container-fluid'><div class='row'><div class='item col-8 bg-light'>";
var txt2="<h6 style='font-size:11px ; display:inline;' class='itemname'>";
var txt3="</h6><br><span style='font-size:10px;font-family:sans-serif' class='pl-4'>&#x20b9;</span><h6 style='font-size:10px;display:inline;' class='itemprice'>";		
var txt4="</h6></div><div class='col' style='display:inline;margin-right:-10px; margin-left: -10px;'><button type='button' class='quantity-left-minus btn-sm btn-danger'><i class='fas fa-minus' style='font-size:10px;'></i></button><input type='text' class='qtyvalue form-control-sm' value='0' min='0' max='20' style='width: 33px ; height: 25px;'><button type='button' class='quantity-right-plus btn-sm btn-success '><i class='fas fa-plus' style='font-size:10px;'></i></button></div></div></div>";
var vegtype="<img src='static/vfs.png'>";
var nonvegtype="<img src='static/nvfs.png'>";
myObj = [{"Group":"Soups","Item":"Veg Monchow Soup","Price":"100","Type":"Veg"},{"Group":"Soups","Item":"Veg Sweet & Sour","Price":"100","Type":"Veg"},{"Group":"Soups","Item":"Chicken Monchow Soup","Price":"120","Type":"NonVeg"},{"Group":"Soups","Item":"Chicken Sweet & Sour","Price":"120","Type":"NonVeg"},{"Group":"Starters","Item":"Veg Monchow Soup","Price":"100","Type":"Veg"},{"Group":"Starters","Item":"Veg Sweet & Sour","Price":"100","Type":"Veg"},{"Group":"Starters","Item":"Chicken Monchow Soup","Price":"120","Type":"NonVeg"},{"Group":"Starters","Item":"Chicken Sweet & Sour","Price":"120","Type":"NonVeg"}];

for (i in myObj) {
	
	var grouplist = "#"+myObj[i].Group+"list";
	var menulist = $(grouplist);
	console.log(menulist);	
	if(myObj[i].Type == "NonVeg"){
	x=nonvegtxt1+nonvegtype+txt2+myObj[i].Item+txt3+myObj[i].Price+txt4;
	} 
	else {
	x=vegtxt1+vegtype+txt2+myObj[i].Item+txt3+myObj[i].Price+txt4;
	}
	menulist.append(x);
}
}
});