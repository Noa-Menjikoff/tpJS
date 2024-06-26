import ChampionProvider from "../services/championprovider.js";
import Utils from '../services/Utils.js'

export default class Detail {
async render3() {
    let request = Utils.parseRequestURL()
    let post = await ChampionProvider.getChampion(request.id)
    return `
    <section class="information">
    <img src="${post.icon}" ">
    <p> ${post.name} </p>
    <p> ${post.title}</p>
    <p> ${post.description}</p>
    <a href="https://www.leagueoflegends.com/fr-fr/champions/${post.id}" >Voir plus</a>
    <ul>
        ${post.tags.map( genre =>
            `<li> ${genre} </li>`
            ).join('\n ')
        }
    </ul>
    <div class="stats-container">
    <p> Attaque : ${post.stats.attackdamage}</p>
    <p> Puissance magique : ${0}</p>
    <p> Point de vie : ${post.stats.hp}</p>
    <p> Vitesse de mouvement : ${post.stats.movespeed}</p>
    <p> Armure : ${post.stats.armor}</p>
    <p> Résitance magique : ${post.stats.spellblock}</p>
    <p> Vitesse d'attaque : ${post.stats.attackspeed}</p>
    <p> Portée de l'attaque : ${post.stats.attackrange}</p>
    </div>
    <div class="build-container">
    <a id="build" href ='#/build/${post.id}' class="btn btn-sm btn-outline-secondary"><button>Créer un équipement</button></a>
    </div>
    </section>
    <a href = '/'><button>Back to home</button></a>`;
  
    }
}
