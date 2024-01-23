import {User} from "../entities";
import axios from 'axios';

export const usersResults = (users: User[], value: string) => {
    return users.filter((user: User) => {
        return user.name.toLowerCase().includes(value.toLowerCase());
    });
}

export const getData = async (): Promise<User[] | []> => {
    let results = [];
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
     /*   for (const user of data) {
            let {geo} = user.address;
            let geoData = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${Number(geo.lat)}&lon=${Number(geo.lng)}`)
            console.log(geoData, 'geo data')
        }*/
        // Tried to geolocate the given coordinates but x,y points where located in the ocean, so I got an 'Unable to Geolocate' message from the API call.

        results = data
    } catch (err) {
        console.log(err, 'Error fetching data')
    }
    return results
}
