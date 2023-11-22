<script setup>

const {product}=defineProps(['product']);
import { useCartStore } from '../store/cart.js'
const cartStore = useCartStore();

definePageMeta({
    layout:'products'
});
</script>

<template>
        <div class="card absolute ">
            <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="p-7 order-1">
                    <img :src="product.image" class="h-full object-center mx-auto">
                </div>
                <div class="p-7 order-2 text-center">
                    <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 
                    sm:text-4xl lg:text-3xl xl:text-4xl">{{ product.title }}</h1>
                    <p class="text-xl font-bold my-7 ">Price ${{ product.price }}</p>
                    <h3 class="mt-2 text-gray-600 sm:mt-4 sm:text-xl my-4">Product description : </h3>
                    <hr>
                    <p class="my-4">{{ product.description }} </p>

                    <button  @click="cartStore.add(product.id)" class="btn">
                        <span> Add To Card</span> </button>
                    
                </div>
            </div> 
            
        </div>



</template>
