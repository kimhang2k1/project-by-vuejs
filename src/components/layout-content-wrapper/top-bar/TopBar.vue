<template>
   <div class="layout-top-bar flex justify-between mb-8 gap-8 ">
       <IconMenu/>
       <TopBarRight/>
   </div>
</template>

<script>
   import IconMenu from './topbar-left/IconMenu.vue'
   import TopBarRight from './topbar-right/TopBarRight.vue'

   export default {
      name : 'TopBar',
      components : {
        IconMenu,
        TopBarRight
      }
   }
</script>