$(function () {

	/**
     * Toggle the push menu and focus the search box using "/".
     */
    $(document).bind(
    	'keydown',
    	'/',
    	function(){
    		$('body').toggleClass('pushing');
    		$("input[name='filter_term']").focus();
    		return false;
    	}
    )
    
});
