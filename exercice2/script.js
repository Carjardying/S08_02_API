const allRecipeUrl = 'https://www.dummyjson.com/recipes';

async function fetchRecipes(){
    const response = await fetch(allRecipeUrl);
    const allRecipes = await response.json();

    console.log(allRecipes.recipes);
}