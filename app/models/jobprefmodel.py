from app import db
class JobPref (db.Model):
	id = db.Column(db.Integer, primary_key = True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	current_location = db.Column(db.String(120))
	current_ctc = db.Column(db.Integer) #in rupees
	expected_ctc = db.Column(db.Integer) #in rupees
	notice_period = db.Column(db.Integer) #in days
	def __repr__(self):
		return '<Current Location %r>' %(self.current_location)
