import ChampionProvider from "../services/championprovider.js";
import ItemProvider from "../services/itemprovider.js";
import Utils from '../services/Utils.js'

export default class Build {
async render3() {
    let request = Utils.parseRequestURL()
    let post = await ChampionProvider.getChampion(request.id)
    let items = await ItemProvider.fetchUsers()
    return `
    <div class="champion-build-container">
      <section class="build-container">
          <img src="${post.icon}" ">
          <div class="informations">
              <p> Attaque : ${post.stats.attackdamage}</p>
              <p> Puissance magique : ${0}</p>
              <p> Point de vie : ${post.stats.hp}</p>
              <p> Vitesse de mouvement : ${post.stats.movespeed}</p>
              <p> Armure : ${post.stats.armor}</p>
              <p> Résitance magique : ${post.stats.spellblock}</p>
              <p> Vitesse d'attaque : ${post.stats.attackspeed}</p>
              <p> Portée de l'attaque : ${post.stats.attackrange}</p>
          </div>
      </section>
      <div class="items_build">
        <div class="scrollable-list">
              <ul class="liste">
              ${items.map( item =>
                `<li>
                  <div class="card">
                    <img src="${item.icon}" ">
                    <h3>${item.name}</h3>
                    <pclass="btn btn-sm btn-outline-secondary" onclick="">Ajouter</p>
                  </div>
                </li>`
                ).join('\n ')
              }
              </ul>
            </div>
          </div>
    </div>
    
    <a href = '/champions'><button>Back to home</button></a>`;
  
    }

    addItem(post,item) {
      console.log(post);
      ChampionProvider.addItemIdToChampion(post.id,item.id);
    }
}


