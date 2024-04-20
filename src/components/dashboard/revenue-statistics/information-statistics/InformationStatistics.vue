<template>
    <div class="statistic-item w-1/4 border border-grey-300 rounded-lg bg-white p-8 h-40   " v-for="(item, index) in htmlContent" :key="index">
         <p class="title-statistics font-semibold text-sm">{{  item.title }}</p>
         <div class="flex justify-between items-center mt-3 ">
             <div class="number-statistics">
                 <p class="font-bold text-3xl pb-1">{{ item.count}}</p>
                 <p :class="item.cssStyle"> +{{ item.number }}% <i :class="icon"></i></p>
             </div>
             <div class="line-statistics " >
                 <div class="w-40 flex justify-end -mt-4" v-html="item.lineChart"></div>
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
            icon:String,
            htmlContent:Array
          
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