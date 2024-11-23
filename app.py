from flask import Flask, send_from_directory, request, redirect, url_for
import os

app = Flask(__name__)

# Caminho para os arquivos HTML
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

# Rota para a página de cadastro (index.html)
@app.route('/')
def index():
    return send_from_directory(PROJECT_ROOT, 'index.html')

# Rota para a página de login (login.html)
@app.route('/login')
def login():
    return send_from_directory(PROJECT_ROOT, 'login.html')

# Rota para o login (POST)
@app.route('/login', methods=['POST'])
def login_post():
    cpf = request.form['cpf']
    senha = request.form['senha']
    # Lógica para verificar CPF e senha no LocalStorage ou banco de dados
    # Redireciona ou responde de acordo com a verificação
    return redirect(url_for('index'))  # Exemplo de redirecionamento

if __name__ == '__main__':
    app.run(debug=True)
