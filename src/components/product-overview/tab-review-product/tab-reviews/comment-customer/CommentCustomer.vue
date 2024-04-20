<template>
    <div class="comment-rate-customer pb-8 pt-6 border-b border-gray-300" v-for="(item, index) in listComment" :key="index">
            <div class="result-rate-customer mb-4">
                <div class="flex gap-1 text-sm" >
                   <i v-for="star in totalStars" :key="star" :class="{'pi pi-star-fill rated': star <= item.rating , 'pi pi-star-fill star-not-rated': star > item.rating}"></i>
                </div>
            </div>
            <div class="mb-4">
                <p class="font-bold text-black text-base">{{ item.result }}</p>
            </div>
            <div class="comment-custom mb-4">
                <p class="text-sm text-gray-600">{{ item.commentCustomer}}</p>
            </div>
            <div class="date-rate">
                <p class="text-sm font-medium text-gray-600">{{ item.dateRate }}</p>
            </div>
        </div>
</template>
<script>
import 'primeicons/primeicons.css'

export default {
    name:'CommentCustomer',
    props:{
        listComment: Array,
    },
    data() {
          return {
            totalStars: 5
          };
        }

}
</script>