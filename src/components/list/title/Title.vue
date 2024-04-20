<template>
    <div class="title-list p-3
    ">
        <div class="flex justify-between items-center ">
            <div class="input-search-list relative">
                <input type="text" placeholder="Global Search" class="w-72 border border-gray-300 rounded-lg text-sm text-gray-500" style="width:17rem;padding:0.65rem;padding-left: 2.25rem;color:#4b5563;">
                <div class="absolute left-3 " style="top:0.65rem;">
                    <i class="pi pi-search text-sm text-gray-500"></i>
                </div>
            </div>
            <div class="btn-add-user">
               <router-link to="/profile/create"> <button class=" p-3 rounded-lg text-sm font-medium mt-2"><i class="pi pi-user-plus pr-1"></i> Add New</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'TitleListUser',
    
}
</script>
<style>
.btn-add-user button {
    border: 1px solid #6663f1;
    color:#6663f1;
}
.title-list {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
}
</style>