
<template>
    <div class="table mt-4">
        <table class="text-sm">
         <HeaderTable/>
         <ColumnData bgStatus="status status-bg-green" name="Bamboo Watch" category="Accessories" price=65.00 status="INSTOCK" />
         <ColumnData  bgStatus="status status-bg-red"  name="Black Watch" category="Accessories" price=72.00 status="OUTOFSTOCK"/>
         <ColumnData   bgStatus="status status-bg-orange" name="Blue Band" category="Fitness" price=79.00 status="LOWSTOCK"/>
         <ColumnData   bgStatus="status status-bg-green" name="Blue T-shirt" category="Clothing" price=29.00 status="INSTOCK"/>
         
        </table>
    </div>
</template>
<script>
   import 'primeicons/primeicons.css'
   import HeaderTable from './header-table/HeaderTable.vue'
   import ColumnData from './column-data/ColumnData.vue'

   export default {
       name:'TableData',
       components: {
           HeaderTable,
           ColumnData
       }

   }
</script>
<style>

.icon {
    border:1px solid #6366f1;
    padding: 0.75rem 0;
}
.icon i {
    color:#6366f1;
}
tr{
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
}
th, td {
    padding: 1rem 1rem;
}
th {
    background-color:#f9fafb;
}
</style>