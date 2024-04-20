<template>
    <div class="layout-container flex">
        <SideBar/>
        <div class="page-create-user w-full mx-64 p-8 mr-0">
          <TopBar/>
          <CreateUser/>      
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/component-share/side-bar/SideBar.vue';
import TopBar from '@/components/component-share/top-bar/TopBar.vue';
import CreateUser from '@/components/create-user/CreateUser.vue';

   export default {
     name: 'PageCreateUser',
     components : {
        TopBar,
        CreateUser,
        SideBar     
     }
   }
</script>