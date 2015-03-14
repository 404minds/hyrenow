var userprofilejs = function(userProfileHTML,headerHTML) {
	$('head').append(userProfileHTML);
	$('head').append(headerHTML);
	$("body").html($("#user_profile_base").html());
	$('#header_wrapper').html($("#default_header").html());
	
	for (i=1;i<=31;++i){
		value = i<10 ? "0" + i.toString() : i.toString()  
    	$('.day-dropdown').append($("<option></option>").attr("value",value).text(value));
	}
	for (i=2005;i>=1901;--i){
    	$('.year-dropdown').append($("<option></option>").attr("value",i.toString()).text(i.toString()));
	}

	monthArray = { "jan" : "January", "feb" : "February","mar" : "March", "apr" : "April",
					"may" : "May", "jun" : "June", "jul" : "July", "aug" : "August" ,
				    "sep" : "September", "oct" : "October", "nov" : "November", "dec" : "December"};

	$.each(monthArray, function(key, value) {   
     $('.month-dropdown')
         .append($("<option></option>")
         .attr("value",key)
         .text(value)); 
	});

	$("#skill_form").delegate('#skill_box', 'keypress', function(e) {
	    if (e.which === 13) { // if is enter
	        e.preventDefault(); // don't submit form
	        $("#skill_form .tag-wrapper").append('<div class="tag"><span>' + this.value + '</span><i class="fa fa-close"></i></div>')
	        this.value = "";
	        // do what you want here
	    }
	});

	$(".tag-wrapper").delegate('i', 'click', function(e) {
	    $(this).parent().remove();
	});

	$("#job_pref_form").delegate('#current_location_box','keypress',function(e){
		if (e.which === 13) { // if is enter
	        e.preventDefault(); // don't submit form
	        $("#current_location_box").parent().find(".tag-wrapper").html('<div class="tag"><span>' + this.value + '</span><i class="fa fa-close"></i></div>')
	        this.value = "";
	        // do what you want here
	    }
	});

	$("#job_pref_form").delegate('#desired_location_box','keypress',function(e){
		if (e.which === 13) { // if is enter
	        e.preventDefault(); // don't submit form
	        $("#desired_location_box").parent().find(".tag-wrapper").append('<div class="tag"><span>' + this.value + '</span><i class="fa fa-close"></i></div>')
	        this.value = "";
	        // do what you want here
	    }
	});
}    

