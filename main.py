from flask import Flask, render_template, request, redirect

from replit import web, db

app = Flask (__name__)

@app.route("/")
def index():
  return render_template("register.html")

@app.route("/secret")
@web.authenticated
def secret():
  return render_template("secret.html")
  
web.run(app, debug=True)