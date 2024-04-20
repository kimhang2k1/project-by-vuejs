<template>
    <div class="icon-menu flex gap-8 items-center">
        <i class="fa-solid fa-bars text-xl"></i>
        <div class="text-sm font-semibold">
         <router-link v-for="(crumb, index) in breadcrumbs" :key="index" :to="crumb.to" >{{ crumb.text}}
         <span v-if="index !== breadcrumbs.length - 1" class="px-2"> / </span>
         </router-link>
        </div>
    </div>
</template>

<script>
   export default {
      name: 'IconMenu',
      data() {
         return {
            breadcrumbs: []
         }
      },
      created() {
         this.updateBreadcrumbs();
      },
      watch : {
        '$route' : 'updateBreadcrumbs'
      },
      methods: {
         updateBreadcrumbs() {
      const matchedRoutes = this.$route.matched;
      let breadcrumbs = [];
      matchedRoutes.forEach(route => {
        if (route.meta && route.meta.title) {
          breadcrumbs.push({
            text: route.meta.title,
            to: route.path
          });
        }
      });
      this.breadcrumbs = breadcrumbs;
    }
      }
   }
</script>

<style>
   .icon-menu {
      color: #6B727F;
   }
</style>