import { ITEMS } from "../config.js";

export default class ItemProvider {
    static fetchUsers = async () => {
        try {
            const response = await fetch(ITEMS);
            const json = await response.json();
            return json;
        }
        catch (error) {
            console.error(error);
        }
    }

    static getIttem = async (id) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${ITEMS}/` + id, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
    }
}