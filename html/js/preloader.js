$(document).ready(function(){
    
    $('main').hide();

    $(window).on({
    	load: function(){
    		$('.cssload-container-general').hide();
    		$('main').show();
    	}
    })

})