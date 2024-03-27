import UserProvider from "../services/itemprovider.js";
import Utils from '../services/Utils.js'

export default class DetailItem {
async render3() {
    let request = Utils.parseRequestURL()
    let post = await UserProvider.getIttem(request.id)
    return `
    <section class="information">
    <img src="${post.icon}" ">
    <p> ${post.name} </p>
    <p> ${post.title}</p>
    <p> ${post.description}</p>
    <a href="https://www.leagueoflegends.com/fr-fr/champions/${post.id}" >Voir plus</a>
    <ul>
        ${post.tags.map( genre =>
            `<li> ${genre} </li>`
            ).join('\n ')
        }
    </ul>
    </section>
    <a href = '/'><button>Back to home</button></a>`;
  
    }
}
