<template>
   <div class="image-product-detail flex gap-3">
      <div class="swiper-slider-image flex gap-y-8 flex-col w-40">    
            <div v-for="(item, index) in listImage" :key="index" @click="imageMain=item" :class="{'img-active':imageMain===item}">
               <img :src="item"/>
            </div>
      </div>
      <div class="image-product-main">
           <img :src="imageMain" class="w-full" style="width: 47rem;"/>
      </div>
   </div>
</template>
<script>
export default {
    name:'ImageProductDetail',
    data() {
     
      return {
         imageMain:"https://apollo.primevue.org/demo/images/ecommerce/productoverview/product-overview-3-1.png",
         listImage:[
            "https://apollo.primevue.org/demo/images/ecommerce/productoverview/product-overview-3-1.png",
            "https://apollo.primevue.org/demo/images/ecommerce/productoverview/product-overview-3-2.png",
            "https://apollo.primevue.org/demo/images/ecommerce/productoverview/product-overview-3-3.png",
            "https://apollo.primevue.org/demo/images/ecommerce/productoverview/product-overview-3-4.png",
         ]
      }
    },
    computed:{
       currentImageMain() {
            return this.listImage[this.imageMain];
       },
       
    },
    
    
    


}
</script>
<style>
.img-active {
   border:2px solid #6663f1;
}
</style>