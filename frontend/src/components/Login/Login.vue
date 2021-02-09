<template src='./Login.html' lang='html'>
</template>

<script>
import http from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    onSubmit () {
      return http({
        method: 'POST',
        url: 'http://localhost:9000/auth',
        data: {
          email: this.email
        }
      })
        .then(response => response.data)
        .then(token => {
          const newToken = 'JWT ' + token.token
          console.log(newToken)
          localStorage.setItem('token', newToken)
          setTimeout(() => {
            this.$router.push({name: 'home'})
          }, 1500)
        })
    }
  }
}
</script>