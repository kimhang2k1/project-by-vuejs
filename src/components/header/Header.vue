<template>
   <div class="header">
       <ComponentLogo />
   </div>
</template>

<script>
  import ComponentLogo from './logo/ComponentLogo.vue'
  export default {
    name : 'ComponentHeader',
    components: {
        ComponentLogo
    }
  }
</script>