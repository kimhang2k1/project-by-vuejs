<template>
    <div class="chart flex justify-between mt-8">
        <ColumnChart/>
        <PieChart/>
    </div>
</template>

<script>
   import ColumnChart from './column-chart/ColumnChart.vue' 
   import PieChart from './pie-chart/PieChart.vue' 

  export default {
    name:'ChartDashboard',
    components: {
        ColumnChart,
        PieChart
    }
  }
</script>