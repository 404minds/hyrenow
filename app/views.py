from flask import render_template, flash, redirect,jsonify
from app import app
from .forms import LoginForm
@app.route('/')
@app.route('/index')
def index():
	return jsonify(username="Kshitij2",
                   email="kshitij.mittal01@gmail.com",
                   id="7")
