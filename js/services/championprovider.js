import { ENDPOINT } from "../config.js";

export default class ChampionProvider {
    static fetchUsers = async () => {
        try {
            const response = await fetch(ENDPOINT);
            const json = await response.json();
            return json;
        }
        catch (error) {
            console.error(error);
        }
    }

    static getChampion = async (id) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${ENDPOINT}/` + id, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
    }
}