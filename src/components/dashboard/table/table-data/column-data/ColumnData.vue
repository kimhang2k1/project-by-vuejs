<template>
    <tr>
        <td> {{  name }}</td>
        <td> {{ category }}</td>
        <td> ${{  price }}</td>
        <td ><span :class="bgStatus" >{{  status }}</span></td>
        <td class="flex justify-end"> <div class="icon rounded-full w-11 h-11 text-center   "><i class="pi pi-search"></i></div></td>
    </tr>
</template>
<script>
    import 'primeicons/primeicons.css';
    export default {
        name:'ColumnData',
        props: {
            bgStatus: String,
            name: String,
            category: String,
            price: Number,
            status: String
        }
    }
</script>
<style>
   .status{
      color:white;
      font-weight: 700;
      padding: 0.25rem 0.4rem;
      font-size: 11px;
      border-radius: 6px;
   }
   .status-bg-green {
     background-color: #22C55E;
   }
   .status-bg-red {
    background-color: #EF4444;

   }
   .status-bg-orange {
    background-color: #f97316;
   }
  
</style>