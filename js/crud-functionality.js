const recipeCrud = (() => {
  /**@type {Recipe[]} */
  const recipes = [];
  /**
   * Description
   * @param {Recipe} recipe
   * @returns {Recipe[]}
   */

  function addRecipe(recipe) {
    recipes.push({ ...recipe });
    return [...recipes];
  }

  function deleteRecipe(recipeName) {
    const index = recipes.findIndex(item => item.name === recipeName);
    if (index >= 0) recipes.splice(index, 1);
    return [...recipes];
  }

  function updateRecipe(recipeName, data) {
    const index = recipes.findIndex(item => item.name === recipeName);
    if (index >= 0) recipes[index] = { ...data };
    return [...recipes];
  }

  function getRecipes() {
    return [...recipes];
  }

  return { addRecipe, deleteRecipe, updateRecipe, getRecipes };
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
