<!--de donde obtengo la info-->
<template src='./Detail.html' lang='html'></template>

<script>
// esto se usa para conectarse a la bd vía API.
import http from 'axios'
export default {
  // nombre del componente.
  name: 'detail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      recipe: []
    }
  },
  // defino un método para acceder a la bd.
  mounted () {
    this.getRecipe()
  },
  methods: {
    getRecipe () {
      return http({
        method: 'GET',
        // API se traduce en localhost:9000/ y se concatena con recipes.
        url: 'http://localhost:9000/recipes/' + this.id,
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then((response) => response.data)
        .then((data) => {
          this.recipe = data
        })
        .catch(() => this.$router.push({ name: 'login' }))
    }
  }
}
</script>