import UserProvider from "../services/itemprovider.js";

export default class AllItem {
  async render3() {
    let items = await UserProvider.fetchUsers();
    let view = `
      <div class="search">
        <input type="text" id="searchBar" placeholder="Recherche par name" oninput="searchByName()">
      </div>
      <ul class="liste">
      ${items.map( item =>
        `<li>
          <div class="card">
            <img src="${item.icon}" ">
            <h3>${item.name}</h3>
            <a href="#/items/${item.id}" class="btn btn-sm btn-outline-secondary">Voir +</a>
          </div>
        </li>`
        ).join('\n ')
      }
      </ul>
    `;
    return view;
  }
}