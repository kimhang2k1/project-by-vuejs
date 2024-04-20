<template>
   <div class="create-user bg-white p-8 border border-gray-300 rounded-lg">
    <p class=" text-base font-semibold pb-16">Create User</p>
    <div class="form flex gap-8">
        <ProfileUser/>
        <FormInputUser/>
    </div>
   </div>
</template>

<script>
import ProfileUser from './profile/Profile.vue'
import FormInputUser from './form-input-user/FormInputUser.vue'

export default {
    name:'CreateUser',
    components: {
        ProfileUser,
        FormInputUser
    }
}
</script>
<style>
.profile-user {
    width: 15%;
}
.field-input-user {
    width: 85%;
}
</style>