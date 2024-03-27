import AllChampion from "./view/allChampion.js";
import Home from "./view/home.js";
import Detail from "./view/detail.js";
import Utils from "./services/Utils.js";
import About from "./view/about.js";
import Error404 from "./view/error404.js";

const routes = {
  '/': Home,
  '/about': About,
  '/champions': AllChampion,
  '/champions/:id': Detail, // New route
  
};



const router = async () => {
    console.log("router");
  const content = null || document.querySelector('#content');
  let request = Utils.parseRequestURL();
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  console.log(parsedURL);
  let page = routes[parsedURL] ? new routes[parsedURL] : new Error404;
  console.log(page);
  content.innerHTML = await page.render3();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
