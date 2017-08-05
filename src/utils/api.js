//const API_ID = process.env.REACT_APP_API_ID 
//const APP_KEY = process.env.REACT_APP_APP_KEY
const API_ID ='072cf00d'
const APP_KEY= 'a7c8ee19bef858052a39b9c9b40d549c'

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}