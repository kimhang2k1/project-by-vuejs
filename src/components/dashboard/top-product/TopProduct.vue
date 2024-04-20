<template>
   <div class="top-product bg-white p-8 rounded-lg border border-grey-300">
      <p class=" text-base font-semibold pb-7">Top Products</p>
      <div class="product">
           <ProductItem :listProduct ="listProduct"/>
      </div>
   </div>

</template>

<script>

import ProductItem from './Item-product/ProductItem.vue'


export default {
    name:'TopProduct',
    components: {
        ProductItem
    },
    data() {
        return {
            listProduct: [
                { name: 'Bamboo Watch', rating: 5, image:"https://apollo.primevue.org/demo/images/product/black-watch.jpg", price:65},
                { name: 'Black Watch', rating: 4, image:"https://apollo.primevue.org/demo/images/product/blue-band.jpg", price:79 },
                { name: 'Blue Band', rating: 3,image:"https://apollo.primevue.org/demo/images/product/blue-band.jpg", price:72 },
                { name: 'Blue T-shirt', rating: 5,image:"https://apollo.primevue.org/demo/images/product/blue-t-shirt.jpg", price:29 },
                { name: 'Bracelet', rating: 4,image:"https://apollo.primevue.org/demo/images/product/bracelet.jpg", price:15 },
                { name: 'Brown Purse', rating: 4,image:"https://apollo.primevue.org/demo/images/product/brown-purse.jpg", price:120 },
            ],
            
        };
  },
}

</script>

<style>
.top-product {
    width:41rem;
}
</style>