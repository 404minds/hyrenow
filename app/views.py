from flask import render_template, flash, redirect,jsonify,request
from app import app
from .forms import LoginForm
@app.route('/')
@app.route('/index')
def index():
	return jsonify(username="Kshitij2",
                   email="kshitij.mittal01@gmail.com",
                   id="7")


@app.route('/signup', methods=['POST'])
def login():
	name=request.json['name']
	email=request.json['email']
	password=request.json['password']
	# print username
	return jsonify(name=name,
                   email=email,
                   password=password)
