<template>
    <div class="statistic-item w-1/4 border border-grey-300 rounded-lg bg-white p-8 h-44   ">
         <p class="title-statistics font-semibold text-sm">{{  title }}</p>
         <div class="flex justify-between items-center mt-3 ">
             <div class="number-statistics">
                 <p class="font-bold text-3xl pb-1">{{ count}}</p>
                 <p :class="cssStyle"> +{{ number }}% <i :class="icon"></i></p>
             </div>
             <div class="line-statistics w-48 flex justify-end -mt-4" >
                  <img :src="line" class="-mr-5"/>
            </div>
         </div>
    </div>
    
</template>
<script>
   import { defineComponent } from 'vue';

   export default defineComponent({
        name: "InformationStatistics",
        props: {
            title : String,
            count : Number,
            number: Number,
            line : String,
            cssStyle: String,
            icon:String
          
        },
        
        
});

</script>

<style>
.statistic-item {
    box-shadow: 0px 4px 30px rgba(221, 224, 255, .54);
}
.title-statistics {
    color:#4b5563;
}
</style>