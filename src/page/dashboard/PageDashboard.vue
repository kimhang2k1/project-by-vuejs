<template>
    <div class="layout-container flex">
        <SideBar/>
        <div class="dashboard w-full mx-64 p-8 mr-0">
          <TopBar/>
          <DashboardAdmin/>
        
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/component-share/side-bar/SideBar.vue';
import TopBar from '@/components/component-share/top-bar/TopBar.vue';


import DashboardAdmin from '@/components/dashboard/Dashboard.vue';
   export default {
     name: 'PageDashboard',
     components : {
        TopBar,
        DashboardAdmin,
        SideBar
        
     }
   }
</script>