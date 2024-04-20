<template>
   <div class="title text-xs font-bold py-4 px-8  ">
       <p>{{ title }}</p>
   </div>

</template>

<script>
   export default {
      name: 'TitleMenu',
      props : {
         title: String
      }
   }
</script>

<style>
</style>