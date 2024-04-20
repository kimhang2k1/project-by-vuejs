<template>   
    <div class="table-list bg-white rounded-lg p-8 border border-grey-300">
        <TitleTable/>   
        <TableData/>
   </div>
</template>

<script>
import TitleTable from './title-table/TitleTable.vue'
import TableData from './table-data/TableData.vue'


export default {
    name:'ComponentTable',
    components: {
        TitleTable,
        TableData
    }

}
</script>
<style>
.table-list {
 width: 56rem;
}
</style>