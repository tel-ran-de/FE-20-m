const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export default class FoodApi{

    static getCategories(){
        return fetch(`${BASE_URL}/categories.php`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => { throw new Error(error.message)})
    }

    static async getMealsByCategory(category){
        try{
            const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
            if(response.ok){
                const data = await response.json()
                return data
            }
            throw new Error(response.status)

        }catch(error){
            throw new Error(error)
        }
    }

    static async getMealById(id){
        try{
            const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
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

