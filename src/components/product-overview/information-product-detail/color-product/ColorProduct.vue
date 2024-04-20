<template>
    <div class="color-product mb-5">
        <p class="font-bold pb-4 text-sm">Color</p>
        <div class="flex gap-3" >
            <div   @click="currentColor=index" v-for="(cls, index) in className" :key="index"  >      
                <div :class="cls.class" :style="{boxShadow: currentColor === index ? boxShadowColor: 'none'}"></div>
            </div>
        </div>
    </div>
    
</template>
<script>

export default {
    name: 'ColorProduct',
    data(){
        return {
            currentColor: 0,
            className: [
                {class: "w-7 h-7 rounded-full border-2 border-gray-300 bg-gray cursor-pointer"},
                {class: "w-7 h-7 rounded-full border-2 border-gray-300 bg-green  cursor-pointer"},
                {class: "w-7 h-7 rounded-full border-2 border-gray-300 bg-blue  cursor-pointer"},
            ],
            boxShadowCss: [
                 "0 0 0 0.2rem #64748b",
                 "0 0 0 0.2rem #22c55e",
                 "0 0 0 0.2rem #3b82f6",

            ]
        }
    },
    computed: {
        boxShadowColor() {
          return this.boxShadowCss[this.currentColor];
        }
  }
    
    
}
</script>
<style>
.bg-gray {
  
    background-color:#64748b ;
}

.bg-green {
    background-color:#22c55e;
}
.bg-blue {
   background-color: #3b82f6;
}
</style>