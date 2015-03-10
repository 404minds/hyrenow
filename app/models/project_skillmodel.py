from app import db
class ProjectSkill (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
	skill_id = db.Column(db.Integer, db.ForeignKey('skill.id'))
	skill_value = db.Column(db.Float)
	__table_args__ = (db.UniqueConstraint('skill_id', 'project_id', name='uix_sipi1'),)
	def __repr__(self):
		return '<Project %r>' %(self.project_name)
