from app import db
class Skill (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	skill_name = db.Column(db.String(120))
	skill_value = db.Column(db.Float)
	user_id = db.Column(db.Integer,db.ForeignKey('user.id'))
	__table_args__ = (db.UniqueConstraint('skill_name', 'user_id', name='uix_snu1'),)
	def __repr__(self):
		return '<Skill %r>' %(self.skill_name)
