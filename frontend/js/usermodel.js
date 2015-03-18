singleEdu = Backbone.Model.extend({
	defaults: {
		id:undefined,
		from_year:undefined,
		from_month:undefined,
		to_year:undefined,
		to_month:undefined,
		college:undefined,
		course:undefined,
		field:undefined,
		location:undefined,
		description:undefined,
	}
});
 
 allEdu = [];
 allEdu[0] = new singleEdu({
	id:1,
	from_year:1991,
	from_month:'jan',
	to_year:2005,
	to_month:'feb',
	college:'IIIT-A',
	course:'B.Tech',
	field:'I.T',
	location:'Allahabad',
	description:'Hakkunamatada',

 });

 eduCollection = Backbone.Collection.extend({
 	model:singleEdu
 });

 singleWork = Backbone.Model.extend({
	defaults: {
		id:undefined,
		from_year:undefined,
		from_month:undefined,
		to_year:undefined,
		to_month:undefined,
		company:undefined,
		designation:undefined,
		description:undefined,
	}
});
 
 allWork = [];
 allWork[0] = new singleWork({
	id:1,
	from_year:1991,
	from_month:'jan',
	to_year:2005,
	to_month:'feb',
	company:'Grexit, Inc.',
	designation:'Software Engineer',
	description:'Ek aur Description',

 });

 workCollection = Backbone.Collection.extend({
 	model:singleWork
 });

 singleProject = Backbone.Model.extend({
	defaults: {
		id:undefined,
		from_year:undefined,
		from_month:undefined,
		to_year:undefined,
		to_month:undefined,
		name:undefined,
		link:undefined,
		description:undefined,
	}
});
 
 allProject = [];
 allProject[0] = new singleProject({
	id:1,
	from_year:1991,
	from_month:'jan',
	to_year:2005,
	to_month:'feb',
	name:'Firebase Replica',
	link:'http://wikasta.com',
	description:'This was actually a replica of firebase.This was actually a replica of firebase.This was actually a replica of firebase.This was actually a replica of firebase.This was actually a replica of firebase.',

 });

 projectCollection = Backbone.Collection.extend({
 	model:singleProject
 });