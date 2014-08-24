/* Javascript Document */

 $(document).ready(function(){
 	console.log('doc ready');


 	/*GET IMAGE FROM SELECTED STYLE NO*/
	$('.btn_style').click(function(event){
		$('.btn_style').each(function(){
			if($(this).hasClass('active')){
				$(this).toggleClass('active');
			}
		});
		$(this).toggleClass('active');
		document.getElementById('style_img').src = 'img/style' + event.target.id + '.png';
	});


	/*CHANGE BACKGROUND COLOR FROM SELECTED COLOR*/
	$('.btn_color').click(function(){
		var color = $(this).css('background-color');
		$('#style_panel').css('background-color', color);
	})
});