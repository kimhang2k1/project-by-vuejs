<template>
    <div :class="styleFieldInput">
        <p class="font-medium text-sm">{{ label}}</p>
        <input type="text" class="border border-gray-300 w-full p-2 rounded-lg mt-2"/>
    </div>
</template>

<script>
export default {
    name:'InputField',
    props:{
        styleFieldInput: String,
        label:String
    }

}
</script>
<style>
.field-input {
    width: 100%;
    margin-bottom: 1rem;
}
.field-input-left {
    width: 50%;
    margin-bottom: 1rem;
    margin-right:1.5rem;
    
}
.field-input-right {
    width: 50%;
    margin-bottom: 1rem;
    margin-right:0rem;
    
}
</style>