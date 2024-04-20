<template>
    <div class="layout-container flex">
        <SideBar/>
        <div class="page-product-overview w-full mx-64 p-8 mr-0">
          <TopBar/>
          <ProductOverview/>        
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/component-share/side-bar/SideBar.vue';
import TopBar from '@/components/component-share/top-bar/TopBar.vue';
import ProductOverview from '@/components/product-overview/ProductOverview.vue';

   export default {
     name: 'PageProductOverview',
     components : {
        TopBar,
        SideBar,
        ProductOverview
        
     }
   }
</script>