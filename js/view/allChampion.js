import UserProvider from "../services/userprovider.js";

export default class AllChampion {
  async render3() {
    let champions = await UserProvider.fetchUsers();
    let view = `
      <div class="search">
        <input type="text" id="searchBar" placeholder="Recherche par name" oninput="searchByName()">
      </div>
      <ul class="liste">
      ${champions.map( champion =>
        `<li>
          <div class="card">
            <img src="${champion.icon}" ">
            <h3>${champion.name}</h3>
            <a href="#/champions/${champion.id}" class="btn btn-sm btn-outline-secondary">Voir +</a>
          </div>
        </li>`
        ).join('\n ')
      }
      </ul>
    `;
    return view;
  }
}