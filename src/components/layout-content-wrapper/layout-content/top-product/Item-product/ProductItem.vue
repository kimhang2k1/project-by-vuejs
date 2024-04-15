<template>
    <div class="product-item flex justify-between items-center p-3"  v-for="(item, index) in listProduct" :key="index">
        <div class="rate-product flex gap-4">
            <div class="image-product">
                 <img :src="item.image" width="75" style="box-shadow: 0 4px 10px #00000008,0 0 2px #0000000f,0 2px 6px #0000001f!important;"/>
            </div>
            <div class="result-rate-product">
                <p class="font-medium text-base mt-1 mb-1">{{ item.name}}</p>
                <div class="rating flex gap-2">
                    <i v-for="star in totalStars" :key="star" :class="{ 'pi pi-star-fill rated': star <= item.rating, 'pi pi-star text-star': star > item.rating }" ></i>
                </div>
            </div>
        </div>
        <div class="price-product">
           <span class="span-color font-semibold text-lg">${{ item.price}}</span>
        </div>
        
    </div>
</template>

<script>
   import 'primeicons/primeicons.css'
   export default {
       name:'ProductItem',
       props: {
             listProduct: Array 
       },
       data() {
          return {
            totalStars: 5
          };
        }
    }
</script>
<style>
.rating i {
    
    font-size: 15px;
}
.rated {
    color:#6366f1;
}
.span-color, .text-star {
    color:#6b7280;
}


</style>
