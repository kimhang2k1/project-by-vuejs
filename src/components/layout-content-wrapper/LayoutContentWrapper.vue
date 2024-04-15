<template>
    <div class="layout-content-wrapper w-full mx-64 p-8 mr-0
    ">
        <TopBar/>
        <LayoutContent/>
    </div>
</template>

<script>
   import LayoutContent from './layout-content/LayoutContent.vue';
import TopBar from './top-bar/TopBar.vue'

   export default {
     name: 'LayoutContentWrapper',
     components : {
        TopBar,
        LayoutContent
     }
   }
</script>