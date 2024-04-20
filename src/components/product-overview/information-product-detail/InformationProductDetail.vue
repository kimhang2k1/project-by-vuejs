<template>
    <div class="information-product-detail" style="width:30%;">
       <NameProduct/>
       <PriceProduct/>
       <ColorProduct/>
       <SizeProduct/>
       <AddToCart/>
    </div>
</template>

<script>
import 'primeicons/primeicons.css'
import NameProduct from './name-product/NameProduct.vue'
import PriceProduct from './price-product/PriceProduct.vue'
import ColorProduct from './color-product/ColorProduct.vue'
import SizeProduct from './size/Size.vue'
import AddToCart from './add-to-cart/AddToCart.vue'

export default {
    name:'InformationProductDetail',
    components:{
        NameProduct,
        PriceProduct,
        ColorProduct,
        SizeProduct,
        AddToCart
    }
}
</script>
<style>
.star-rated {
    color:#eab308;
}
.text-gray {
    color:#6b7280;
}
.btn-add-to-cart button {
    background-color: #6366f1;
    padding: 0.75rem 1.25rem;
}

</style>