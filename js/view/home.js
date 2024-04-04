import ChampionProvider from "../services/championprovider.js";
import Utils from '../services/Utils.js';
import ItemProvider from "../services/itemprovider.js";

export default class Home {
    async render3() {
        let champions = await ChampionProvider.fetchUsers();
        let items = await ItemProvider.fetchUsers();
        items = items.slice(0,5);
        champions = champions.slice(0, 5); // Sélectionne seulement les 5 premiers champions
        let view = `
            <div class='home'>
                <div class='information'>
                    <p>Bienvenue sur notre site dédié à League of Legends, l'univers épique où la stratégie, l'action et la compétition se rencontrent pour créer des moments inoubliables. Que vous soyez un vétéran chevronné ou un nouvel arrivant curieux, notre plateforme est votre guide ultime pour explorer les champions et les objets qui peuplent cet univers fantastique.</p>
                </div>
                <div class='champion-container'>
                <h2>Champions</h2>
                <ul class="liste">
                    ${champions.map(champion =>
                        `<li>
                            <div class="card">
                                <img src="${champion.icon}" ">
                                <h3>${champion.name}</h3>
                                <a href="#/champions/${champion.id}" class="btn btn-sm btn-outline-secondary">Voir +</a>
                            </div>
                        </li>`
                    ).join('\n')}
                    </ul>
                    <a href = '#/champions'><button>Voir tous les champions</button></a>
                </div>
                <div class='item-container'>
                <h2>Objets</h2>
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
                    <a href = '#/items'><button>Voir tous les objets</button></a>
                </div>
            </div>
        `;
        return view;
    }
}
