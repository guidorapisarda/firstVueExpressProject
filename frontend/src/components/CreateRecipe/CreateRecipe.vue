<template src='./CreateRecipe.html' lang='html'>
    
</template>

<script>
import http from 'axios'
export default {
  name: 'CreateRecipe',
  data () {
    return {
      title: '',
      persons: 0,
      time: 0,
      difficulty: 'easy',
      ingredients: '',
      description: '',
      success: false
    }
  },
  methods: {
    parseIngredients () {
      return this.ingredients.split('\n')
    },
    onSubmit () {
      const ingredients = this.parseIngredients()
      console.log('llegue hasta antes del request.')
      return http({
        method: 'POST',
        url: 'http://localhost:9000/recipes',
        headers: {
          Authorization: localStorage.getItem('token')
        },
        data: {
          title: this.title,
          persons: this.persons,
          time: this.time,
          difficulty: this.difficulty,
          ingredients: ingredients,
          description: this.description,
          success: this.success
        }
      })
        .then(response => response.data)
        .then(data => {
          this.success = true
          setTimeout(() => {
            this.title = ''
            this.persons = 0
            this.time = 0
            this.difficulty = 'easy'
            this.ingredients = ''
            this.description = ''
            this.success = false
          }, 3000)
        })
    }
  }
}
</script>