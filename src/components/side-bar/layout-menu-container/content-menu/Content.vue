<template>
   <li class="text-sm"> <a > <i :class="icon"></i>  {{ content }} </a></li>
 </template>
 
 <script>
    export default {
       name: 'ContentMenu',
       props : {
          content: String,
          icon: String
       }
    }
 </script>
 