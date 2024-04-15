<template>
    <div class="pie-chart bg-white rounded-lg p-8 border border-grey-300">
        <p class=" text-base font-semibold pb-16">Sales By Category</p>
        <div>
            <Chart type="pie" :data="chartData" :options="chartOptions" class="w-80" />
        </div>
    </div>
</template>

<script>
  import { ref, onMounted } from "vue";
  import Chart from 'primevue/chart';

  export default {
      name:'PieChart',
      
   }

</script>
<script setup>

    onMounted(() => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();
    });

    const chartData = ref();
    const chartOptions = ref();

    const setChartData = () => {
        const documentStyle = getComputedStyle(document.body);
        return {
            labels: ['Electronics', 'Fashion', 'HouseHold'],
            datasets: [
                {
                    data: [100, 50, 300],
                    backgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--blue-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--blue-400')]
                }
            ]
        };
    };

    const setChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        return {
            plugins: {
                legend: {
                    labels: {
            
                        color: textColor
                    }
                }
            }
        };
    };
</script>
<style>
    .pie-chart {
        width: 23rem;
    }
    :root {
    --blue-500:#6366f1;
    --blue-400:#6366f1;
    --cyan-400:#D9DDFC;
    --orange-400:#8082e0;
    --orange-500:#8082e0;
    

    
    }
</style>