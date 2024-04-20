<template>
    <div class="list bg-white p-3 border border-gray-300">
       <TitleListUser/>
       <TableUser/>
    </div>
</template>
<script>
import TitleListUser from './title/Title.vue'
import TableUser from './table-user/TableUser.vue'

export default {
    name: 'ListUser',
    components: {
        TitleListUser,
        TableUser
    }
}
</script>