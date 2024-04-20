<template>
    <div class="layout-side-bar layout-light fixed w-64 h-screen bg-white">
        <ImageLogo />
        <LayoutMenuContainer/>
        
    </div>
 </template>
 
 <script>
   import ImageLogo from './logo/Logo.vue'
   import LayoutMenuContainer from './layout-menu-container/LayoutMenuContainer.vue'
   export default {
     name : 'SideBar',
     components: {
         ImageLogo,
         LayoutMenuContainer
     }
   }
 </script>

<style>
.layout-light {
  box-shadow: 0px 4px 50px #D9DDFC;
 
}
</style>