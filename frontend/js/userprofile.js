var userprofilejs = function(userProfileHTML,headerHTML) {
	$('head').append(userProfileHTML);
	$('head').append(headerHTML);
	$("body").html($("#user_profile_base").html());
	$('#header_wrapper').html($("#default_header").html());
	
	for (i=1;i<=31;++i){
		value = i<10 ? "0" + i.toString() : i.toString()  
    	$('[data-type="day-dropdown"]').append($("<option></option>").attr("value",value).text(value));
	}
	for (i=2015;i>=1901;--i){
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

	workGroup = new workCollection(allWork);
	workGroupView = new allWorkView({collection : workGroup})
	workGroupView.render();

	projectGroup = new projectCollection(allProject);
	projectGroupView = new allProjectView({collection : projectGroup})
	projectGroupView.render();

	$("#skill_form").delegate('#skill_box', 'keypress', function(e) {
	    if (e.which === 13) { 

	        e.preventDefault(); 
	        $("#skill_form .tag-wrapper").append('<div class="tag"><span>' + this.value + '</span><i class="fa fa-close"></i></div>')
	        this.value = "";
	    }
	});

	$(".tag-wrapper").delegate('i', 'click', function(e) {
	    $(this).parent().remove();
	});

	$("#job_pref_form").delegate('#current_location_box','keypress',function(e){
		if (e.which === 13) { 
	        e.preventDefault(); 
	        $("#current_location_box").parent().find(".tag-wrapper").html('<div class="tag"><span>' + this.value + '</span><i class="fa fa-close"></i></div>')
	        this.value = "";
	    }
	});

	$("#job_pref_form").delegate('#desired_location_box','keypress',function(e){
		if (e.which === 13) { 
	        e.preventDefault(); 
	        $("#desired_location_box").parent().find(".tag-wrapper").append('<div class="tag"><span>' + this.value + '</span><i class="fa fa-close"></i></div>')
	        this.value = "";
	    }
	});

	$("#edu-form").on("submit", function(e){
            e.stopPropagation();
            e.preventDefault();
            edu_field = ($(this).find('#edu-field').val());
            edu_location = ($(this).find('#edu-location').val());
            edu_course = ($(this).find('#edu-course').val());
            edu_college = ($(this).find('#edu-college').val());
            edu_description = ($(this).find('#edu-description').val());
            
            from_month = ($(this).find('#duration-from [data-type="month-dropdown"]').val());
            from_year = ($(this).find('#duration-from [data-type="year-dropdown"]').val());

            to_month = ($(this).find('#duration-to [data-type="month-dropdown"]').val());
            to_year = ($(this).find('#duration-to [data-type="year-dropdown"]').val());

           	new_edu_row = new singleEdu({
				id:allEdu.length,
				from_year:from_year,
				from_month:from_month,
				to_year:to_year,
				to_month:to_month,
				college:edu_college,
				course:edu_course,
				field:edu_field,
				location:edu_location,
				description:edu_description,

			 });

            allEdu.push(new_edu_row);
            eduGroup.add(new_edu_row);
    });

	$("#work-form").on("submit", function(e){
		console.log("here");
	            e.stopPropagation();
	            e.preventDefault();
	            work_company = ($(this).find('#work-company').val());
	            work_designation = ($(this).find('#work-designation').val());
	            work_description = ($(this).find('#work-description').val());
	            
	            from_month = ($(this).find('#duration-from [data-type="month-dropdown"]').val());
	            from_year = ($(this).find('#duration-from [data-type="year-dropdown"]').val());

	            to_month = ($(this).find('#duration-to [data-type="month-dropdown"]').val());
	            to_year = ($(this).find('#duration-to [data-type="year-dropdown"]').val());

	           	new_work_row = new singleWork({
					id:allWork.length+1,
					from_year:from_year,
					from_month:from_month,
					to_year:to_year,
					to_month:to_month,
					company:work_company,
					designation:work_designation,
					description:work_description,

				 });
	           	console.log(new_work_row.toJSON());
	            allWork.push(new_work_row);
	            workGroup.add(new_work_row);
	    });

	$("#project-form").on("submit", function(e){
				console.log("here");
	            e.stopPropagation();
	            e.preventDefault();
	            project_name = ($(this).find('#project-name').val());
	            project_link = ($(this).find('#project-link').val());
	            project_description = ($(this).find('#project-description').val());
	            
	            from_month = ($(this).find('#duration-from [data-type="month-dropdown"]').val());
	            from_year = ($(this).find('#duration-from [data-type="year-dropdown"]').val());

	            to_month = ($(this).find('#duration-to [data-type="month-dropdown"]').val());
	            to_year = ($(this).find('#duration-to [data-type="year-dropdown"]').val());

	           	new_project_row = new singleWork({
					id:allProject.length+1,
					from_year:from_year,
					from_month:from_month,
					to_year:to_year,
					to_month:to_month,
					name:project_name,
					link:project_link,
					description:project_description,

				 });
	            allProject.push(new_project_row);
	            projectGroup.add(new_project_row);
	    });

	$("#saved-onelnr-wrapper").on('click',function(){
			var replaceWith = $('#editOnelnrElement');      
	        var elem = $(this);
	        elem.hide();

	        $("#editable-onelnr").html(replaceWith.html());
	        $("#editable-onelnr").find("#onelnr-input").focus();

	        var words_written_elem = $("#desc-words #desc-words-written");
	        var saved_onelnr_elem = $(this).find("#saved-onelnr");
	        
	        $("#editable-onelnr input").on( "keyup", function(event) {
	        	words_written_elem.html($(this).val().length);
	    	});
	        $("#editable-onelnr #desc-cancel").on( "click", function(event) {
	        	$("#editable-onelnr").empty();
	        	elem.show();
	    	});
	    	$("#editable-onelnr #desc-save").on( "click", function(event) {
	     		//ajax call to save description
	        	var onelnr_text = $("#editable-onelnr input").val();
	        	if (onelnr_text.length == 0){
	        		onelnr_text = "Describe Yourself..";
	        	}

	        	saved_onelnr_elem.html(onelnr_text);
	        	$("#editable-onelnr").empty();
	        	elem.show();
	    	});
	});

	$(".profile-section").on('click','#add-form-button',function(){
		$(this).parent().parent().find("form").show();
	});
}    
