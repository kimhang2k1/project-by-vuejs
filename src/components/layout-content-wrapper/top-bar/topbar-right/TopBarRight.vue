<template>
    <div class="top-bar-right flex gap-8 items-center ">
        <InputSearch/>
        <IconSetting/>
        <AvatarProfile/>
    </div>
</template>

<script>
   import InputSearch from './input-search/InputSearch.vue'
   import IconSetting from './icon-setting/IconSetting.vue'
   import AvatarProfile from './avatar-profile/AvatarProfile.vue'

   export default {
      name: 'TopBarRight',
      components: {
         InputSearch, 
         IconSetting,
         AvatarProfile
      }
   }
</script>