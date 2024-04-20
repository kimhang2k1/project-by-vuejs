<template>
    <div class="website">
        <p class="font-medium text-sm">Website</p>
        <div class="field-input-website flex items-center">
            <span class="text-sm rounded-l-lg">www</span>
            <input type="text" class="border border-gray-300 w-full p-2 rounded-l-none rounded-r-lg mt-2"/>
        </div>
    </div>
</template>

<script>
export default {
    name:'InputWebsite',
   
}
</script>
<style>
.field-input-website span {
    background: #f3f4f6;
    color: #6b7280;
    border-top: 1px solid #d1d5db;
    border-left: 1px solid #d1d5db;
    border-bottom: 1px solid #d1d5db;
    padding: 0.625rem;
    min-width: 3rem;
    margin-top: 0.5rem;
}
</style>