<template> 
  <router-link to="/"/>
    <router-link to="/about"/>
    <router-view/>
</template>

<script>



  export default {
    name: 'App',
    components: {
     
    }
  }
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
body {
  background-color:#f9fafb ;
  height: 100vh;
}

</style>
