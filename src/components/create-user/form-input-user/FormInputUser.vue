<template>
    <div class="field-input-user">
        <InputField styleFieldInput="field-input" label="Nick Name"/> 
        <UploadImage/>
        <TextAreaField/>
       <div class="flex">
          <InputField styleFieldInput="field-input-left" label="Email"/>
          <DropdownCountry/>
       </div>
       <div class="flex ">
          <InputField styleFieldInput="field-input-left" label="City"/>
          <InputField styleFieldInput="field-input-right" label="State"/>
       </div>
       <InputWebsite/>
       <ButtonField/>
      
    </div>
</template>

<script>
import InputField from './input/InputField.vue'
import UploadImage from './upload-image/UploadImage.vue'
import TextAreaField from './text-area/TextArea.vue'
import DropdownCountry from './dropdown/Dropdown.vue'
import InputWebsite from './input-website/InputWebsite.vue'
import ButtonField from './button/Button.vue'


export default {
    name:'FormInputUser',
    components: {
        InputField,
        UploadImage,
        TextAreaField,
        DropdownCountry,
        InputWebsite,
        ButtonField
        
    }
}
</script>