<template>
   <div class="price-product flex justify-between mb-5">
            <span class="font-medium text-2xl">$120</span>
            <div class="rate-product-detail flex gap-4 items-center">
                <ul class="star-rate flex gap-2 text-sm ">
                    <li><i class="pi pi-star-fill star-rated "></i></li>
                    <li><i class="pi pi-star-fill star-rated"></i></li>
                    <li><i class="pi pi-star-fill star-rated"></i></li>
                    <li><i class="pi pi-star-fill star-rated"></i></li>
                    <li><i class="pi pi-star text-gray"></i></li>
                </ul>
                <div class="number-reviewer ">
                    <p class="text-xs"><span class="text-sm font-bold">24</span> reviews </p>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'PriceProduct',
}
</script>