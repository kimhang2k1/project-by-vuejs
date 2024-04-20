<template>

    <div class="progress w-20 rounded-full h-2">
      <div class="progress-bar rounded-r-none rounded-l-full" :style="{width:progressBar}"></div>
  </div>
  
  </template>
  <script>
    export default {
    name:'ProgressBar',
    props:{
      number: {
        type:String,
        required:true
      }
    },
    data() {
        return {
         progressBar:this.number,
       };
      },
  
  }
  </script>

<style>

</style>