<template>
    <div class="title-table flex justify-between items-center">
        <p class=" text-base font-semibold">Recent Sales</p>
        <div class="flex gap-8 items-center ">
            <div class="relative">
                <div class="icon-search absolute top-3 left-3  ">
                    <i class="pi pi-search text-sm"></i>
                </div>
                <div class="input-search ">
                    <input type="text" placeholder="Search" class="py-3 text-sm pl-10 rounded-full "/>
                </div>
            </div>
            <div class="upload bg-blue-500 w-10 h-10 rounded-full text-center">
               <i class="pi pi-upload text-white leading-10" style="line-height: 2.5rem;"></i>
           </div>
         </div>  
        </div>
    
</template>
<script>
    import 'primeicons/primeicons.css'
    
   export default {
       name: 'TitleTable',
   }
</script>
<style>
.upload {
    background-color: #6366f1;
}
.input-search input {
    border:1px solid #d1d5db;
    color:#d1d5db;
}
</style>