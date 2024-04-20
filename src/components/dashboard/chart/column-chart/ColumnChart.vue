<template>
   <div class="column-chart bg-white rounded-lg p-8 border border-grey-300">
       <p class=" text-base font-semibold pb-16">Revuene Overview</p>
       <div>
        <Chart type="bar" :data="chartData" :options="chartOptions" class="chart-2"  />
       
       </div>
   </div>
</template>

<script >
   export default {
      name: 'ColumnChart',
      
   };

</script>
<script setup>
    import Chart from 'primevue/chart'
    import { ref, onMounted } from "vue";

    onMounted(() => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();
    });

    const chartData = ref();
    const chartOptions = ref();

    const setChartData = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Profit',
                    backgroundColor: documentStyle.getPropertyValue('--pink-200'),
                    borderColor: documentStyle.getPropertyValue('--pink-200'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    };
    const setChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

</script>
<style>
.chart-2 {
    width: 70rem;
    height: 20rem;
}
:root {
    --blue-500: #6366f1;
    --pink-200: #D9DDFC;
}
</style>