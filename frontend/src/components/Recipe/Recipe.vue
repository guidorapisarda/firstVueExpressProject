<!-- de donde obtengo la info-->
<template src='./Recipe.html' lang='html'></template>

<script>
// esto se usa para conectarse a la bd vía API.
import http from 'axios'
export default {
  // nombre del componente.
  name: 'recipe',
  data () {
    return {
      cards: []
    }
  },
  // defino un método para acceder a la bd.
  mounted () {
    this.getRecipes()
  },
  methods: {
    getRecipes () {
      return http({
        method: 'GET',
        // url: `${process.env.API}recipes`,
        url: 'http://localhost:9000/recipes',
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then((response) => response.data)
        .then((data) => {
          this.cards = data
        })
        .catch(() => this.$router.push({ path: '/login' }))
    }
  }
}
</script>