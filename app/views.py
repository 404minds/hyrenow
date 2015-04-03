from flask import render_template, flash, redirect,jsonify,request,session
from app import app,db
from models.usermodel import User
from models.edumodel import Edu
from .forms import LoginForm
@app.route('/')
@app.route('/index')
def index():
	session['key'] = 'value'
	return jsonify(username=session['key'],
                   email="kshitij.mittal01@gmail.com",
                   id="7")


@app.route('/signup', methods=['POST'])
def login():
	name=request.json['name']
	email=request.json['email']
	password=request.json['password']
	
	u = User(name=name,
 	        email=email,
 	        password=password)

	db.session.add(u)
	db.session.commit()
	return jsonify(name=name,
                   email=email,
                   password=password)


@app.route('/addedu', methods=['POST'])
def addedu():
	user_id=request.json['user_id']
	col_name=request.json['col_name']
	desc=request.json['desc']
	degree=request.json['degree']
	start_date=request.json['start_date']
	end_date=request.json['end_date']
	
	e = Edu(user_id=user_id,
 	        col_name=col_name,
 	        desc=desc,
 	        degree=degree,
 	        start_date=start_date,
 	        end_date=end_date)

	db.session.add(e)
	db.session.commit()
	return jsonify(col_name=col_name,
		user_id=user_id,
		desc=desc,
		degree=degree,
		start_date=start_date,
		end_date=end_date)
