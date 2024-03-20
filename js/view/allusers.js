import UserProvider from "../services/userprovider.js";

export default class AllUsers {
  async render3() {
    let animes = await UserProvider.fetchUsers();
    let view = `
      <ul>
      ${animes.map( anime =>
        `<li>
          <div class="card">
            <img src="${anime.img}" ">
            <h3>${anime.name}</h3>
            <a href="#/mangas/${anime.id}" class="btn btn-sm btn-outline-secondary">Voir +</a>
          </div>
        </li>`
        ).join('\n ')
      }
      </ul>
    `;
    return view;
  }
}