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
    </section>
    <p><a href = '/'>Back to home</a></p>`;
  
    }
}
