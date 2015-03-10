from app import db
class Social (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	facebook = db.Column(db.String(120))
	twitter = db.Column(db.String(120))
	linkedin = db.Column(db.String(120))
	github = db.Column(db.String(120))
	def __repr__(self):
		return '<Facebook %r>' %(self.facebook)
