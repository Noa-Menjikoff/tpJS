export default class Error404 {
  async render3() {
    return `/*html*/
    <section class="error404">
      <h1>404</h1>
      <p>deso la page demandée n'existe pas</p>
      <p><a href = '/'>Back to home</a></p>
    </section>`;
  }
}