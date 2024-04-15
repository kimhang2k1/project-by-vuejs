<template> 
   <div class="layout-container flex">
      <SideBar/>
      <LayoutContentWrapper/>

   </div>
</template>

<script>
  import SideBar from './components/side-bar/SideBar.vue'
  import LayoutContentWrapper from './components/layout-content-wrapper/LayoutContentWrapper.vue'

  export default {
    name: 'App',
    components: {
      SideBar,
      LayoutContentWrapper
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
