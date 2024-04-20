<template>
    <tr v-for="(item, index) in listUser" :key="index">
        <td> {{ item.name}}</td>
        <td class="flex items-center"> <img :src="item.imageFlags" class="pr-1"/> {{  item.country }}</td>
        <td> {{ item.day}}</td>
        <td class="flex items-center"><img :src="item.imageAvatar" class="w-8 pr-1"/>{{  item.nameUser }}</td>
        <td> <ProgressBar :number="item.number"/></td>
    </tr>
</template>
<script>
import ProgressBar from './progress-bar/ProgressBar.vue'
  export default {
     name:'TableBodyUser',
     components:{
        ProgressBar
     },
     props:{
       name:String,
       imageFlags:String,
       imageAvatar: String,
       country : String,
       day: String,
       nameUser: String,
       number:String,
       listUser: Array
       
     }
  }
</script>
