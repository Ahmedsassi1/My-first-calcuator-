$("#title").css("color","white")
   .css("font-size","50px")
   .css("margin-left","100px")
   .css("font-family","Arial")
$("body")
   .css("background-image","url(" + "https://cdn.wallpapersafari.com/77/68/36oMOg.jpg" + ")")
$("label")
   .css("color","white")
$("button")
   .css("display","inline-block")
   .css("padding","6px 12px")
   .css("font-size","14px")
   .hover()
$("#result").css("color","white")

$("#plus").on("click", function add (){ 
	var a = parseInt($("#a").val());
	var b = parseInt($("#b").val());
	$("#result").html(a+b);
	});


