from app import db
class PrefLoc (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	pref_loc = db.Column(db.Integer, db.ForeignKey('skill.id'))
	__table_args__ = (db.UniqueConstraint('user_id', 'pref_loc', name='uix_upl1'),)
	def __repr__(self):
		return '<Location %r>' %(self.pref_loc)
