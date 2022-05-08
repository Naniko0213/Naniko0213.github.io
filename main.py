
import requests
html = requests.get('https://www.antzb.com/index.html')
print(html.text)