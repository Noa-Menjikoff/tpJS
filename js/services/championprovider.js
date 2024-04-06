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

    static addItemIdToChampion = async (champion, itemId) => {
        if (!champion) {
            console.log('Champion not found');
            return;
        }
        if (!champion.items) {
            console.log('iciciciciciciciciciccicicicic')
            champion.items = [];
        }
        champion.items.push(itemId);
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(champion)
        };
        try {
            const response = await fetch(`${ENDPOINT}/` + champion.id, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.log('Error updating champion', err);
        }
    }
}