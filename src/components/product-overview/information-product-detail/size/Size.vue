<template>   
     <div class="size-product mb-5">
            <p class="font-bold pb-4 text-sm">Size</p>
            <div class="flex gap-3 text-sm" >
                <div :class="{'w-20 h-10 rounded-lg  flex items-center justify-center active cursor-pointer':currentSize===index , 'w-20 h-10 rounded-lg cursor-pointer  flex items-center border border-gray-300 justify-center': currentSize !== index}" 
                v-for="(size, index) in listSize" :key="index"
                @click="currentSize=index"> 
                  {{  size}}
                 </div>  
            </div>
        </div>
 </template>
 <script>
 export default {
     name: 'SizeProduct',
     data() {

        return {
            currentSize:0,
            listSize: [ 'XS', 'S', 'M', 'L','XL']
        }
     }
 }
 </script>
 <style>
 .active {
    border:2px solid #6366f1;
    color:#6366f1;
 }
</style>