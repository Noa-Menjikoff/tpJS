import ChampionProvider from "../services/championprovider.js";
import ItemProvider from "../services/itemprovider.js";
import Utils from '../services/Utils.js'

export default class Build {
async render3() {
    let request = Utils.parseRequestURL()
    let post = await ChampionProvider.getChampion(request.id)
    let items = await ItemProvider.fetchUsers()
    return `
    <section class="information">
        <img src="${post.icon}" ">
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
            <a id="build" href ='/itemBuild/${post.id}'><button>Ajouter un item</button></a>
        </div>
    </section>
    <a href = '/champions'><button>Back to home</button></a>`;
  
    }
}
