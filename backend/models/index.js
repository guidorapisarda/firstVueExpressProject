import db from '../database'

import RecipeSchema from './recipes'

//esto exporta el modelo, no el schema.
export const Recipe = () =>
  db.connection().model('Recipe', RecipeSchema)