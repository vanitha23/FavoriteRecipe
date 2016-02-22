$(document).ready(function() {
	console.log("Script included!");
	$('div').click(function(){
		$('img').hide('slow');
	// });
	// 	$('div').click(function(){
	// 	$('img').show('slow');
 });
});

 $(document).ready(function(){
    $('.ingredientlist').click(function(){
        if($(this).is(':checked')){
            alert("its checked alright");
        }
    });
 });


 $(document).ready(function() {
   //var $li = $("ul li:nth-child(1)");
   	$('div').click(function() {
    $('li p').css("background-color","lightblue");
    });
});

//nth-child(1)
// $(document).ready(function(){
// 	$('div').dblclick(function(){
// 		$('.steps[1-11]').cancel("<strikeout>");
// 	});
// });

	//$('div').click(function(){
		//$('li1').parents("p").css("text-decoration", "line-through");
//li1').toggle("highlight");
		// $('#procedure').each(function(){
		// 	$('this').wrap("<strike>");
//});


//use wrap("<strike>") for procedure