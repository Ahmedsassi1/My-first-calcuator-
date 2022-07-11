$("#title").css("color","white")
   .css("font-size","50px")
   .css("margin-left","80px")
   .css("font-family","Arial")
$("body")
   .css("background-image","url(" + "https://cdn.wallpapersafari.com/77/68/36oMOg.jpg" + ")")
$("label")
   .css("color","white")
$("button")
   .css("display","inline-block")
   .css("padding","6px 12px")
   .css("font-size","35px")
   .hover()


$("#plus").on("click", function add (){
	var a = parseInt($("#a").val());
	var b = parseInt($("#b").val());
   if (typeof(a) === 'number'&& typeof(b) ==='number')
	{$("#result").html(a+b);}
   else {$("#result").html('choose a number please');}
	});

$("#minus").on("click", function substract (){
   {$("#result").html(parseInt($("#a").val())-parseInt($("#b").val()));}
   });

$("#multiply").on("click", function multiplication (){
   {$("#result").html(parseInt($("#a").val())*parseInt($("#b").val()));}
   });

$("#division").on("click", function divise (){
   {$("#result").html(parseInt($("#a").val())/parseInt($("#b").val()));}
   });

$("#modulo").on("click", function rest (){
   {$("#result").html(parseInt($("#a").val())%parseInt($("#b").val()));}
   });

$("#percent").on("click", function pourcentage (){
   {$("#result").html(parseInt($("#a").val())/parseInt($("#b").val())*100);}
   });

$("#pow").on("click", function power (){
   {$("#result").html(Math.pow(parseInt($("#a").val()),parseInt($("#b").val())));}
   });