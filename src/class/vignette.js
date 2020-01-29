import fetch from "node-fetch"

const API_URL = 'http://13.93.14.99:8080/api/v1';
const API_KEY = 'xxx';


class Vignette {

    static checkValidity = async (_, { countryCode, license }) => {

        /*const request = await fetch(`${API_URL}/dz/check`, {
            method: "POST",
            headers: {
                'x-api_key': API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rz: license,
                zemeIso: countryCode,
            })
        });

        const data = await request.json();*/

        return true

    };

    static registerVignette = async (_, { type, countryCode, license, validityFrom, customer: { email, phone, name, ic, dic, street, city, zip, country } }) => {

        const remappedTypes = {
            D: "Desetidenni",
            M: "Mesicni",
            R: "Rocni"
        };

        /*const request = await fetch(`${API_URL}/dz/buy`, {
            method: "POST",
            headers: {
                'x-api_key': API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                typ: remappedTypes[type],
                zemeIso: countryCode,
                rz: license,
                platnostOd: validityFrom,
                zakaznik: {
                    email,
                    phone,
                    nazev: name,
                    ico: ic,
                    dic,
                    ulice: street,
                    mesto: city,
                    psc: zip,
                    zeme: country
                }
            })
        });

        const data = await request.json();*/

        return true

    }




}

export const query = {
    checkVignetteValidity: Vignette.checkValidity,
};


export const mutation = {
    registerVignette: Vignette.registerVignette,
};
