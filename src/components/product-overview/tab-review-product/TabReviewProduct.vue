<template>
    <div class="tab-review-product">
        <div class="flex gap-8 border-b-2 border-gray-300 font-bold text-gray-500 text-sm">
            <div v-for="(tab, index) in tabs" :key="index" :class="{ 'tab-active cursor-pointer p-4': activeTab === index, 'cursor-pointer p-4': activeTab !== index }" @click="activeTab = index">
            {{  tab.name }}
        </div>
        </div>
        <div class="tab-content">
            <component :is="currentTabComponent"></component>
        </div>   
    </div>
</template>
<script>

import TabDetails from './tab-details/TabDetails.vue';
import TabReviews from './tab-reviews/TabReviews.vue';
import TabShippingReturns from './tab-shipping-returns/TabShippingReturns.vue';
export default {
    name:'TabReviewProduct',
    data() {
    return {
      activeTab: 0,
      tabs: [
        { name: 'Details', component: TabDetails },
        { name: 'Reviews', component: TabReviews },
        { name: 'Shipping and Returns', component: TabShippingReturns }
      ]
    };
  },
    computed: {
        currentTabComponent() {
        return this.tabs[this.activeTab].component;
        }
    }
}
</script>
<style>
.tab-active {
    border-bottom: 2px solid #6663f1;
    color:#6663f1;
    margin-bottom: -2px;
}
</style>