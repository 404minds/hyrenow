console.log("eduviewloadstarts");
var userView = {};
userView.init = function() {
	singleEduView = Backbone.View.extend({

		tagName:'div',
		template: _.template($("#eduElement").html()),

		render: function () {
			var eduTemplate = this.template(this.model.toJSON());
			this.$el.html(eduTemplate);
			return this;
		}
	});

	allEduView = Backbone.View.extend({
		tagName: 'div',
		initialize: function(){
			this.listenTo(this.collection, 'add', this.render);
			this.listenTo(this.collection, 'remove', this.render);
			this.listenTo(this.collection, 'change', this.render);
		},
		clear: function(){
		},
		render: function(){
			this.clear();
			this.$el.empty();
			this.collection.each(this.addEdu,this);

			$("#work-edu-saved").html(this.el);
			return this;
		},
		addEdu: function(edu){
			var eduView = new singleEduView({model : edu});
			this.$el.append(eduView.render().el);
		}
	});
	
}

console.log("eduviewloadcomplete");
