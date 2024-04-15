<template>
     <div class="revenue-statistics w-full">
        <div class="information-statistics flex justify-between gap-8">
          <InformationStatistics  title="Sales" count="120" number="12" line="/img/line_1.png" cssStyle="text-green-500 pr-4 font-medium text-sm" icon="fa-solid fa-arrow-up pl-2 text-sm"/>  
          <InformationStatistics  title="Revenge" count="$4500" number="20" line="/img/line_2.png" cssStyle="text-green-500 pr-4 font-medium text-sm" icon="fa-solid fa-arrow-up pl-2 text-sm"/>  
          <InformationStatistics  title="Visitors" count="360" number="34"  line="/img/line_3.png"  cssStyle="text-red-500 pr-4 font-medium text-sm" icon="fa-solid fa-arrow-down pl-2 text-sm"/>  
          <InformationStatistics  title="Stock" count="164" number="30" line="/img/line_4.png"  cssStyle="text-green-500 pr-4 font-medium text-sm" icon="fa-solid fa-arrow-up pl-2 text-sm"/>  
        </div>
        
     </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import InformationStatistics from './information-statistics/InformationStatistics.vue';


    export default defineComponent ({
        name: 'RevenueStatstics',
        components: {
            InformationStatistics
        },
        

})
  
  
        
        
    
</script>