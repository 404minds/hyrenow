from app import db
class Project (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	project_name = db.Column(db.String(120), index = True)
	desc = db.Column(db.String(240))
	link = db.Column(db.String(240))
	start_date = db.Column(db.String(64), index = False)
	end_date = db.Column(db.String(64), index = False)
	
	def __repr__(self):
		return '<Project %r>' %(self.project_name)
