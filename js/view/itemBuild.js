import ItemProvider from "../services/itemprovider.js";
import Utils from '../services/Utils.js'

export default class ItemBuild {
async render3() {
    let request = Utils.parseRequestURL();
    let items = await ItemProvider.fetchUsers();
    return `
    <a href ='#/build/${request.id}><button>Retour</button></a>
    <aside class="items_build">
            <ul class="liste">
            ${items.map( item =>
              `<li>
                <div class="card">
                  <img src="${item.icon}" ">
                  <h3>${item.name}</h3>
                  <a href="/" class="btn btn-sm btn-outline-secondary">Ajouter</a>
                </div>
              </li>`
              ).join('\n ')
            }
            </ul>
        </aside>
    <a href = '/champions'><button>Back to home</button></a>`;
}
}