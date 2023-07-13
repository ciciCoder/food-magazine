// @ts-check
const recipeCrud = (() => {
  /**@type {Recipe[]} */
  const recipes = [];
  /**
   * Description
   * @param {Recipe} recipe
   */
  function addRecipe(recipe) {
    recipes.push({ ...recipe });
    return [...recipes];
  }

  /**
   * Description
   * @param {Recipe['name']} recipeName
   */
  function deleteRecipe(recipeName) {
    const index = recipes.findIndex(item => item.name === recipeName);
    if (index >= 0) recipes.splice(index, 1);
    return [...recipes];
  }

  /**
   * Description
   * @param {Recipe['name']} recipeName
   * @param {Recipe} data
   */
  function updateRecipe(recipeName, data) {
    const index = recipes.findIndex(item => item.name === recipeName);
    if (index >= 0) recipes[index] = { ...recipes[index], ...data };
    return [...recipes];
  }

  function getRecipes() {
    return [...recipes];
  }

  /**
   * Description
   * @param {string} keyword
   */
  function searchRecipe(keyword) {
    const regex = new RegExp(keyword, 'i');
    return recipes.filter(item => regex.test(item.name));
  }

  return { addRecipe, deleteRecipe, updateRecipe, getRecipes, searchRecipe };
})();

/**
 * @typedef {Object} Recipe
 * @property {string} name
 * @property {string} category
 * @property {Ingredient[]} ingredients
 * @typedef {Object} Ingredient
 * @property {string} ingredientName
 * @property {string} measurement
 */
