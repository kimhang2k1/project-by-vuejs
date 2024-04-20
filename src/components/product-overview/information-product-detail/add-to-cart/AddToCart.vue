<template>
      <div class="add-to-cart ">
            <p class="font-bold pb-4 text-sm">Quantity</p>
            <div class="flex items-center gap-4">
                <div class="input-number flex border border-gray-300 rounded-lg w-28 h-10 justify-between px-2 text-sm">
                    <button class="p-1"  @click="decreaseNumber"><i class="pi pi-minus"></i></button>
                    <input type="text" :value="number" class="w-8 text-center outline-none"/>
                    <button class="p-1" @click="increaseNumber"><i class="pi pi-plus"></i></button>
                </div>
                <div class="btn-add-to-cart flex gap-8 items-center w-3/4">
                    <button class="rounded-lg text-white text-sm font-medium w-full">Add to cart </button>
                    <i class="pi pi-heart"></i>
                </div>
            </div>
        </div>
 </template>
 <script>
 export default {
     name: 'AddToCart',
     data(){
        return {
            number:1,

        }
     },
    methods:{
        increaseNumber(){
           this.number++;
        },
        decreaseNumber() {
            if(this.number <= 1){
                this.number = 1;
            }
            else {
                this.number--;
            }
           
        }
    }
 }
 </script>