<template>
   <div class="product-detail bg-white p-8 border border-gray-300 rounded-lg ">
        <div class="product-overview flex gap-16 mb-7">
            <ImageProductDetail/>
            <InformationProductDetail/>
        </div>
        <TabReviewProduct/>
   </div>
</template>
<script>
import ImageProductDetail from './image/ProductImage.vue'
import InformationProductDetail from './information-product-detail/InformationProductDetail.vue'
import TabReviewProduct from './tab-review-product/TabReviewProduct.vue'
export default {
    name:'ProductOverview',
    components:{
        ImageProductDetail,
        InformationProductDetail,
        TabReviewProduct
    }

}
</script>