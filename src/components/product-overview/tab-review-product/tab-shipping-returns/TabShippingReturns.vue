<template>
    <div class="tab-shipping-and-return p-3">
        <div class="title-tab-shipping mt-5 mb-4">
            <p class="text-2xl font-bold text-black">Shipping Placeholder</p>
        </div>
        <div class="tab-details-content mb-5 text-sm">
            <p>Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus. Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum.</p>
        </div>
        <div class="list-infor flex justify-between ">
           <div class="highlights w-1/2">
                <div class="pb-4">
                    <span class="font-semibold text-sm text-black">Shipping Costs</span>
                </div>
                <ul class="list-disc text-sm pl-4">
                    <li class="mb-3">Japan - JPY 2,500</li>
                    <li class="mb-3">Europe - EUR 10</li>
                    <li class="mb-3">Switzerland - CHF 10</li>
                    <li class="mb-3">Canada - CAD 25</li>
                    <li class="mb-3">USA - USD 20</li>
                    <li class="mb-3">Australia - AUD 30</li>
                    <li class="mb-3">United Kingdom - GBP 10</li>
                </ul>
           </div> 
           <div class="material-and-care w-1/2">
                <div class="pb-4">
                    <span class="font-semibold text-sm text-black">Return Policy</span>
                </div>       
                <div>
                    <p class="text-sm">Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at.</p>      
                </div>
           </div> 
        </div>
    </div>
</template>
<script>
import 'primeicons/primeicons.css'

export default {
    name:'TabShippingReturns',
}
</script>