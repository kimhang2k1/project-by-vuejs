<template>
    <div class="topbar-search relative">
        <div class="icon-search absolute top-2 left-3  ">
            <i class="pi pi-search" style="color: 'var(--primary-color)'"></i>
        </div>
        <div class="input-search ">
            <input type="text" placeholder="Search" class="py-2 text-sm pl-10 rounded-full border border-zinc-200"/>
        </div>
    </div>
</template>

<script>
   import 'primeicons/primeicons.css'
   export default {
      name: 'InputSearch',
   }
</script>

<style>
   .icon-search i {
    color:gray;
   }
</style>