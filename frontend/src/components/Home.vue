<template>
  <recipe></recipe>
</template>

<script>
// el @ es un alias que crea webpack el cual deriva en src/components
import Recipe from '@/components/Recipe/Recipe'
export default {
  name: 'home',
  components: {
    Recipe
  }
}
</script>