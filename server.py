from flask import Flask, render_template , request 


app = Flask(__name__)  

@app.route("/", methods=["GET", "POST"])
def index():
    print(request.method)
    nome = request.form.get("Nome-fundo")
    cota = request.form.get("Valor-cota")
    quantidade = request.form.get("Quantidade-cota")    
    print(f"Fundo de investimento: {nome}")
    print(f"Valor da cota: {cota}")
    print(f"Quantidade de cotas: {quantidade}")
    return render_template("main.html")
    




@app.route("/contato")
def contato():
    return render_template("contato.html")


app.run()

