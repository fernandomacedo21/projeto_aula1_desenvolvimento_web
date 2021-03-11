from flask import Flask, render_template 


app = Flask ("teste")

@app.route('/')
def ola():
    return "<h1>Olá Mundo :) !</h1>"

 
app.run()