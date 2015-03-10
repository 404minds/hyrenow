from app import db
class Edu (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	col_name = db.Column(db.String(120), index = True)
	desc = db.Column(db.String(240))
	degree = db.Column(db.String(240))
	start_date = db.Column(db.String(64), index = False)
	end_date = db.Column(db.String(64), index = False)
	__table_args__ = (db.UniqueConstraint('user_id', 'col_name','degree', name='uix_ucd1'),)
	
	def __repr__(self):
		return '<College %r>' %(self.col_name)
