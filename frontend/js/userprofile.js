console.log("userprofileloadstarts");
var userprofilejs = function(userProfileHTML,headerHTML) {
	$('head').append(userProfileHTML);
	$('head').append(headerHTML);
	$("body").html($("#user_profile_base").html());
	$('#header_wrapper').html($("#default_header").html());
	
	for (i=1;i<=31;++i){
		value = i<10 ? "0" + i.toString() : i.toString()  
    	$('[data-type="day-dropdown"]').append($("<option></option>").attr("value",value).text(value));
	}
	for (i=2005;i>=1901;--i){
    	$('[data-type="year-dropdown"]').append($("<option></option>").attr("value",i.toString()).text(i.toString()));
	}

	monthArray = { "jan" : "January", "feb" : "February","mar" : "March", "apr" : "April",
					"may" : "May", "jun" : "June", "jul" : "July", "aug" : "August" ,
				    "sep" : "September", "oct" : "October", "nov" : "November", "dec" : "December"};

	$.each(monthArray, function(key, value) {   
     $('[data-type="month-dropdown"]')
         .append($("<option></option>")
         .attr("value",key)
         .text(value)); 
	});
	userView.init();
	eduGroup = new eduCollection(allEdu);
	eduGroupView = new allEduView({collection : eduGroup})
	eduGroupView.render();
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

	$("#edu-form").on("submit", function(e){
            e.stopPropagation();
            e.preventDefault();
            user_domain = ($(this).find('[data-type="domain"]').val());
            user_location = ($(this).find('[data-type="location"]').val());
            course = ($(this).find('[data-type="course"]').val());
            organization = ($(this).find('[data-type="organization"]').val());
            description = ($(this).find('[data-type="description"]').val());
            
            from_month = ($(this).find('#duration-from [data-type="month-dropdown"]').val());
            from_year = ($(this).find('#duration-from [data-type="year-dropdown"]').val());

            to_month = ($(this).find('#duration-to [data-type="month-dropdown"]').val());
            to_year = ($(this).find('#duration-to [data-type="year-dropdown"]').val());

           	console.log("here");
            eduGroup = new eduCollection(allEdu);
            eduGroupView = new allEduView({collection : eduGroup})
			new_edu_row_html = '<div class="row">\
				<div class="large-6 columns year-details">\
					<div class="year-range">'+ from_year + '-' + to_year + '</div>\
					<div class="duration"> ' + (to_year-from_year).toString() + ' years</div>\
				</div>\
				<div class="large-6 columns other-details">\
					<div class="organization">' + organization + ',' + user_location + '</div>\
					<div class="domain">'+user_domain+'</div>\
					<div class="description">' + description + '</div>\
				</div>\
			</div>'
			$("#work-edu-saved").append(new_edu_row_html);
            // utils.ajax({url:"/signup",
            //     request_data:{name:name,email:email,password:password},
            //     type:"POST"
            // });
            //  app_router.navigate( "user/profile",{trigger: true});
    });
}    

console.log("userprofileloadcomplete");
