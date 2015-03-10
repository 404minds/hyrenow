from app import db
class Misc (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	one_liner = db.Column(db.String(240))
	def __repr__(self):
		return '<One Liner %r>' %(self.one_liner)
