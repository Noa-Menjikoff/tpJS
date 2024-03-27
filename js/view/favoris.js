import ChampionProvider from "../services/championprovider.js";

export default class Favoris {
  async render3() {
    let favoriteIds = this.getFavoriteIdsFromLocalStorage();
    
    let championPromises = favoriteIds.map(id => this.cardChamp(id));
    let champions = await Promise.all(championPromises);
    
    let view = `
      <h2>Favoris</h2>
      <ul class="liste-favoris">
        ${champions.join('\n')}
      </ul>
    `;
    return view;
  }

  getFavoriteIdsFromLocalStorage() {
    let favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    return favoriteIds;
  }

  async cardChamp(id){
    let champion = await ChampionProvider.getChampion(id);
    console.log(champion.id);
    return `
      <li>
        <div class="card">
          <img src="${champion.icon}" ">
          <h3>${champion.name}</h3>
          <p>${champion.description}</p>
          <a href="#/champions/${champion.id}" class="btn btn-sm btn-outline-secondary">Voir +</a>
        </div>
      </li>`;
  }
}
