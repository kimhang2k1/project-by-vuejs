<template>
    <RevenueStatistics/>
    <ChartDashboard/>
    <div class="flex mt-8 gap-8">
      <ComponentTable/>
      <TopProduct/>
    </div>
    
</template>

<script>
   import ChartDashboard from './chart/Chart.vue';
   import RevenueStatistics from './revenue-statistics/RevenueStatistics.vue';
   import ComponentTable from './table/Table.vue';
   import TopProduct from './top-product/TopProduct.vue';

   
   export default {
     name: 'DashboardAdmin',
     components: {
        RevenueStatistics,
        ChartDashboard,
        ComponentTable,
        TopProduct
     }
   }
</script>