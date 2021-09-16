const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export default class FoodApi{

    static getCountries(){
        return fetch(`${BASE_URL}/list.php?a=list`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => { throw new Error(error.message)})
    }

    static async getMealsByCountry(country){
        try{
            const response = await fetch(`${BASE_URL}/filter.php?a=${country}`);
            if(response.ok){
                const data = await response.json()
                return data
            }
            throw new Error(response.status)

        }catch(error){
            throw new Error(error)
        }
    }
}

