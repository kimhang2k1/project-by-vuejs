<template>
    <div class="table-user text-sm">
        <table class="w-full">
            <TableUserHeader/>
            <TableBodyUser :listUser="listUser"/>
        </table>
    </div>
</template>

<script>
import TableUserHeader from './table-user-header/TableUserHeader.vue';
import TableBodyUser from './table-body-user/TableBodyUser.vue'

export default {
    name:'TableUser',
    components:{
        TableUserHeader,
        TableBodyUser
    },
    data(){
        return {
            listUser: [
            { name:"James Butt", imageFlags:"https://dichthuatphuongdong.com/tienich/uploads/flags/shiny/32x32/dz.png", imageAvatar:"https://apollo.primevue.org/demo/images/avatar/ionibowcher.png", nameUser:"Ioni Bowcher", day:"09/13/2015", country:"Algeria", number:"17%"},
            { name:"Josephine Darakjy", imageFlags:"https://dichthuatphuongdong.com/tienich/uploads/flags/flat/32x32/eg.png", imageAvatar:"https://apollo.primevue.org/demo/images/avatar/amyelsner.png", nameUser:"Amy Elsner", day:"02/09/2019", country:"Egypt", number:"0%"},
            { name:"Art Venere", imageFlags:"https://dichthuatphuongdong.com/tienich/uploads/flags/flat/32x32/pa.png", imageAvatar:"https://apollo.primevue.org/demo/images/avatar/asiyajavayant.png", nameUser:"Asiya Javayant", day:"05/13/2017", country:"Panama", number:"63%"},
            { name:"Lenna Paprocki", imageFlags:"https://dichthuatphuongdong.com/tienich/uploads/flags/flat/32x32/si.png", imageAvatar:"https://apollo.primevue.org/demo/images/avatar/xuxuefeng.png", nameUser:"Xuxue Feng", day:"09/15/2020", country:"Slovenia", number:"37%"},
            { name:"Donette Foller", imageFlags:"https://dichthuatphuongdong.com/tienich/uploads/flags/flat/32x32/za.png", imageAvatar:"https://apollo.primevue.org/demo/images/avatar/ivanmagalhaes.png", nameUser:"Ivan Magalhaes", day:"05/20/2016", country:"South Africa", number:"68%"},
            { name:"Simona Morasca", imageFlags:"https://dichthuatphuongdong.com/tienich/uploads/flags/flat/32x32/eg.png", imageAvatar:"https://apollo.primevue.org/demo/images/avatar/ivanmagalhaes.png", nameUser:"Ivan Magalhaes", day:"	02/16/2018", country:"Egypt", number:"54%"},

        ]
        }
        
    }
}
</script>
<style>
tr{
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    padding: 0.875rem 0.875rem;
}
td {
    padding:1rem 1rem;
}
th {
    padding: 0.875rem;
    padding-left:1rem;
}
th {
    background-color:#f9fafb;
}
.progress {
  width: 100%;
  height:0.5rem;
  background-color: #f0f0f0;
}

.progress-bar {
  height: 100%;
  background-color: #6663f1;
}
</style>