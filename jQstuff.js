$(document).ready(function(){
  $("h1").click(function(){
    $("p").toggle();
  });
  $("#hide").click(function(){
		$("p").hide();
	});
});
