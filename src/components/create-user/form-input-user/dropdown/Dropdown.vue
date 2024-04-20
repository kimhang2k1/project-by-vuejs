<template>
    <div class="w-1/2 relative">
        <p class="font-medium text-sm">Country</p>
        <button class="w-full border border-gray-300 rounded-lg flex mt-2 text-sm text-gray-500 items-center justify-between" style="padding: 0.65rem 0.65rem;" @click="toggleDropdown" >
            <div>Select a country </div>
            <i class="pi pi-angle-down"></i>
        </button>
        
        <div class="dropdown absolute layout-light w-full rounded-lg" style="background-color: #f9fafb;box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);" v-if="isOpen"  ref="dropdown">   
            <div class="search-country p-3 relative">
                <input type="text" class="border border-gray-300 w-full rounded-lg" style="padding:0.55rem;">
                <div class="absolute top-6 right-6">
                    <i class="pi pi-search text-sm" style="color: #6b7280;"></i>
                </div>
            </div>
            <div class="bg-white border-t border-gray-300" >
                <div class="list-country h-40 overflow-auto mt-3">
                    <ul>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/au.png" class="pr-2"/>Australia</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/br.png"  class="pr-2"/>Brazil</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/fr.png"  class="pr-2"/>France</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/vn.png"  class="pr-2"/>Viet Nam</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/us.png"  class="pr-2"/>United States</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/jp.png"  class="pr-2"/>Japan</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/in.png"  class="pr-2"/>India</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/be.png" class="pr-2"/>Germany</li>
                        <li><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/flat/16x16/cn.png"  class="pr-2"/>China</li>
                    </ul>
              </div>
            </div>
        </div>

    </div>
</template>

<script>
import 'primeicons/primeicons.css'

export default {
    name:'DropdownCountry',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen= !this.isOpen;
        },
        close (e) {
            if (!this.$el.contains(e.target)) {
                this.isOpen = false
            }
    }
       
    },
   
   
    
    

    mounted () {
    document.addEventListener('click', this.close)
  },
  unmounted () {
    document.removeEventListener('click',this.close)
  }
   
  
    
}
</script>

<style>
.list-country  li {
    display: flex;
    padding: 0.75rem;
    color: #4b5563;
    font-size: 0.875rem;
}
.list-country li:hover {
    background-color: #f3f4f6;
}
</style>