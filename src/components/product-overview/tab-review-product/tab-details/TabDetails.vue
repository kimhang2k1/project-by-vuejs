<template>
    <div class="tab-details p-3">
        <div class="title-tab-details mt-5 mb-4">
            <p class="text-2xl font-bold text-black">Product Details</p>
        </div>
        <div class="tab-details-content mb-5 text-sm">
            <p>Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.</p>
        </div>
        <div class="list-infor flex justify-between">
           <div class="highlights">
                <div class="pb-4">
                    <span class="font-semibold text-sm text-black">Highlights</span>
                </div>
                <ul class="list-disc text-sm pl-4">
                    <li class="mb-3">Vulputate sapien nec.</li>
                    <li class="mb-3">Purus gravida quis blandit.</li>
                    <li class="mb-3">Nisi quis eleifend quam adipiscing.</li>
                    <li class="mb-3">Imperdiet proin fermentum.</li>
                </ul>
           </div> 
           <div class="size-and-fit">
                <div class="pb-4">
                    <span class="font-semibold text-sm text-black">Size and Fit</span>
                </div>
                <ul class="text-sm pl-4">
                    <li class="mb-3"><span class="font-semibold text-gray-600">Leo vel:</span> Egestas congue.</li>
                    <li class="mb-3"><span class="font-semibold text-gray-700">Sociis natoque: </span>Purus gravida quis blandit.</li>
                    <li class="mb-3"><span class="font-semibold text-gray-700">Suspendisse in:</span>Purus sit amet volutpat.</li>                 
                </ul>
           </div> 
           <div class="material-and-care">
                <div class="pb-4">
                    <span class="font-semibold text-sm text-black">Materia and Care</span>
                </div>       
                <ul class=" text-sm flex justify-between gap-8">
                    <li><i class="pi pi-sun pr-1"></i> Not dryer safe</li>
                    <li><i class="pi pi-times-circle pr-1"></i>No chemical wash</li>
                    <li><i class="pi pi-sliders-h pr-1"></i>Iron medium heat</li>                 
                    <li><i class="pi pi-minus-circle pr-1"></i>Dry flat</li>                 
                </ul>        
           </div> 
        </div>
    </div>
</template>
<script>
import 'primeicons/primeicons.css'

export default {
    name:'TabDetails',
}
</script>