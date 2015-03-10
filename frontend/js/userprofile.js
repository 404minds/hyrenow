var userprofilejs = function(userProfileHTML,headerHTML) {
	$('head').append(userProfileHTML);
	$('head').append(headerHTML);
	$("body").html($("#user_profile_base").html());
	$('#header_wrapper').html($("#default_header").html());
	  $(function() {
            $( "#datepicker-12" ).datepicker();
         });
}    
