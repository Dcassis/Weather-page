import requests

from translate import Translator

API_KEY = "61abe2de00cb61a5e27c15dfc824dc67"

cidade = "Brasília"

link = f"https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={API_KEY}&lang=pt_br&units=metric"

requisicao = requests.get(link)
print(requisicao.json())
requisicao_dic=requisicao.json()
descricao = requisicao_dic['weather'][0]['description']
temperatura = requisicao_dic['main']['temp']
humidade = requisicao_dic['main']['humidity']


print(f'{cidade} está com {descricao}, a temperatura nesse momento é de {temperatura:.1f} °C, com {humidade}% de humidade relativa do ar.')
link = "https://api.kanye.rest"
requisicao = requests.get(link)
requisicao_dic = requisicao.json()
frase = requisicao_dic['quote']

# Traduzindo a frase para o português do Brasil
tradutor = Translator(to_lang="pt")
frase_traduzida = tradutor.translate(frase)

# Exibindo a frase traduzida
print(f'A frase do dia é: {frase_traduzida}')