singleEdu = Backbone.Model.extend({
	defaults: {
		id:undefined,
		from_year:undefined,
		from_month:undefined,
		to_year:undefined,
		to_month:undefined,
		organization:undefined,
		course:undefined,
		domain:undefined,
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
	organization:'IIIT-A',
	course:'B.Tech',
	domain:'I.T',
	location:'Allahabad',
	description:'Hakkunamatada',

 });

 eduCollection = Backbone.Collection.extend({
 	model:singleEdu
 });