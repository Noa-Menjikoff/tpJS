import ChampionProvider from "../services/championprovider.js";

export default class AllChampion {
  async render3() {
    let champions = await ChampionProvider.fetchUsers();
    let view = `
      <div class="search">
        <input type="text" id="searchBar" placeholder="Recherche par name" oninput="searchByName()">
      </div>
      <ul class="liste">
      ${champions.map(champion =>
        `<li>
          <div class="card">
          <img src="${this.isFavorite(champion.id) ? './IMG/favori.png' : './IMG/notfavori.png'}" class="favoris" id="${champion.id}" onclick="${this.isFavorite(champion.id) ? 'supprimer' : 'addToFavorites'}('${champion.id}')">
           
            <img src="${champion.icon}" ">
            <h3>${champion.name}</h3>
            <a href="#/champions/${champion.id}" class="btn btn-sm btn-outline-secondary">Voir +</a>
          </div>
        </li>`
      ).join('\n')}
      </ul>
    `;
    return view;
  }


  isFavorite(championId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(championId);
  }
  
  
}


