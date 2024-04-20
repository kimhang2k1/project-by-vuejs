<template>
   <router-link :to="linkRouter" exact active-class="active-menu"><li class= "text-sm" >  <i :class="icon"></i>  {{ content }}</li></router-link> 
   
 </template>
 
 <script>
    import 'primeicons/primeicons.css'
    export default {
       name: 'ContentMenu',
       props : {
          content: String,
          icon: String,
          linkRouter: String
       },
       
      
       
       
    }
 </script>
 <style>
 .active-menu {
   font-weight: bold;
   
 }
</style>