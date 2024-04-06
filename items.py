import json

# Étape 1: Ouvrir le fichier JSON
with open('champions.json', 'r') as file:
    data = json.load(file)

# Étape 2: Parcourir chaque champion et ajouter une liste d'items
for champion in data['champions']:
    champion['items'] = []

# Étape 3: Écrire les données modifiées dans le fichier JSON
with open('champions.json', 'w') as file:
    json.dump(data, file, indent=4)