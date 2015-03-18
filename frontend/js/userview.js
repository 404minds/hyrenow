var userView = {};
userView.init = function() {
	singleEduView = Backbone.View.extend({

		tagName:'div',
		className: 'row',
		template: _.template($("#eduElement").html()),

		render: function () {
			var eduTemplate = this.template(this.model.toJSON());
			this.$el.html(eduTemplate);
			return this;
		}
	});

	allEduView = Backbone.View.extend({
		tagName: 'div',
		className:'large-12 columns work-edu-saved',
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
			console.log(this.el);
			$("#edu-saved").html(this.el);
			return this;
		},
		addEdu: function(edu){
			var eduView = new singleEduView({model : edu});
			this.$el.append(eduView.render().el);
		}
	});


	singleWorkView = Backbone.View.extend({

		tagName:'div',
		className: 'row',
		template: _.template($("#workElement").html()),

		render: function () {
			var workTemplate = this.template(this.model.toJSON());
			this.$el.html(workTemplate);
			return this;
		}
	});

	allWorkView = Backbone.View.extend({
		tagName: 'div',
		className:'large-12 columns work-edu-saved',
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
			this.collection.each(this.addWork,this);
			console.log(this.el);
			$("#work-saved").html(this.el);
			return this;
		},
		addWork: function(work){
			var workView = new singleWorkView({model : work});
			this.$el.append(workView.render().el);
		}
	});

	singleProjectView = Backbone.View.extend({

		tagName:'div',
		className: 'row',
		template: _.template($("#projectElement").html()),

		render: function () {
			var projectTemplate = this.template(this.model.toJSON());
			this.$el.html(projectTemplate);
			return this;
		}
	});

	allProjectView = Backbone.View.extend({
		tagName: 'div',
		className:'large-12 columns project-saved',
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
			this.collection.each(this.addProject,this);
			console.log(this.el);
			$("#project-saved-wrapper").html(this.el);
			return this;
		},
		addProject: function(project){
			var projectView = new singleProjectView({model : project});
			this.$el.append(projectView.render().el);
		}
	});	
}

