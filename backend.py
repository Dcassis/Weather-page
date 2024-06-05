import requests

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

# # Verifica se existem resultados
# if 'results' in dados_json and len(dados_json['results']) > 0:
#     resultado = dados_json['results'][0]  # Obtém o primeiro resultado (já que você especificou 'itemsPerPage=1')
    
#     # Verifica se 'name' e 'population' existem no resultado
#     if 'name' in resultado and 'population' in resultado:
#         nome = resultado['name']
#         populacao = resultado['population']
        
#         print(f"Nome: {nome}, População: {populacao}")
#     else:
#         print("Campos 'name' e/ou 'population' não encontrados no resultado.")
# else:
#     print("Nenhum resultado encontrado.")