import UserProvider from "../services/userprovider.js";
import Utils from '../services/Utils.js'

export default class AllUsers {
async render3() {
    let request = Utils.parseRequestURL()
    let post = await UserProvider.getAnime(request.id)
    return `
    <section class="information">
    <img src="${post.icon}" ">
    <p> ${post.name} </p>
    <p> ${post.title}</p>
    <p> ${post.description}</p>
    <ul>
        ${post.tags.map( genre =>
            `<li> ${genre} </li>`
            ).join('\n ')
        }
    </ul>
    <p> Statistiques : </p>
    <p> Attaque de départ : ${post.stats.attackdamage}</p>
    <p> Point de vie de départ : ${post.stats.hp}</p>
    <p> Croissance de point de vie par niveau : ${post.stats.hpperlevel}</p>
    <p> Vitesse de mouvement : ${post.stats.movespeed}</p>
    <p> Armure de départ : ${post.stats.armor}</p>
    <p> Résitance magique de départ : ${post.stats.spellblock}</p>
    <p> Vitesse d'attaque : ${post.stats.attackspeed}</p>
    <p> Portée de l'attaque : ${post.stats.attackrange}</p>
    </section>
    <p><a href = '/'>Back to home</a></p>`;
  
    }
}
