import ChampionProvider from "../services/championprovider.js";

export default class Favoris {
  async render3() {
    let favoriteIds = this.getFavoriteIdsFromLocalStorage();
    
    let championPromises = favoriteIds.map(id => this.cardChamp(id));
    let champions = await Promise.all(championPromises);
    
    let view = `
      <h2>Favoris</h2>
      <h1 onclick="vider()" class="vider">vider</h1>
      <ul class="liste">
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
          <img src="./IMG/poubelle.png" class="poubelle" onclick="supprimer('${champion.id}')">
          <img src="${champion.icon}" ">
          <h3>${champion.name}</h3>
          <p>${champion.name}</p>
          <a href="#/champions/${champion.id}" class="btn btn-sm btn-outline-secondary">Voir +</a>
        </div>
      </li>`;
  }
}
