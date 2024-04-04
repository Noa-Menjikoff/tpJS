import ChampionProvider from "../services/championprovider.js";
import ItemProvider from "../services/itemprovider.js";
import Utils from '../services/Utils.js'

export default class Build {
async render3() {
  let request = Utils.parseRequestURL();
  let post = await ChampionProvider.getChampion(request.id);
  let items = await ItemProvider.fetchUsers();
  
  let itemsChamp = [];
  if (post.items && post.items.length > 0) {
      itemsChamp = await Promise.all(post.items.map(async itemId => {
          let item = await ItemProvider.getIttem(itemId);
          return item;
      }));
  }
  console.log(itemsChamp);
    
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
          <h2>les items equipées</h2>
          <ul class="liste">
            ${itemsChamp.map( obj =>
              `<li>
                <div class="card">
                  <img src="${obj.icon}">
                  <h3>${obj.name}</h3>

                </div>
              </li>`
              ).join('\n')
            }
          </ul>
      </section>
      <div class="items_build">
        <div class="scrollable-list">
              <ul class="liste">
              ${items.map( item =>
                `<li>
                  <div class="card">
                    <img src="${item.icon}">
                    <h3>${item.name}</h3>
                    <p class="btn btn-sm btn-outline-secondary" onclick="window.addItem('${item.id}')">Ajouter</p>

                  </div>
                </li>`
                ).join('\n')
              }
              </ul>
            </div>
          </div>
    </div>
    
    <a href = '/champions'><button>Back to home</button></a>`;
  
    }


}


window.addItem = async function(item) {
  console.log("lalalallalalalalal");
  console.log(champion);
  console.log(item);
  let request = Utils.parseRequestURL();
  let Champ = await ChampionProvider.getChampion(request.id);
  console.log(Champ);
  ChampionProvider.addItemIdToChampion(Champ, item);
  window.location.reload();
}