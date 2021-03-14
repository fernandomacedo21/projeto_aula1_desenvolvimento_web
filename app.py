from flask import Flask, render_template, request


app = Flask (__name__) # criamos a aplicação Flask

@app.route('/pagina_pricipal/<parametro>')
def ola(parametro):
    return "<h1>Olá pessoal!</h1><br> Meu nome é: " + parametro

@app.route('/contato')
def contato():
     return render_template('contato.html')  

@app.route('/demonstracao')
def demonstracao():
    titulo_pagina = 'Demonstração do Flask'
    lista = ['Helio', 'Roger', 'Maria', 'Raquel', 'João']
    return render_template('demonstracao.html', titulo = titulo_pagina, nomes = lista)  

@app.route('/entrar', methods=['GET', 'POST'])
def entrar():
    msg = ''
    if request.method == 'POST':
        form = request.form
        usuario = form.get('usuario') # o parametro usuario vem lá do atributo 'name' no HTML
        senha = form.get('senha') # o parametro senha vem lá do atributo 'password' no HTML
        msg = 'Processei os dados no Flask: usuário:' + usuario + ' / senha: ' + senha
    return render_template('entrar.html', mensagem=msg)
    
 

app.run() #rodamos a aplicação em Flask