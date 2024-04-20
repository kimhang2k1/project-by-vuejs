<template>
    <div class="tab-reviews p-3">
        <div class="title-tab-review mt-5">
            <p class="text-2xl font-bold text-black">Customer Reviews</p>
        </div>
        <CommentCustomer :listComment = "listComment"/>
        
    </div>
</template>
<script>
import 'primeicons/primeicons.css'
import CommentCustomer from './comment-customer/CommentCustomer.vue'

export default {
    name:'TabReviews',
    components:{
      CommentCustomer
    },
    data() {
        return {
            listComment: [
                { result: 'Absolute Perfection!', rating: 4, commentCustomer:"Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non.", dateRate:"Darlene Robertson, 2 days ago"},
                { result: 'Classy', rating: 5, commentCustomer:"Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum.", dateRate:"Kristin Watson, 2 days ago"},
            ],  
        };
  },
}
</script>
<style>
.rated {
    color:#eab308;
}
.star-not-rated {
    color:#6b7280;
}
</style>