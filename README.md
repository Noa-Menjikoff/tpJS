Pour démarrer le site :

dans 2 terminaux distincts :

- npx json-server champion.json

- php -S localhost:8000

et dans votre navigateur :

- localhost:8000

Explication des pages et de leur utilité :

allChampion.js :

Affiche tout les champions une fois que l'on à cliqué le bouton champions dans la nav bar, ces champions sont directement tirés de champions.json et extrait grâce à championprovider.js dans le dossier services 


allItem.js :

Affiche tous les items une fois que l'on a cliqué sur le bouton d'items dans la nav bar, ces items sont directement tirés de champions.json et extrait grâce à itemprovider.js dans le dossier services 


championprovider.js :

Extrait tous les champions de champions.json


itemprovider.js : 

Extrait tous les items de champion.json


build.js :

Affiche les données du champions et les items que l'on peut lui rajouter pour augmenter ses statistiques


detail.js :

Affiche les détails du champion sur lequel on a cliqué et donne un lien vers le site officiel


detailItem.js :

Affiche le détail de l'item sur lequel on à cliqué auparavant


favoris.js :

affiche les champions favoris que l'on a coché dans allChampion.js, on peut vider les favoris de façon globale ou individuelle


home.js :

page d'accueil avec 5 champions et 5 items en plus de quelques informations
