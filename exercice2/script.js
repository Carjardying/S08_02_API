const allRecipeUrl = 'https://www.dummyjson.com/recipes/search?q=Tomato';
// const allRecipeUrl = "https://www.dummyjson.com/recipes?sortBy=mealType&order=asc";

async function fetchRecipes(){
    const response = await fetch(allRecipeUrl);
    const allRecipes = await response.json();
   
    console.log(allRecipes);
}

fetchRecipes()