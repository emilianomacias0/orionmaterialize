Template.ApplicationLayout.events({
	'mousemove':function(evt){

		// mouseX = e.pageX;
  //   	mouseY = e.pageY;
  $("#x").html(evt.clientX);
  $("#y").html(evt.clientY);
    $("#caja").css({"left":(evt.clientX*.01)+"px","top":(evt.clientY*.01)+"px"});
	}
})