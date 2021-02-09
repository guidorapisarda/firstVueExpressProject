import {Recipe} from '../models'

class RecipesController {
  
  async recipe (req, res, next) {
    
    const data = await Recipe().getAll()
    
    return res
      .status(200)
      .json(data)
  }

  async recipeById (req, res, next) {
    console.log(req.params.id)
    const data = await Recipe().getById(req.params.id)
    return res
      .status(200)
      .json(data)
  }

  async addRecipe(req, res, next) {
    //creo un objecto con el modelo de Recipes.
    const newRecipe = Recipe()({
      title: req.body.title,
      description: req.body.description,
      persons: req.body.persons,
      difficulty: req.body.difficulty,
      time: req.body.time,
      ingredients: req.body.ingredients
    })
    //lo guardo en la bd.
    const data = await newRecipe.save()
    
    return res
      .status(201)
      .json(data)
  }

  async editRecipeById(req, res, next) {

    //creo un objecto con el modelo de Recipes.
    const newRecipe = {
      title: req.body.title,
      description: req.body.description,
      persons: req.body.persons,
      difficulty: req.body.difficulty,
      time: req.body.time,
      ingredients: req.body.ingredients
    }

    const data = await Recipe()
      .findOneAndUpdate(
        //busca el objeto a actualizar.
        {_id: req.params.id},
        //lo actualiza con la info del objeto nuevo.
        newRecipe,{
          //obligo a mongoose a darme el nuevo objeto.
          new: true
        })
    return res
      .status(201)
      .json(data)
  }
}

export default new RecipesController()
